import createPersistedState from 'vuex-persistedstate'
import cookie from 'cookie'

export default ({ app, store, req }) => {
  createPersistedState({
    paths: ['token'],
    storage: {
      getItem: (key) => {
        if (process.server) {
          const parsedCookies = cookie.parse(req.headers.cookie ?? '')
          return parsedCookies[key]
        } else {
          return app.$cookies.get(key)
        }
      },
      setItem: (key, value) =>
        app.$cookies.set(key, value, { path: '/', maxAge: 60 * 60 * 24 * 7 }),
      removeItem: (key) => app.$cookies.remove(key),
    },
  })(store)
}
