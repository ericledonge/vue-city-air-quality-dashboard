import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '../views/home';
import admin from '../views/admin';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: home
  },
  {
    path: '/admin',
    component: admin
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
