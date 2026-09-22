export const autoProduction = {

    namespaced: true,

    state () {
    return {
      autoProduction: 1
    }
  },

  mutations: {
    augmenterAutoProduction(state) {
      state.autoProduction = state.autoProduction * 1.10
    },
  },
    
}