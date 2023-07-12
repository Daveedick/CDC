import { defineStore } from 'pinia';

export const useFooterStore = defineStore('footerStore', () => {
	const data = ref({
    heading: {
      title: 'Свяжитесь с нами',
      subtitle: 'Оставьте свои контакты, чтобы мы могли больше рассказать вам о преимуществах и выгодах нашего сервиса для вашего бизнеса',
    },
		form: {
			title: 'Ваши контакты',
			privacyPolicy: 'Нажимая «Отправить» вы соглашаетесь на обработку персональных данных'
		},
		info: {
			phone: '+7 (916) 777 77 77',
			email: 'commedescreator@gmail.com'
		},
    socialLinks: [
      {
        imgURL: 'images/logo-vk.svg',
        imgAlt: 'VK',
      },
      {
        imgURL: 'images/logo-insta.svg',
        imgAlt: 'Instagram',
      },
      {
        imgURL: 'images/logo-tg.svg',
        imgAlt: 'Telegram',
      },
		],
    logo: { imgURL: 'images/logo.svg', imgAlt: 'CDC Logo' },

  })
	return {
		data
	};
});
