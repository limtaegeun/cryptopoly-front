const Home = () => import("../views/Home.vue");
const About = () =>
  import(/* webpackChunkName: "about" */ "../views/About.vue");
const Main = () => import('../views/Main.vue')
const SignUp = () => import('../views/SignUp.vue')
const CloseChart = () => import('../views/predict/CloseChart.vue')
// predict
const PredictBase = () => import('../views/predict/Base.vue')
export default [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [{
      path: '/',
      component: Main
    },{
      path: '/signup',
      component: SignUp
    }]
  },
  {
    path: "/predict",
    name: "Predict",
    component: PredictBase,
    children: [
      {
        path: "close/:code",
        name: "CloseChart",
        component: CloseChart
      },
    ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  }
];
