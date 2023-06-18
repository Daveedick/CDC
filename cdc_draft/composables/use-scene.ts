import { Scene }                 from 'three/src/scenes/Scene';
import { Color }                 from 'three/src/math/Color';
import { Fog }                   from 'three/src/scenes/Fog';
import { useModelLoader }        from '../helpers/use-model-loader';
import { useCamera }             from '../helpers/camera';
import { useRenderer }           from '../helpers/renderer';
import { colorizeModels, captureDefaultColors }
                                 from '../helpers/color';
import { unref, ref }            from 'vue';
import { api }                   from '@/api';
import { manekenMock }           from '@/mocks/modelMock';
import { config }                from '@/config';
import { IAPIModel }             from '@/api/models.types';
import { IModel, IPart, EPartType, EScenePartType, ISceneItemCategory, IColorizeParams } 
                                 from '@/app/types';
import { useOrbitControls }      from '@/helpers/controls';
export const useScene = (scene?: Scene, options={

	background: new Color(0xFFFFFF),
	fog       : new Fog(0xa0a0a0, 0, 100)
}) => {

	if(!scene) {
		scene            = new Scene();
		scene.background = options.background;
		scene.fog        = options.fog;
	}

	const sceneItems = {
		lights    : {},
		models    : {},
		controls  : {},
		cameras   : {},
		categories: {
			[EScenePartType.MANEKEN] : null
		} as { [key: string]: ISceneItemCategory|null }
	};

	// TODO: Perspective use.
	const sceneState = {
		currentCamera: null,
		positionOffset: 0
	};
	
	// TODO: Use discrete layer for model non-3D data.
	const currentModel = ref({
		name    : '',
		price   : 0,
		types   : [],
		typesDescriptions: {},
		defaults: [],
		parts   : [],
		colors  : {},
		selectedParts: {},
		partMeshes: [],
		partMeshesTypes: {},
		partMeshesDescriptions: {},
		paletteColors: [],
		isLoaded: false,
		get: {},
		set: {}
	} as IModel);

	currentModel.value.get.partsByType = (partType: string): IPart[] => {
		return currentModel.value.parts.filter(item => item.type === partType &&
			(!item.base || !item.base.length || item.base.indexOf(currentModel.value.selectedParts[EPartType.BASE].name) !== -1)
		);
	};
	currentModel.value.set.modelIntel = (apiModelIntel: IAPIModel): void => {
		currentModel.value.name = apiModelIntel.name;
		currentModel.value.price = apiModelIntel.price;
		currentModel.value.types = apiModelIntel.types;
		currentModel.value.typesDescriptions = apiModelIntel.typesDescriptions;
		currentModel.value.preset = apiModelIntel.preset;
		currentModel.value.defaults = apiModelIntel.defaults;
		currentModel.value.parts = apiModelIntel.parts;
		currentModel.value.partMeshes = apiModelIntel.partMeshes;
		currentModel.value.partMeshesTypes = apiModelIntel.partMeshesTypes;
		currentModel.value.partMeshesDescriptions = apiModelIntel.partMeshesDescriptions;
		currentModel.value.paletteColors = apiModelIntel.paletteColors;
		currentModel.value.colors = apiModelIntel.partMeshesDefaultColors;
		currentModel.value.isLoaded = false;
	}

	const modelLoader                          = useModelLoader(scene);
	const camera                               = useCamera();
	const { renderer, composer, animate, animateFrames, updateRenderer } 
		                                       = useRenderer(scene, camera);

	const modelCache   = {};

	const loadQueue = {
		forced: [] as Array<IPart>,
		background: [] as Array<IPart>,
		get count(): Number {
			return loadQueue.forced.length + loadQueue.background.length;
		},
		getNextPart(): IPart|null {
			if (loadQueue.forced.length) {
				return loadQueue.forced.shift();
			}
			if (loadQueue.background.length) {
				return loadQueue.background.shift();
			}
			return null;
		},
		moveFromBackgroundToForced(item: IPart, backward: Boolean = false) {
			const fromArray = !backward ? loadQueue.background : loadQueue.forced;
			const toArray	= !backward ? loadQueue.forced : loadQueue.background;
			const index = fromArray.indexOf(item);
			if (index >= 0) {
				const [queueItem] = fromArray.splice(index, 1);
				toArray.unshift(queueItem);
			}
		},
		setIsNextLoading: async (partType: string, value: boolean, rerenderScene: boolean = false) => {
			sceneItems.categories[partType].isNextLoading = value;
			await update.partTypeColor(partType, rerenderScene);
		}
	}

	const load = {
		async forcePart(item: IPart) {
			await loadQueue.setIsNextLoading(item.type, true, true);
			if (!item.isForced) {
				item.isForced = true;
				loadQueue.moveFromBackgroundToForced(item);
			}
		},
		async postponeForcedPartType(item: IPart) {
			loadQueue.forced.map(forcedItem => {
				if (forcedItem.type == item.type && forcedItem !== item) {
					if (item.isForced) {
						item.isForced = false;
						loadQueue.moveFromBackgroundToForced(item, true);
					}
				}
			});
		},
		async restPartsProgressively(model: IModel) {
			const restParts = model.parts.filter((item) => !item.isDefault);
			// TODO: filter parts according to its order in UI
			loadQueue.background = restParts;

			let item: IPart;
			while (item = loadQueue.getNextPart()) {
				const [result] = await modelLoader(item.url);
				await load.materialsVariants(result);
				modelCache[item.url] = result

				if (item.isForced) {
					item.isForced = false;
					await loadQueue.setIsNextLoading(item.type, false);
					if (currentModel.value.selectedParts[item.type] === item) {
						remove.model(sceneItems.categories[item.type].uid);
						add.modelUrl(item);
					}
				}
				// TODO: Write object name validator.
				// result.scene.children.forEach(child => {
				// 	console.warn(child.name);
				// });
				console.debug('rest_part_laoded', item, result);
			}
		},
		async defaultPartsSynchronously(model: IModel) {
			const defaultParts = model.parts.filter((item) => item.isDefault);
			const promises = defaultParts.map(async item => {
				if (item.isDefault) {
					return modelLoader(item.url).then(async([result]) => {
						await load.materialsVariants(result);
						modelCache[item.url] = result
						console.debug('default_part_loaded', item, result);
					});
				}
			});
			await Promise.all(promises);
		},
		async model(modelId, onModelIntelLoaded: (model: IModel) => void, onSceneStarted: (defaultColors: Object) => void) {
			const apiModelIntel = await api.models.query.getModelById(modelId);
			currentModel.value.set.modelIntel(apiModelIntel);
			currentModel.value.cameras = sceneItems.cameras;
			apiModelIntel.types.map(partType => {
				sceneItems.categories[partType] = null;
			})
			onModelIntelLoaded(currentModel.value);

			currentModel.value.selectedParts = {};
			currentModel.value.parts.filter(item => item.isDefault).forEach(item => {
				currentModel.value.selectedParts[item.type] = item;
			});

			new Set(currentModel.value.parts.map(m => m.type)).forEach(item => sceneItems.categories[item] = null);

			await load.defaultPartsSynchronously(currentModel.value);

			start();
			// deprecated
			// currentModel.value.colors = captureDefaultColors(sceneItems.models);
			onSceneStarted(currentModel.value.colors);
			currentModel.value.isLoaded = true;

			await load.restPartsProgressively(currentModel.value);
			console.debug('scene_items', sceneItems);
			console.debug('current_model', currentModel.value);
		},
		async maneken(preload: boolean = false) {
			if (preload) {
				const [result] = await modelLoader(manekenMock.url);
				modelCache[manekenMock.url] = result;
				result.scene.children.forEach(item => {
					if (item.name.match(/^CAM_/)) {
						sceneItems.cameras[item.name] = item.position;
					}
				});
				console.debug('maneken', result);
			} else {
				const manekenVisible = currentModel.value.preset?.maneken !== false;
				await add.modelUrl(manekenMock, manekenVisible);
			}
			
		},
		async materialsVariants(gltf) {
			if (typeof gltf.functions?.ensureLoadVariants === 'function') {
				await gltf.functions.ensureLoadVariants(gltf.scene);
			}
		}
	}

	const add = {
		async modelUrl(part, visible = true) {
			let result = modelCache[part.url];
			if(!result) {
				[result] = await modelLoader(part.url);
				modelCache[part.url] = result;
			}

			const uid = result.scene.uuid;
			sceneItems.categories[part.type] = { uid, part } as ISceneItemCategory;
	
			result.scene.visible = visible;

			scene.add(result.scene);
			sceneItems.models[uid] = result;

			await colorizeModels({ initial: true, ...part }, currentModel.value, modelCache[part.url], [result.scene]);

			animateFrames(1);
			return [uid, result];
		},
		controls(item) {
			const uid                = item.uuid;
			sceneItems.controls[uid] = item;
			scene.add(item);
			animateFrames(10);
			return [uid, item];
		},
		light(item) {
			const uid              = item.uuid;
			sceneItems.lights[uid] = item;
			scene.add(item);
			animateFrames(10);
			return [uid, item];
		}
	};

	const remove = { // TODO: dispose()
		model(uid) {
			scene.children = scene.children.filter(item => item.uuid !== uid);
			animateFrames(1);
			delete  sceneItems.models[uid];
		},
		controls(uid) {
			const item = sceneItems.controls[uid];
			scene.remove(item);
			animateFrames(10);
			delete sceneItems.models[uid];
		},
		light(uid) {
			scene.children = scene.children.filter(item => item.uuid !== uid);
			animateFrames(10);
			delete sceneItems.models[uid];
		},
	};

	const replace = {
		async model(uid, newModelUrl) {
			remove.model(uid);
			return add.modelUrl(newModelUrl);
		},
		async modelCategory(part) {
			const promises = [];
			part         = unref(part);
			load.postponeForcedPartType(part);
			if (modelCache[part.url]) {
				await loadQueue.setIsNextLoading(part.type, false);
				promises.push(
					replace.modelPart(part)
				);
			} else {
				load.forcePart(part);
				update.selectedPart(part);
			}
			
			if (EPartType.BASE === part.type) {
				promises.push(replace.conjuctivePart(part));
			}
			await Promise.all(promises);
		},
		async modelPart(part) {
			const currentSceneItem = sceneItems.categories[part.type];
			update.selectedPart(part);
			await replace.model(currentSceneItem.uid, part);
		},
		async conjuctivePart(basePart: IPart) {
			for (let conjPartType in currentModel.value.selectedParts) {
				const currentConjPart = currentModel.value.selectedParts[conjPartType];
				if (currentConjPart.base?.indexOf(basePart.name) === -1) {
					const newConjPart = currentModel.value.parts.find(item =>
						item.base?.length &&
						item.base.indexOf(basePart.name) !== -1 &&
						item.name.replace(/_@[a-z]+\d$/, '') === currentConjPart.name.replace(/_@[a-z]+\d$/, '')
					);
					if (newConjPart) {
						await replace.modelCategory(newConjPart);
					} else {
						update.selectedPart(null, conjPartType);
						remove.model(sceneItems.categories[conjPartType].uid);
						console.warn(`DNNA-CONF-3JS: Missing conjuntive "${conjPartType}" part for "${basePart.name}".`);
					}
				}
			}
		},
		controls(uid, newControls) {
			remove.controls(uid);
			return add.controls(newControls);
		},
		light(uid, newLight) {
			remove.light(uid);
			return add.light(newLight);
		}
	};

	const change = {
		async color(objectName: string|string[], color: string) {
			if (typeof objectName === 'string') {
				objectName = [objectName];
			}
			const promises = [];
			objectName.forEach(objectNameValue => {
				const partType = currentModel.value.partMeshesTypes[objectNameValue];
				if (color != null) {
					currentModel.value.colors[objectNameValue] = color;
				}
				promises.push(
					update.partTypeColor(partType, false)
				);
			});
			await Promise.all(promises);
			animateFrames(1);
		},
		camera(cameraName) {
			const pos = currentModel.value.cameras[cameraName];
			if (pos) {
				pos.z = config.camera.z;
				if (cameraName === 'CAM_CENTER') {
					pos.z *= 1.8;
					if (currentModel.value.preset?.camera?.y) {
						pos.y = currentModel.value.preset.camera.y;
					}
					if (currentModel.value.preset?.camera?.z) {
						pos.z = currentModel.value.preset.camera.z;
					}
				}
				console.debug('camera_change', camera);
				camera.position.set(pos.x, pos.y, pos.z);
				camera.rotation.set(0, 0, 0);
				orbitControls.target.set(pos.x, pos.y, 0);
				update.fog(pos.z);
				animateFrames(1);
			}
		}
	}

	const update = {
		async partTypeColor(partType, rerenderScene = true) {
			const modelsToColorize = [];
			const params = {
				opacity: 1,
				color: undefined // defined in currentModel.value.colors
			} as IColorizeParams;

			currentModel.value.parts.forEach(part => {
				if (part.type === partType) {
					if (modelCache[part.url]) {
						modelsToColorize.push(modelCache[part.url].scene);
					}
				}
			})
			
			if (sceneItems.categories[partType] &&
				sceneItems.categories[partType].isNextLoading) {
				params.opacity = config.loadingPartOpacity;
			}
			await colorizeModels(params, currentModel.value, null, modelsToColorize);

			if (rerenderScene) {
				animateFrames(1);
			}
		},
		selectedPart(partItem: IPart|null, partType: string|null = null) {
			currentModel.value.selectedParts[partType ? partType : partItem.type] = partItem;
		},
		async renderer() {
			for (let url in modelCache) {
				modelCache[url].scene.children.map(child => child.userData.materialApplied = false);
			}
			const promises = [];
			for (const partType in sceneItems.categories) {
				promises.push(
					update.partTypeColor(partType, false)
				);
			}
			await Promise.all(promises);
			updateRenderer();
		},
		fog(distance: number) {
			const fog = scene.fog as Fog;
			fog.far = distance * config.fogMultiplier;
		}
	}

	const start = () => {
		change.camera(config.camera.default);
		currentModel.value.defaults.forEach(item => {
			let part = currentModel.value.parts.find(mPart => mPart.name === item);
			if (part) {
				add.modelUrl(part);
			} else {
				console.warn(`DNNA-CONF-3JS: Missing part for "${item}".`);
			}
		});
	};

	const createControls = () => {
		const { controls: orbitControls } = useOrbitControls(camera, renderer.domElement);
		orbitControls.addEventListener('change', (event) => {
			update.fog(orbitControls.getDistance());
			animate();
		});
		return {orbitControls};
	};

	const { orbitControls } = createControls();
	
	return {scene, currentModel, orbitControls, load, add, remove, renderer, composer, animate, animateFrames, camera, replace, change, update, start};
};