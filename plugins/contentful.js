// plugins/contentful.client.js
import { createClient } from 'contentful'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  // Contentful クライアントを作成
  const contentfulClient = createClient({
    space: config.public.contentfulSpaceId,  // Contentful Space ID
    accessToken: config.public.contentfulAccessToken // Content Delivery API Token
  })

  // Nuxt アプリに provide する
  nuxtApp.provide('contentfulClient', contentfulClient)
})
