import { defineStore } from 'pinia';

export const useHeaderStore = defineStore('headerStore', () => {
	const data = ref({
    logo: { imgURL: 'images/logo.svg', imgAlt: 'CDC Logo' },
    nav: {
			title: 'Меню',
      links: [
        { label: 'Как это работает', id: '#concept'},
        { label: 'Примеры', id: '#display'},
        { label: 'Отзывы', id: '#testimonials'},
        { label: 'Контакты', id: '#contacts'},
      ],
      button: {desktop: 'В конструктор', mobile: 'Попробовать'}
    },
    menubar: [
    {
        label: 'Меню',
        items: [
            {
              label: 'Как это работает',
            },
            {
              label: 'Примеры',
            },
            {
              label: 'Отзывы',
            },
            {
              label: 'Контакты',
            },
        ]
    },
]
  })
	return {
		data
	};
});
