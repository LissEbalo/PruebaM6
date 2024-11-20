<template>
  <div class="home">
    <h1 class="text-center">Lista de Juegos Disponibles</h1>
    <div class="container">
      <div class="row justify-content-center">
        <div v-for="game in games" :key="game.id" class="col-md-3">
          <CardComponent :gameProps="game" />
        </div>
      </div>
    </div>
    <button
      class="btn-button"
      @click="getAllGames(previous)"
      v-if="previous !== ``"
    >
      Juegos anteriores
    </button>
    <button class="btn-button" @click="getAllGames(next)" v-if="next !== ``">
      Buscar mas Juegos
    </button>
  </div>
</template>

<script>
import CardComponent from "@/components/CardComponent.vue";
import Vue from "vue";

import axios from "axios";
export default Vue.extend({
  name: "HomeView",

  components: {
    CardComponent,
  },
  data() {
    return {
      games: [],
      next: "",
    };
  },
  methods: {
    getAllGames(url) {
      console.log();
      axios
        .get(url)
        .then((response) => {
          this.games = response.data.results;
          this.next = response.data.next;
          this.previous = response.data.previous;
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getAllGames(
      `${process.env.VUE_APP_URL}games?key=${process.env.VUE_APP_KEY_RAWG}`
    );
  },
});
</script>
<style scope>
.card-body {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-end;
  flex-direction: column;
}
.card {
  height: 600px;
}
.card-img-top {
  width: auto;
}
.btn-button {
  border-radius: 5px;
  color: white;
  background-color: gray;
}
</style>
