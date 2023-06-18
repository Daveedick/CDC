/* istanbul ignore file */
import { onBeforeUnmount, onMounted } from 'vue';

const isSupported = typeof window !== 'undefined';

/**
 * Window resize observer
 * @param {Function} callbackFunction
 * @param {Object} extendedOptions
 */
export const useWindowResize = (callbackFunction, extendedOptions = {}) => {
	if (!isSupported) return;
	if (!callbackFunction || typeof callbackFunction !== 'function') return;

	let resizeTimeout = null;

	const options = {
		debounce: 16,
		...extendedOptions,
	};

	const resizeHandler = event => {
		const newSizes =  {
			height: event?.target?.innerHeight,
			width : event?.target?.innerWidth,
		};
		if (resizeTimeout) clearTimeout(resizeTimeout);
		resizeTimeout = setTimeout(() => {
			callbackFunction(newSizes);
		}, options.debounce);
	};

	const addResizeHandler = () => {
		window.addEventListener('resize', resizeHandler);
	};

	const removeResizeHandler = () => {
		window.removeEventListener('resize', resizeHandler);
	};

	onMounted(addResizeHandler);
	onBeforeUnmount(removeResizeHandler);
};
