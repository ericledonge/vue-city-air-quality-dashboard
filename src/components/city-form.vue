<template>
  <div class="row form-group">

    <div class="col-sm-2">
      Ajouter une ville:
    </div>

    <div class="col-sm-3">
      <input type="text" id="city-field" class="form-control" v-model="newCity">
    </div>

    <div class="col-sm-2">
      <b-button @click="addCityAction">Ajouter</b-button>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'city-form',
    data() {
      return {
        newCity: null,
      };
    },
    methods: {
      addCityAction() {
        if (this.newCity) {
          this.$emit('cityAddEvent', this.newCity);
        }
      }
    },
  };
</script>

<style scoped>
</style>
