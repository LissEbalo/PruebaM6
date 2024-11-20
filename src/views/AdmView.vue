<template>
  <div>
    <div v-if="!currentUser()" class="text-center">
      <h2>para ver la informacion ingresa tus datos</h2>
      <button class="btn-datos" @click="handlePrompt">Ingresa Datos</button>
    </div>
    <div>
      <h3 class="text-center">Le diste me gusta al juego:{{ gameName }}</h3>
    </div>
    <div>
      <b-button class="btn-usuario" v-b-toggle.sidebar-right
        >Abrir pestaña Usuario</b-button
      >
      <b-sidebar id="sidebar-right" title="Perfil Usuario" right shadow>
        <div class="px-3 py-2">
          <h1>Bienvenid@</h1>
          <div v-if="currentUser()">
            <p class="text-center">{{ currentUser() }}</p>
          </div>

          <button
            class="text-center mt-3"
            @click="coins += 5"
            :disabled="coins >= 60"
          >
            Agregar Coin
          </button>
        </div>
      </b-sidebar>
    </div>

    <div>
      Coins: ${{ coins }}
      <b-progress
        :value="0"
        variant="success"
        striped
        :animated="animate"
        :style="`width: ${coins}%`"
      ></b-progress>
    </div>
    <div class="container">
      <div class="box-y col-md-3">
        <p>% de finalizació del juego</p>
        <hr />
        <p>0%</p>
      </div>
      <div class="box-g col-md-3">
        <p>Logros del juego</p>
        <hr />
        <p>🏆</p>
      </div>
      <div class="box-b col-md-3">
        <p>Recompensas</p>

        <hr />
        <p>🎖️</p>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "AdmView",
  data() {
    return {
      gameName: null,
      coins: 0,
      userName: null,
      userLastName: null,
      // userName: "null", //for debugging
      // userLastName: "null", //for debugging
    };
  },
  methods: {
    handlePrompt() {
      let input = window.prompt("Ingrese Nombre");
      if (input) {
        this.userName = input;
      } else {
        this.userName = "No se ingreso Nombre";
      }
      input = window.prompt("Ingrese Apellido");
      if (input) {
        this.userLastName = input;
      } else {
        this.userLastName = "No se ingreso Apellido";
      }
    },
    currentUser() {
      if (this.userName && this.userLastName) {
        return `${this.userName} ${this.userLastName}`;
      } else {
        return null;
      }
    },
  },
  created() {
    this.gameName = this.$route.query.gameName;
  },
});
</script>

<style scoped>
.container {
  text-align: center;
  font-size: xx-large;
  box-sizing: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.box-y {
  border-style: solid;
  border-radius: 40px;
  width: 30%;
  height: 10%;
  background-color: yellow;
}
.box-g {
  border-style: solid;
  border-radius: 40px;
  width: 30%;
  height: 10%;
  background-color: green;
}

.box-b {
  border-style: solid;
  border-radius: 40px;
  width: 30%;
  height: 10%;
  background-color: blue;
}
.btn-datos {
  border-radius: 10px;
  background-color: green;
  color: white;
  font-size: x-large;
  width: 200px;
  height: 70px;
}
.btn-usuario {
  border-radius: 10px;
  background-color: rebeccapurple;
  color: white;
  font-size: x-large;
  width: 250px;
  height: 100px;
}
</style>
