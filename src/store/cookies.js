export const cookie = {
    state () {
    return {
      cookies: 0
    }
  },

  getters: {
    doubleCookies: state => state.cookies * 2
  },

  mutations: {
    ajouterCookie (state) {
      state.cookies++
    },
  },

  actions: {
    async ajouterCookieAvecDelai (context, delai) {
        setTimeout(() => {
        this.commit('ajouterCookie');
        }, delai * 1000);
    }
  }
    
}