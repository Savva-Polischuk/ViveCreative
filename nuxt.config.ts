// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  runtimeConfig: {
    telegramBotToken: process.env.TELEGRAM_BOT_TOKEN,
    telegramChatID: process.env.TELEGRAM_CHAT_ID
  },
  modules: [
    '@nuxt/icon'
  ],
  icon: {
    customCollections: [
      {
        prefix: 'icon',
        dir: './assets/icons',
        normalizeIconName: false
      },
      {
        prefix: 'msg',
        dir: './assets/icons/messengers',
        normalizeIconName: false
      },
    ],
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/sass/main.sass'],
  vite: {
    css: {
        preprocessorOptions: {
                sass: {
                    additionalData: '@use "~/assets/sass/_mixins.sass" as *',
                },
            },
        },
    },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
})