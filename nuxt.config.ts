// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  app: {
    head: {
      title: '社会福祉法人 愛宕会',
      htmlAttrs: {
        lang: 'ja',
        prefix: 'og: http://ogp.me/ns#'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0' },
        { name: 'format-detection', content: 'telephone=no' },
        { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
        { 'http-equiv': 'content-language', content: 'ja' },
        { hid: 'description', name: 'description', content: 'これまで大切に受け継いできたものを残し、ここで暮らし続けたいという想いを未来へ繋いでいくために。そんな、くらしの「絆」を、私たちと広げてみませんか。' },
        { hid: 'og:site_name', property: 'og:site_name', content: '社会福祉法人 愛宕会' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://atagokai.jp/' },
        { hid: 'og:title', property: 'og:title', content: '社会福祉法人 愛宕会' },
        { hid: 'og:description', property: 'og:description', content: 'これまで大切に受け継いできたものを残し、ここで暮らし続けたいという想いを未来へ繋いでいくために。そんな、くらしの「絆」を、私たちと広げてみませんか。' },
        { hid: 'og:image', property: 'og:image', content: '/img/OGP.jpg' },
        { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:site', property: 'twitter:site', content: '@' }
      ],
      link: [
        { rel: "icon", type: "image/svg", href: "/img/logo.svg" },
      ],
    }
  },
  runtimeConfig: {
    public: {
      spaceUid: process.env.NEWT_SPACE_UID,
      cdnApiToken: process.env.NEWT_CDN_API_TOKEN,
      contentfulSpaceId: process.env.CONTENTFUL_SPACE_ID,
      contentfulAccessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      siteUrl: 'https://atagokai.jp'
    }
  },
  css: ["@/assets/scss/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/defines" as *;',
        },
      },
    },
  },
  modules: ['nuxt-gtag', 'nuxt-simple-sitemap'],
  sitemap: {
    urls: [
      {
        loc: '/',
        changefreq: 'daily',
        priority: 1
      },
      {
        loc: '/about',
        changefreq: 'daily',
        priority: 0.8
      },
      {
        loc: '/news',
        changefreq: 'daily',
        priority: 0.8
      },
      {
        loc: '/privacy',
        changefreq: 'daily',
        priority: 0.8
      },
      {
        loc: '/recruit',
        changefreq: 'daily',
        priority: 0.8
      },
      {
        loc: '/service',
        changefreq: 'daily',
        priority: 0.8
      }
    ]
  },
  gtag: {
    id: 'G-MDYDVPF1G6',
    debug: true
  },
  site: {
    url: 'https://atagokai.jp'
  },
  compatibilityDate: '2024-10-31'
})