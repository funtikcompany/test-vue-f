import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import UserDetailsPage from '../components/UserDetailsPage.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/user/:id', name: 'UserDetails', component: UserDetailsPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
