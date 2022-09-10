import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Dashboard from "../views/Dashboard.vue";
import TaskCreate from "../views/TaskCreate.vue"

export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "dashboard",
            component: Dashboard,
        },
        {
            path: "/task/create",
            name: "task-create",
            component: TaskCreate,
        },
    ]
});
