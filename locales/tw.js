export default {
  htmlAttrs: {
    lang: 'zh-TW',
	},
  title: '我的測試網站',
  meta: {
    description: '練習nuxt.js開發網站',
    ogTitle: '我的測試網站',
    ogDescription: '練習nuxt.js開發網站',
    ogImage: '/favicon.ico',
    ogUrl: 'https://yourwebsite.com',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: '我的測試網站',
    twitterDescription: '練習nuxt.js開發網站',
    twitterImage: '/favicon.ico'
  },
	link: {
    tw: { rel: 'canonical', hreflang: 'zh-TW', href: '/'},
    en: { rel: 'alternate', hreflang: 'en', href: '/en' },
    ja: { rel: 'alternate', hreflang: 'ja', href: '/ja' }
  },
  welcomeMessage: "歡迎來到我們的影視公司網站！",
  contactUs: "聯繫我們",
  portfolio: "作品集",
}
