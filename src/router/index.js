import Vue from 'vue';
import VueRouter from 'vue-router';
import { auth } from '@/firebase';
import home from '../views/home';
import admin from '../views/admin';
import login from '../views/login';
import createAccount from '../views/create-account';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: home
  },
  {
    path: '/admin',
    component: admin,
    meta: { needAuth: true }
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/register',
    component: createAccount
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = auth.currentUser;
  const isProtected = to.matched.some(route => route.meta.needAuth);
  if (!isAuthenticated && isProtected) {
    next('/login');
  } else {
    next();
  }
});

export default router;
