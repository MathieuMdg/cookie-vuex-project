import { createStore } from 'vuex'
import { cookie } from '../store/cookies'
import { autoProduction } from '../store/autoProduction'

export const store = createStore({
  modules: {
      cookie: cookie,
      autoProduction: autoProduction
  },

  actions: {
    ajouterAutoProduction({ commit, state }) {
      setInterval(() => {commit('cookie/ajouterCookie',state.autoProduction.autoProduction)}, 10000)
    }
  }
})
