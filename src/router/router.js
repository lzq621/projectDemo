import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/home/Index.vue";
import Home from "../views/home/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Index",
        component: Index,
        children: [{
            path: "/Home/:userId",
            name: "Home",
            component: Home
        }]
    }
]
var router = new VueRouter({
    routes
})

export default router;