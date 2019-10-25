import VueRouter from 'vue-router';

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomeContainer }
  ]
})

export default router