<template>
  <div>
    <h1>Créer un compte</h1>
    <b-form @submit="submitAction">

      <b-form-group label="Adresse email">
        <b-form-input type="email" v-model="email" @change="initMessageError"></b-form-input>
      </b-form-group>

      <b-form-group label="Mot de passe">
        <b-form-input type="password" v-model="password" @change="initMessageError"></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Créer un compte</b-button>

      <b-alert show v-if="messageError" variant="danger">{{ messageError }}</b-alert>

    </b-form>
  </div>
</template>

<script>
  import { auth } from '@/firebase';

  export default {
    name: 'create-account',
    data() {
      return {
        email: null,
        password: null,
        messageError: null
      };
    },
    methods: {
      async submitAction(e) {
        e.preventDefault();
        if (this.password.length >= 6) {
          await auth.createUserWithEmailAndPassword(this.email, this.password);
          await auth.signInWithEmailAndPassword(this.email, this.password);
          await this.$router.replace({ path: '/admin' });
        } else {
          this.messageError = 'Le mot de passe doit contenir au moins 6 caractères';
        }
      },
      initMessageError() {
        this.messageError = false;
      }
    }
  };
</script>

<style scoped>

</style>
