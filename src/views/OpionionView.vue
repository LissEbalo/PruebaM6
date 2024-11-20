<template>
  <div>
    <h2>Opiniones para {{ gamesName }}</h2>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-2" label="Nombre:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="nombre"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Opinión" label-for="textarea-lazy" class="mb-0">
        <b-form-textarea
          id="textarea-lazy"
          v-model="form.opinion"
          placeholder="Tu opinión debe ir aquí..."
          lazy-formatter
          :formatter="formatter"
        ></b-form-textarea>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
    <div>
      <ul>
        <li v-for="opinion in opinions" :key="opinion.id">
          {{ opinion.name }} Opina que: {{ opinion.description }}
          <button @click="deleteOpinion(opinion.id)">Eliminar</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: [],
      opinions: [],
      gamesName: null,
      form: {
        opinion: "",
        name: "",
      },
      show: true,
    };
  },
  methods: {
    deleteOpinion(opinionId) {
      //this.opinions.delete(opinionId);
      this.opinions = this.opinions.filter(function (opinion) {
        return opinion.id != opinionId;
      });

      console.log(opinionId);
      // Implement delete functionality
    },

    onSubmit(event) {
      event.preventDefault();
      this.opinions.push({
        id: Date.now(),
        name: this.form.name,
        description: this.form.opinion,
      });
      this.onReset();
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
  created() {
    this.gamesName = this.$route.query.prop1;
    console.log(this.$route);
    // this.show = true;
  },
};
</script>
