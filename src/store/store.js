import { createStore } from 'vuex'
import { cookie } from '../store/cookies'

export const store = createStore({
  modules: {
      cookie: cookie
  }
})

store.replaceState.cookie