import { defineStore } from 'pinia'

export const useHeaderStore = defineStore('headerStore', () => {
	const data = ref({
    logo: { imgURL: 'images/logo.svg', imgAlt: 'CDC Logo' },
    nav: {
      links: [
        'Как это работает',
        'Примеры',
        'Отзывы',
        'Контакты',
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
