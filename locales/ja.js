export default {
  htmlAttrs: {
    lang: 'ja',
	},
  title: '私のテストサイト',
  meta:  {
    description: 'Nuxt.jsでウェブサイト開発の練習',
    ogTitle: '私のテストサイト',
    ogDescription: 'Nuxt.jsでウェブサイト開発の練習',
    ogImage: '/favicon.ico',
    ogUrl: 'https://yourwebsite.com',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: '私のテストサイト',
    twitterDescription: 'Nuxt.jsでウェブサイト開発の練習',
    twitterImage: '/favicon.ico'
  },
	link: {
    tw: { rel: 'alternate', hreflang: 'zh-TW', href: '/'},
    en: { rel: 'alternate', hreflang: 'en', href: '/en' },
    ja: { rel: 'canonical', hreflang: 'ja', href: '/ja' }
  },
  welcomeMessage: "私たちの映像制作会社のウェブサイトへようこそ！",
  contactUs: "お問い合わせ",
  portfolio: "ポートフォリオ"
}
