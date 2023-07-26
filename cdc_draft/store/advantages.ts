import { defineStore } from 'pinia';

export const useAdvantagesStore = defineStore('advantagesStore', () => {
	const data = ref({
    heading: {
      title: 'Выгода для вашего бизнеса',
      subtitle: 'Увеличьте свою прибыль за счёт нашего автоматизированного сервиса'
    },
    cards: [
    {
      title: 'Удобный сервис',
      description: 'Привлекайте новых клиентов удобным и современным сервисом, который не требует дополнительных знаний и навыков',
			image: 'images/advantages/mobile/advantages-1.png'
    },
    {
			title: 'Профессиональная визуализация',
      description: 'Демонстрируйте разнообразные дизайны в 3D, и упрощайте процесс согласований и доработок клиентов',
			image: 'images/advantages/mobile/advantages-2.png'
    },
    {
			title: 'Быстрый цикл сделки',
      description: 'Сокращайте цикл сделки заказа без пошива образца, увеличивая маржинальность партии',
			image: 'images/advantages/mobile/advantages-3.png'
    },
    {
			title: 'Ускоренный запуск',
      description: 'Ускоряйте процессы по запуску пошива, утверждая цветовое сочетание будущей партии клиента прямо у нас в сервисе',
			image: 'images/advantages/mobile/advantages-4.png'
    },
    {
			title: 'Рост продаж',
      description: 'Увеличивайте количество продаж, оперативно обрабатывая заказы клиентов в режиме онлайн',
			image: 'images/advantages/mobile/advantages-5.png'
    },
    ],
    rows: [
      {
        fraction: '1fr',
        cards: [
          {
            title: 'Удобный сервис',
            description: 'Привлекайте новых клиентов удобным и современным сервисом, который не требует дополнительных знаний и навыков',
            backgroundColor: 'cdc-gradient purple',
            textColor:'white',
						image: 'images/advantages/desktop/advantages-1.png',
						imgID: 1
          }
        ]
      },
      {
        fraction: '249fr 291fr',
        cards: [
          {
            title: 'Профессиональная визуализация',
            description: 'Демонстрируйте разнообразные дизайны в 3D, и упрощайте процесс согласований и доработок клиентов',
            backgroundColor: 'un-bg-#DADFE5',
            textColor: 'black'
          },
          {
            title: 'Быстрый цикл сделки',
            description: 'Сокращайте цикл сделки заказа без пошива образца, увеличивая маржинальность партии',
            backgroundColor: 'un-bg-#DADFE5',
            textColor: 'black',
						image: 'images/advantages/desktop/advantages-3.png',
						imgID: 3
          }
        ]
      },
      {
        fraction: '360fr 180fr',
        cards: [
          {
            title: 'Ускоренный запуск',
            description: 'Ускоряйте процессы по запуску пошива, утверждая цветовое сочетание будущей партии клиента прямо у нас в сервисе',
            backgroundColor: 'cdc-gradient purple',
            textColor:'white',
						image: 'images/advantages/desktop/advantages-4.png',
						imgID: 4
          },
          {
            title: 'Рост продаж',
            description: 'Увеличивайте количество продаж, оперативно обрабатывая заказы клиентов в режиме онлайн',
            backgroundColor: 'un-bg-#DADFE5',
            textColor: 'black'
          }
        ]
      },
    ]
    // images: [
    //   { imgURL: 'images/sample1.jpg', imgAlt: 'Sample 1' },
    //   { imgURL: 'images/sample2.jpg', imgAlt: 'Sample 2' },
    //   { imgURL: 'images/sample3.jpg', imgAlt: 'Sample 3' },
    //   { imgURL: 'images/sample4.jpg', imgAlt: 'Sample 4' },
    // ]
  })
	return {
		data
	};
});
