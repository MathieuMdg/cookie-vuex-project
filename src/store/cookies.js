export const cookie = {

    namespaced: true,

    state () {
    return {
      cookies: 0
    }
  },

  getters: {
    doubleCookies: state => state.cookies * 2
  },

  mutations: {
    ajouterCookie (state, nbre) {
      state.cookies += nbre
    },
  },

  actions: {
    async ajouterCookieAvecDelai ({ commit }, delai) {
        setTimeout(() => {
        this.commit('cookie/ajouterCookie', 1);
        }, delai * 1000);
    }
  }
    
}