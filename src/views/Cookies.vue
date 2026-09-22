<template>
  <div>
    <p>Nombre de cookies : {{ $store.state.cookie }}</p>

    <button @click="$store.commit('cookie/ajouterCookie')">
      Ajouter un cookie
    </button>

    <p>Getter de cookie : {{ $store.getters['cookie/doubleCookies'] }}</p>

    <button @click="$store.dispatch('cookie/ajouterCookieAvecDelai', 1)">Delai l'ajout d'un cookie</button>


    <p>Nombre de autoProduction : {{ $store.state.autoProduction }}</p>

    <button @click="$store.dispatch('ajouterAutoProduction')">
      Ajouter une autoProduction de cookie
    </button>

    <p>Augmenter autoProduction : {{ $store.state.autoProduction }}</p>

    <button @click="$store.commit('autoProduction/augmenterAutoProduction')">Delai l'ajout d'un cookie</button>
  </div>
</template>