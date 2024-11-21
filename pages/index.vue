<script setup>
// 使用nuxt提供head的內建函式庫
// useHead({
//   title: 'test-app',
//   meta: [
//     { name: 'description', content: 'practice nuxt.js' },
//     { property: 'og:title', content: 'Your Film Company - Portfolio' },
//     { property: 'og:description', content: 'Discover our amazing film production portfolio.' },
//     { property: 'og:image', content: '/og-image.jpg' },
//     { property: 'og:url', content: 'https://yourwebsite.com' },
//     { name: 'twitter:card', content: 'summary_large_image' }
//   ],
//   link: [
//     { rel: 'icon', type: 'image/png', href: '/favicon.png' },
//   ],
// });
  // const { data } = await useAsyncData(
  // 'randomData',
  // () => $fetch('https://randomuser.me/api/?results=10').catch((error) => error.data)
  // );
  // const dataTwice = await $fetch('https://randomuser.me/api/?results=10')
  // console.log(dataTwice); 


  // const { data } = await useFetch('https://randomuser.me/api/?results=10');
  // const randomData = data.value.results;
  // console.log(randomData);
  const { t, setLocale, locale } = useI18n(); // t讀取文本物件，setLocale切換語言文本
  const localePath = useLocalePath(); // 切換對應文本網址
  const switchLocalePath = useSwitchLocalePath(); // 結合setLocale和localPath的功能，切換語言同時也切換url
  const currentLocale = computed(() => locale.value);

  useHead({
    htmlAttrs: {
      lang: t('htmlAttrs.lang')
    },
    title: t('title'),
    meta: [
      { name: 'description', content: t('meta.description') },
      { property: 'og:title', content: t('meta.ogTitle') },
      { property: 'og:description', content: t('meta.ogDescription') },
      { property: 'og:image', content: t('meta.ogImage') },
      { property: 'og:url', content: t('meta.ogUrl') },
      { property: 'og:type', content: t('meta.ogType') },
      { name: 'twitter:card', content: t('meta.twitterCard') },
      { name: 'twitter:title', content: t('meta.twitterTitle') },
      { name: 'twitter:description', content: t('meta.twitterDescription') },
      { name: 'twitter:image', content:t('meta.twitterImage') },
    ],
    link: [
      { rel: t('link.tw.rel'), hreflang: t('link.tw.hreflang'), href: t('link.tw.href') },
      { rel: t('link.en.rel'), hreflang: t('link.en.hreflang'), href: t('link.en.href') },
      { rel: t('link.ja.rel'), hreflang: t('link.ja.hreflang'), href: t('link.ja.href') },
    ]
  });

  watch(currentLocale, () => {
    useHead({
      htmlAttrs: {
        lang: t('htmlAttrs.lang')
      },
      title: t('title'),
      meta: [
        { name: 'description', content: t('meta.description') },
        { property: 'og:title', content: t('meta.ogTitle') },
        { property: 'og:description', content: t('meta.ogDescription') },
        { property: 'og:image', content: t('meta.ogImage') },
        { property: 'og:url', content: t('meta.ogUrl') },
        { property: 'og:type', content: t('meta.ogType') },
        { name: 'twitter:card', content: t('meta.twitterCard') },
        { name: 'twitter:title', content: t('meta.twitterTitle') },
        { name: 'twitter:description', content: t('meta.twitterDescription') },
        { name: 'twitter:image', content:t('meta.twitterImage') },
      ],
      link: [
        { rel: t('link.tw.rel'), hreflang: t('link.tw.hreflang'), href: t('link.tw.href') },
        { rel: t('link.en.rel'), hreflang: t('link.en.hreflang'), href: t('link.en.href') },
        { rel: t('link.ja.rel'), hreflang: t('link.ja.hreflang'), href: t('link.ja.href') },
      ]
    });
  });
  
</script>

<template>
  <div class="index">
    <div>
      <nuxt-link :to="localePath('/', 'tw')" @click="setLocale('tw')">繁體中文</nuxt-link>
      <nuxt-link :to="localePath('index', 'en')" @click="setLocale('en')">English</nuxt-link>
      <nuxt-link :to="localePath('index', 'ja')" @click="setLocale('ja')">日本語</nuxt-link>
      <p>{{ $t('welcomeMessage') }}</p>
      <p>{{ $t('contactUs') }}</p>
      <p>{{ $t('portfolio') }}</p>
    </div>
    <div>
      <h2>Language switching path</h2>
      <nuxt-link :to="switchLocalePath('tw')" >繁體中文</nuxt-link>
      <nuxt-link :to="switchLocalePath('en')" >English</nuxt-link>
      <nuxt-link :to="switchLocalePath('ja')" >日本語</nuxt-link>
    </div>
    <!-- <div>
      <button @click="setLocale('zhTw')">繁體中文</button>
      <button @click="setLocale('en')">English</button>
      <button @click="setLocale('ja')">日本語</button>
      <p>{{ $t('message') }}</p>
    </div> -->
    <h1>首頁</h1> 
    <!-- <ul>
      <li v-for="item in randomData" :key="item.cell">
        <p>id : {{ item.cell }}</p>
        <p>姓名 : {{ item.name.first }} {{ item.name.last }}</p>
        <p>性別 : {{ item.gender }}</p>
      </li>
    </ul> -->
    <Card />
    <CardPhotoItem />
    <Alert />
    <AlertRed />
  </div>
</template>