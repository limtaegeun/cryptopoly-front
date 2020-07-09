const Home = () => import("../views/Home.vue");
const About = () =>
  import(/* webpackChunkName: "about" */ "../views/About.vue");
const Main = () => import('../views/Main.vue')
const SignUp = () => import('../views/user/SignUp.vue')
const Login = () => import('../views/user/Login.vue')
const Forget = () => import('../views/user/ForgetPwd.vue')
const CloseChart = () => import('../views/predict/CloseChart.vue')
const Reset = () => import('../views/user/ResetPassword.vue')
// predict
const PredictBase = () => import('../views/predict/Base.vue')
export default [
  {
    path: "/",
    component: Home,
    children: [{
      path: '/',
      component: Main
    },{
      path: '/signup',
      component: SignUp
    },{
      path: '/login',
      component: Login
    },{
      path: '/forget',
      component: Forget
    },{
      path: '/reset',
      component: Reset
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
