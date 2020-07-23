const Home = () => import("../views/Home.vue");
const About = () =>
  import(/* webpackChunkName: "about" */ "../views/About.vue");
const Main = () => import('../views/Main.vue')
const SignUp = () => import('../views/user/SignUp.vue')
const Login = () => import('../views/user/Login.vue')
const Forget = () => import('../views/user/ForgetPwd.vue')
const Reset = () => import('../views/user/ResetPassword.vue')

// console
const Base = () => import('../views/console/Base.vue')
const CloseChart = () => import('../views/console/CloseChart.vue')
const MyProfile = () => import('../views/console/myProfile/MyProfile.vue')

// My profile
const Profile = () => import('../views/console/myProfile/Profile.vue')
const Billing = () => import('../views/console/myProfile/BillingInformation.vue')
const Transaction = () => import('../views/console/myProfile/TransactionHistory.vue')

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
    path: "/console",
    name: "Predict",
    component: Base,
    children: [
      {
        path: "close/:code",
        name: "CloseChart",
        component: CloseChart
      },{
        path: "myprofile",
        name: "myprofile",
        component: MyProfile,
        redirect: "myprofile/profile",

        children: [
          {
            path: "profile",
            name: "profile",
            component: Profile
          },
          {
            path: "billing",
            name: "billing",
            component: Billing
          },
          {
            path: "transaction",
            name: "transaction",
            component: Transaction
          },
        ]
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
