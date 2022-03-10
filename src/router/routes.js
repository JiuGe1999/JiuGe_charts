const routes = [
  {
    path: '/',
    redirect: '/chart/:line',
  },
  {
    path: '/chart/:type',
    name: 'chartHome',
    component: () =>
      import(/* webpackChunkName: "chartHome" */ '../views/chartHome.vue'),
  },
];

export default routes;
