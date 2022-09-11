import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Dashboard from "../views/Dashboard.vue";
import TaskCreate from "../views/TaskCreate.vue"
import TaskDone from "../views/TaskDone.vue"
import TaskArchive from "../views/TaskArchive.vue"
import Notification from "../views/Notification.vue"
import UserAccount from "../views/UserAccount.vue"
import Application from "../views/Application.vue"
import Reminder from "../views/Reminder.vue"
import External from "../views/External.vue"

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
        {
            path: "/task/done",
            name: "task-done",
            component: TaskDone,
        },
        {
            path: "/task/archive",
            name: "task-archive",
            component: TaskArchive,
        },
        {
            path: "/notification",
            name: "notification",
            component: Notification,
        },
        {
            path: "/setting/user-account",
            name: "user-account",
            component: UserAccount,
        },
        {
            path: "/setting/application",
            name: "application",
            component: Application,
        },
        {
            path: "/setting/reminder",
            name: "reminder",
            component: Reminder,
        },
        {
            path: "/setting/external",
            name: "external",
            component: External,
        },
    ]
});
