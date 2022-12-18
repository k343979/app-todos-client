import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// layouts
import DashboardLayout from "../views/layouts/DashboardLayout.vue"
import UserLayout from "../views/layouts/UserLayout.vue"
import TaskLayout from "../views/layouts/TaskLayout.vue"
import SettingLayout from "../views/layouts/SettingLayout.vue"
// dashboards
import Summary from "../views/dashboards/Summary.vue"
import Kanban from "../views/dashboards/Kanban.vue"
// users
import Profile from "../views/users/Profile.vue";
// tasks
import Archive from "../views/tasks/Archive.vue";
import Done from "../views/tasks/Done.vue";
// settings
import Application from "../views/settings/Application.vue";
import Reminder from "../views/settings/Reminder.vue";
import External from "../views/settings/External.vue";

// import TaskCreate from "../views/TaskCreate.vue"

export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "Dashboard",
            redirect: "/summary",
            component: DashboardLayout,
            children: [
                {
                    path: "/kanban",
                    name: "Kanban",
                    component: Kanban,
                    meta: {
                        groupName: "Dashboards",
                    },
                },
                {
                    path: "/summary",
                    name: "Summary",
                    component: Summary,
                    meta: {
                        groupName: "Dashboards",
                    },
                },
            ]
        },
        {
            path: "/",
            name: "Users",
            redirect: "/profile",
            component: UserLayout,
            children: [
                {
                    path: "/profile",
                    name: "Profile",
                    component: Profile,
                    meta: {
                        groupName: "Users",
                    },
                },
            ]
        },
        {
            path: "/",
            name: "Tasks",
            redirect: "/summary",
            component: TaskLayout,
            children: [
                {
                    path: "/task/archive",
                    name: "Archive",
                    component: Archive,
                    meta: {
                        groupName: "Tasks",
                    },
                },
                {
                    path: "/task/done",
                    name: "Done",
                    component: Done,
                    meta: {
                        groupName: "Tasks",
                    },
                },
            ]
        },
        {
            path: "/",
            name: "Settings",
            redirect: "/summary",
            component: SettingLayout,
            children: [
                {
                    path: "/settings/application",
                    name: "Application",
                    component: Application,
                    meta: {
                        groupName: "Settings",
                    },
                },
                {
                    path: "/settings/reminder",
                    name: "Reminder",
                    component: Reminder,
                    meta: {
                        groupName: "Settings",
                    },
                },
                {
                    path: "/settings/external",
                    name: "External",
                    component: External,
                    meta: {
                        groupName: "Settings",
                    },
                },
            ]
        },
        // {
        //     path: "/task/create",
        //     name: "task-create",
        //     component: TaskCreate,
        // },
    ]
});
