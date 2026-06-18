export default {
  head: {
    title: 'GW2 Tracker',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [],
  plugins: ['~/plugins/axios.js', { src: '~/plugins/persistedState.js' }],
  components: true,
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/google-fonts'],
  modules: ['bootstrap-vue/nuxt', '@nuxtjs/axios', 'cookie-universal-nuxt'],
  axios: {
    proxy: true,
  },
  proxy: {
    '/gw2-api/': {
      target: 'https://api.guildwars2.com/v2/',
      pathRewrite: { '^/gw2-api/': '' },
      changeOrigin: true,
    },
  },
  build: {},
  googleFonts: {
    download: true,
    families: {
      Roboto: true,
    },
  },
}
