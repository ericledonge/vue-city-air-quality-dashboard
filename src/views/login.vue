<template>
  <div>
    <h1>Login</h1>
    <b-form @submit="submitAction">

      <b-form-group label="Adresse email">
        <b-form-input type="email" v-model="email" @change="initMessageError"></b-form-input>
      </b-form-group>

      <b-form-group label="Mot de passe">
        <b-form-input type="password" v-model="password" @change="initMessageError"></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Connexion</b-button>
      <b-button type="button" variant="secondary" to="/register">Créer un compte</b-button>

      <b-alert show v-if="messageError" variant="danger">{{ messageError }}</b-alert>

    </b-form>
  </div>
</template>

<script>
  import { auth } from '@/firebase';

  export default {
    name: 'login',
    data() {
      return {
        email: null,
        password: null,
        messageError: false
      };
    },
    methods: {
      async submitAction(e) {
        e.preventDefault();
        try {
          await auth.signInWithEmailAndPassword(this.email, this.password);
          await this.$router.push({ path: '/admin' });
        } catch (e) {
          this.messageError = 'Erreur de login/mot de passe';
          console.log(e);
        }
      },
      initMessageError() {
        this.messageError = false;
      }
    },
  };
</script>

<style scoped>

</style>
