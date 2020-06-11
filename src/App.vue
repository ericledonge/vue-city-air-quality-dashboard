<template>
  <div id="app">
    <nav-bar/>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import NavBar from './components/nav-bar.vue';

  export default {
    name: 'App',
    components: {
      NavBar
    }
  };
</script>
