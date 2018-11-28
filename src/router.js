import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/HomePage.vue';
import About from './views/AboutPage.vue';
import Portfolio from './views/PortfolioPage.vue';
import Skills from './views/SkillsPage.vue';
import Works from './views/WorksPage.vue';
import Contact from './views/ContactPage.vue';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio,
    },
    {
      path: '/skills',
      name: 'skills',
      component: Skills,
    },
    {
      path: '/works',
      name: 'works',
      component: Works,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
  ],
});
