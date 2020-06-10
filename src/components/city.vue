<template>
  <div>
    <b-card :title="city.name" :class="color + ' city-card'">
      <b-card-text v-if="!loading">
        Qualité de l'air: {{ city.aqi }}
      </b-card-text>
      <b-button @click="deleteCityAction" variant="secondary">Supprimer</b-button>
      <b-spinner v-if="loading" variant="primary" label="spinning"></b-spinner>
    </b-card>
  </div>
</template>

<script>
  import { AirQualityService } from '../services/air-quality.service';

  export default {
    name: 'city',
    props: {
      city: {
        type: Object,
        required: true
      },
    },
    data() {
      return {
        color: '',
        loading: false
      };
    },
    async mounted() {
      this.loading = true;
      const infoCity = await AirQualityService.getAirQuality(this.city.name);
      this.loading = false;
      this.city.aqi = infoCity.aqi;

      if (this.city.aqi <= 30) this.color = 'low-pollution';
      if (this.city.aqi > 30 && this.city.aqi <= 50) this.color = 'medium-pollution';
      if (this.city.aqi >= 50) this.color = 'high-pollution';
    },
    methods: {
      deleteCityAction() {
        this.$emit('deleteCity', this.city);
      }
    },
  };
</script>

<style scoped>
  .city-card {
    margin-bottom: 2em;
  }

  .low-pollution {
    color: white;
    background: #005f00;
  }

  .medium-pollution {
    color: white;
    background: #926100;
  }

  .high-pollution {
    color: white;
    background: #6d0000;
  }
</style>
