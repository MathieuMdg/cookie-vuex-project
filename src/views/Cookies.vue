<template>
  <div>
    <p>Nombre de cookies : {{ $store.state.cookies }}</p>

    <button @click="$store.commit('ajouterCookie')">
      Ajouter un cookie
    </button>

    <p>Getter de cookie : {{ $store.getters.doubleCookies }}</p>

    <button @click="$store.dispatch('ajouterCookieAvecDelai', 1)">Delai l'ajout d'un cookie</button>
  </div>
</template>