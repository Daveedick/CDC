import { defineStore } from "pinia"

export const useDisplayStore = defineStore('displayStore', () => {
	const data = ref({
		id: 'display',
		images: [
			{imgURL: 'images/model-sample.png', imgAlt: 'Sample 1'},
			{imgURL: 'images/model-sample.png', imgAlt: 'Sample 2'},
		],
		cards: [
			{title: 'Модель 1', description: 'Описание модели. Описание модели. Описание модели. Описание модели. Описание модели. Описание модели. Описание модели.'},
			{title: 'Модель 2', description: 'Описание модели. Описание модели. Описание модели. Описание модели. Описание модели. Описание модели. Описание модели.'},
		]
	})

	return {
		data
	}
})
