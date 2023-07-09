import { defineStore } from 'pinia';

export const useFormStore = defineStore('formStore', () => {
	const data = ref({
    heading: {
      title: {desktop: 'Хотите узнать больше о нашем сервисе?', mobile: 'Хотите узнать больше?'},
      subtitle: 'Если у вас есть вопросы, оставьте свои контакты: мы позвоним, чтобы ответить на все ваши вопросы'
    },
    // inputs: [
    // {
		// 	fieldName: 'name',
    //   placeholder: 'Имя',
    // },
    // {
		// 	fieldName: 'phone',
		// 	placeholder: 'Телефон',
    // },
    // ],
		// button: 'Отправить'
  })
	return {
		data
	};
});
