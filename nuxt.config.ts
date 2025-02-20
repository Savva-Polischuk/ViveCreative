// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/sass/main.sass'],
  vite: {
	css: {
		preprocessorOptions: {
				sass: {
					additionalData: '@use "~/assets/sass/mixins/_flex.sass" as *',
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
