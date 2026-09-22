import { createStore } from 'vuex'
import { cookie } from '../store/cookies'
import { autoProduction } from '../store/autoProduction'

export const store = createStore({
  modules: {
      cookie: cookie,
      autoProduction: autoProduction
  },

  actions: {
    async ajouterAutoProduction() {
        setTimeout(() => {
        this.commit('cookie/ajouterCookie');
        }, 1000);
    }
  }
})
