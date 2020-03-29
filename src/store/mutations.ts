// https://vuex.vuejs.org/en/mutations.html
import { set, toggle } from "@/utils/vuex";
export default {
    setIsMobile: set("isMobile"),
    setDrawer: set("drawer"),
    toggleDrawer: toggle("drawer")
};