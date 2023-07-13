import { defineStore } from 'pinia';

export const useConceptStore = defineStore('conceptStore', () => {
	const data = ref({
		id: 'concept',
    heading: {
      title: 'Как это работает?',
      subtitle: 'Всего 4 простых действия, чтобы получить уникальную вещь на рынке одежды'
    },
    cards: [
      {
        title: 'Выберите основу',
        description: 'Клиент выбирает понравившееся изделие из вашего каталога моделей и переходит в примерочную',
				imgURL: 'images/model-sample.png',
				imgAlt: 'Sample 1'
      },
      {
        title: 'Меняйте детали и цвета',
        description: 'В конструкторе клиент изменяет доступные детали изделия и их цвета в режиме онлайн',
				imgURL: 'images/model-sample.png',
				imgAlt: 'Sample 2'
      },
      {
        title: 'Получите визуализацию в 3D',
        description: 'В итоге клиент получает полноценную визуализацию своего готового дизайна в 3D',
				imgURL: 'images/model-sample.png',
				imgAlt: 'Sample 3'
      },
      {
        title: 'Оформляйте заказ онлайн',
        description: 'Для оформления заказа клиент выбирает рост, количество размеров и единиц в заказе, а далее получает итоговую стоимость партии',
				imgURL: 'images/model-sample.png',
				imgAlt: 'Sample 4'
      },
],
    images: [
      // { imgURL: 'images/model-sample.png', imgAlt: 'Sample 1' },
      // { imgURL: 'images/model-sample.png', imgAlt: 'Sample 2' },
      // { imgURL: 'images/model-sample.png', imgAlt: 'Sample 3' },
      // { imgURL: 'images/model-sample.png', imgAlt: 'Sample 4' },
      { imgURL: 'images/sample1.jpg', imgAlt: 'Sample 1' },
      { imgURL: 'images/sample2.jpg', imgAlt: 'Sample 2' },
      { imgURL: 'images/sample3.jpg', imgAlt: 'Sample 3' },
      { imgURL: 'images/sample4.jpg', imgAlt: 'Sample 4' },
    ]
  })
	return {
		data
	};
});
