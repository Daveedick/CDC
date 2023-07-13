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
      },
      {
        title: 'Меняйте детали и цвета',
        description: 'В конструкторе клиент изменяет доступные детали изделия и их цвета в режиме онлайн',
      },
      {
        title: 'Получите визуализацию в 3D',
        description: 'В итоге клиент получает полноценную визуализацию своего готового дизайна в 3D',
      },
      {
        title: 'Оформляйте заказ онлайн',
        description: 'Для оформления заказа клиент выбирает рост, количество размеров и единиц в заказе, а далее получает итоговую стоимость партии',
      },
],
    images: [
      { imgURL: 'images/model-sample.png', imgAlt: 'Sample 1' },
      { imgURL: 'images/model-sample.png', imgAlt: 'Sample 2' },
      { imgURL: 'images/model-sample.png', imgAlt: 'Sample 3' },
      { imgURL: 'images/model-sample.png', imgAlt: 'Sample 4' },
    ]
  })
	return {
		data
	};
});
