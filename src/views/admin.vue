<template>
  <div>
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
    <div class="row">
      <ul>
        <li v-for="city in cities" :key="city.name">{{ city.name }} -
          <b-button @click="deleteCity(city)">Supprimer</b-button>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
  import { CitiesService } from '../services/cities.service';

  export default {
    name: 'admin',
    data() {
      return {
        cities: [],
        newCity: ''
      };
    },
    async mounted() {
      this.cities = await CitiesService.getCities();
      console.log(this.cities);
    },
    methods: {
      async addCityAction() {
        const city = { name: this.newCity, aqi: null };
        city.id = await CitiesService.addCity(city);
        this.cities.push(city);
      },
      deleteCity(city) {
        CitiesService.deleteCity(city);
        this.cities = this.cities.filter(el => el !== city);
      }
    },
  };
</script>

<style scoped>

</style>
