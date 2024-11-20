<template>
  <div>
    <b-card
      no-body
      style=""
      :img-src="gameProps.background_image"
      img-alt="Image"
      img-top
    >
      <template #header>
        <h4 class="mb-0">{{ gameProps.name }}</h4>
      </template>

      <b-list-group flush>
        <b-list-group-item>Rating:{{ gameProps.rating }}</b-list-group-item>
        <b-list-group-item
          >Releasad: {{ gameProps.released }}</b-list-group-item
        >
        <b-list-group-item>Update: {{ gameProps.updated }}</b-list-group-item>
      </b-list-group>

      <b-card-body>
        <button
          class="btn-button"
          @click="
            $router.push({ name: `opinion`, query: { prop1: gameProps.name } })
          "
        >
          Opinar
        </button>
        <button
          @click="
            $router.push({ name: `adm`, query: { gameName: gameProps.name } })
          "
        >
          ❤️
        </button>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "CardComponent",
  props: {
    gameProps: {
      type: Object,
      require: true,
    },
  },
});
</script>

<style scoped>
.navbar {
  text-decoration: none;
}

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
</style>
