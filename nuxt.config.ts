// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  app: {
    head: {
      htmlAttrs: {
        lang: 'ja'
      },
      link: [
        { rel: "icon", type: "image/svg", href: "/img/logo.svg" }, // これを追記する
      ],
    }
  },
  runtimeConfig: {
    public: {
      spaceUid: process.env.NEWT_SPACE_UID,
      cdnApiToken: process.env.NEWT_CDN_API_TOKEN
    }
  },
  css: ["@/assets/scss/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/defines.scss";',
        },
      },
    },
  },
})
