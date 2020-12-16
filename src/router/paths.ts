const Home = () => import("../views/Home.vue");

const Main = () => import("../views/Main.vue");
const SignUp = () => import("../views/user/SignUp.vue");
const Login = () => import("../views/user/Login.vue");
const Forget = () => import("../views/user/ForgetPwd.vue");
const Reset = () => import("../views/user/ResetPassword.vue");
const Price = () => import("../views/Price.vue");
const About = () =>
  import(/* webpackChunkName: "about" */ "../views/About.vue");

// console
const Base = () => import("../views/console/Base.vue");
const OneDayChart = () => import("../views/console/OneDayChart.vue");
const HalfHourChart = () => import("../views/console/HalfHourChart.vue");

const MyProfile = () => import("../views/console/myProfile/MyProfile.vue");
const Dashboard = () => import("../views/console/Dashboard.vue");
// My profile
const Profile = () => import("../views/console/myProfile/Profile.vue");
const Billing = () =>
  import("../views/console/myProfile/BillingInformation.vue");
const Transaction = () =>
  import("../views/console/myProfile/ChargeHistory.vue");
const Subscription = () =>
  import("../views/console/myProfile/Subscription.vue");
export default [
  {
    path: "/",
    component: Home,
    children: [
      {
        path: "/",
        component: Main
      },
      {
        path: "/price",
        component: Price
      },
      {
        path: "/about",
        component: About
      },
      {
        path: "/signup",
        component: SignUp
      },
      {
        path: "/login",
        component: Login
      },
      {
        path: "/forget",
        component: Forget
      },
      {
        path: "/reset",
        component: Reset
      }
    ]
  },
  {
    path: "/console",
    name: "Predict",
    redirect: '/console/dashboard',
    component: Base,
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard
      },{
        path: "1d/:code",
        name: "Target Price Chart (1Day)",
        component: OneDayChart
      },{
        path: "30min/:code",
        name: "Target Price Chart (30Min)",
        component: HalfHourChart
      },
      {
        path: "myprofile",
        name: "myprofile",
        component: MyProfile,
        redirect: "myprofile/profile",

        children: [
          {
            path: "profile",
            name: "Profile",
            component: Profile
          },
          {
            path: "billing",
            name: "Billing Information",
            component: Billing
          },
          {
            path: "history",
            name: "Charge History",
            component: Transaction
          },
          {
            path: "subscription",
            name: "Subscription",
            component: Subscription
          }
        ]
      }
    ]
  }
];
