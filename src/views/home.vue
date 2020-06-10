<template>
  <div>
    <h1>Mesure de la qualité de l'air</h1>
    <div class="row">
      <div class="col-sm-4" v-for="city in cities" :key="city.name">
        <city :city="city" @deleteCity="deleteCityAction"/>
      </div>
    </div>
    <city-form @cityAddEvent="addCityAction"/>
    <alert v-if="showAlert" :type="typeAlert" :message="messageAlert"/>
  </div>
</template>

<script>
  import City from '../components/city';
  import CityForm from '../components/city-form';
  import Alert from '../components/alert';
  import { CitiesService } from '../services/cities.service';
  import { AirQualityService } from '../services/air-quality.service';

  export default {
    name: 'home',
    components: {
      City,
      CityForm,
      Alert
    },
    data() {
      return {
        cities: [],
        typeAlert: '',
        messageAlert: '',
        showAlert: false
      };
    },
    async mounted() {
      this.cities = await CitiesService.getCities();
    },
    methods: {
      async addCityAction(cityName) {
        const dataForNewCity = await AirQualityService.getAirQuality(cityName);
        if (dataForNewCity !== 'Unknown station') {
          this.cities.push({ name: cityName, aqi: null });
          this.typeAlert = 'success';
          this.messageAlert = 'Ville ajoutée avec succès.';
          this.showAlert = true;
        } else {
          this.typeAlert = 'warning';
          this.messageAlert = 'Ville non disponible';
          this.showAlert = true;
        }
        setTimeout(() => this.showAlert = false, 3000);
      },
      deleteCityAction(city) {
        this.cities = this.cities.filter(el => el.name !== city.name);
      }
    },
  };
</script>
