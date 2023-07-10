import { defineStore } from "pinia"

export const useActionStore = defineStore('actionStore', () => {
	const data = ref({
		title: 'Попробуйте бесплатно',
		subtitle: 'Переходите в нашу онлайн-примерочную и попробуйте 3D конструктор одежды бесплатно прямо сейчас!',
		button: {desktop: 'Старт', mobile: 'Перейти в конструктор'}
	})

	return {
		data
	}
})
