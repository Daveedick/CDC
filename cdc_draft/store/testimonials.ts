import { defineStore } from 'pinia';

export const useTestimonialsStore = defineStore('testimonialsStore', () => {
	const data = ref({
		id: 'testimonials',
    heading: {
      title: 'О нас пишут',
      subtitle: 'Создание одежды еще никогда не было таким простым'
    },
    items: [
      {
				username: 'Мистер Гей',
				imgURL: 'images/asssample.png',
				imgAlt: 'AssSample1',
        content: 'Классный сервис, инновационно, современно, советуем всем.  Данная платформа - шаг в будущее. Великолепно, супер!',
      },
      {
				username: 'Сеньор Заднеприводный',
				imgURL: 'images/asssample.png',
				imgAlt: 'AssSample2',
        content: 'Классный сервис, инновационно, современно, советуем всем.  Данная платформа - шаг в будущее. Великолепно, супер!',
      },
      {
				username: 'Месье Говномес',
				imgURL: 'images/asssample.png',
				imgAlt: 'AssSample3',
        content: 'Классный сервис, инновационно, современно, советуем всем.  Данная платформа - шаг в будущее. Великолепно, супер!',
			},
      {
				username: 'Граф Пидористо',
				imgURL: 'images/asssample.png',
				imgAlt: 'AssSample4',
        content: 'Классный сервис, инновационно, современно, советуем всем.  Данная платформа - шаг в будущее. Великолепно, супер!',
      },
],
  })
	return {
		data
	};
});
