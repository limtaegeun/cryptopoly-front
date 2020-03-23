const Home = () => import("../views/Home.vue");
const About = () =>
  import(/* webpackChunkName: "about" */ "../views/About.vue");
export default [
  {
    path: "/",
    name: "Home",
    component: Home
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
