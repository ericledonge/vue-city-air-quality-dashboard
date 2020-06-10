<template>
  <b-alert :variant="type" show>
    {{ message }}
  </b-alert>
</template>

<script>
  export default {
    name: 'alert',
    props: {
      type: {
        type: String,
        default: ''
      },
      message: {
        type: String,
        default: ''
      }
    },
  };
</script>

<style scoped>

</style>
