// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  app: { 
    baseURL: '/test-nuxt/', // github上資料庫名稱
    //全域設定head資訊
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },

  modules: ['@nuxtjs/i18n'],
  i18n: {
    baseUrl: '/',
    vueI18n: './i18n.config.ts', //匯入文本
    locales: [{
      code: 'tw',
      language: 'zh-TW'
    },{
      code: 'en',
      language: 'en',
    },{
      code: 'ja',
      language: 'ja'
    }], // url路徑設定
    defaultLocale: 'tw', // Nuxt頁面和路由設置您項目的預設語言環境
    strategy: 'prefix_except_default',
  }
})