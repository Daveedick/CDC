import { defineStore } from 'pinia'

export const useHeroStore = defineStore('heroStore', () => {
	const data = ref({
    heading: {
      title: 'Виртуальный конструктор одежды',
      subtitle: '3D конструктор одежды, который изменит подход к созданию дизайна и оптимизирует производственные процессы',
      button: 'Попробовать бесплатно',
    },
    cards: [
      {
        icon: 'i-mdi:chart-timeline-variant-shimmer',
        text: 'Увеличьте объём продаж и охватывайте больше клиентов',
      },
      {
        icon: 'i-mdi:robot-industrial-outline',
        text: 'Автоматизируйте процесс утверждения дизайна онлайн',
      },
      {
        icon: 'i-mdi:lightning-bolt-outline',
        text: 'Ускорьте запуск пошива партии у себя на производстве',
      },
]
  })
	return {
		data
	};
});
