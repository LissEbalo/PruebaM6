<template>
  <div>
    <h1>404 - Pagina no encontrada</h1>
    <p>No se encuentra el Juego</p>
    <button class="btn btn-primary" @click="$router.push('/')"></button>Home
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "NotFoundView",
});
</script>

<style lang="scss" scoped></style>
