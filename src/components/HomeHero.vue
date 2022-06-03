<template>
  <v-container fluid fill-height class="home-hero" style="max-height: 100vh">
    <v-layout justify-center align-center column pa-5>
      <div class="display-4 font-weight-black white--text text-xs-center">
        La Patate
      </div>
      <div class="display-4 font-weight-black white--text text-xs-center mb-3">
        Pour tous les gouts
      </div>
      <div class="display-1 font-weight-bold grey--text text-xs-center">
        Découvrez l'univers de la pomme de terre.
      </div>
      <v-btn fab class="mt-5 brown darken-4">
        <v-icon large color="white">expand_more</v-icon>
      </v-btn>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "HomeHero",
};
</script>

<style scoped>
.home-hero {
  background: linear-gradient(
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.2)
    ),
    url("https://images.unsplash.com/photo-1603048719539-9ecb4aa395e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1484&q=80");
  background-size: cover;
  width: 100%;
  height: 100%;
}
</style>
