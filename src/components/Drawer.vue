<template>
    <v-navigation-drawer
        width="100%"
        height="calc(100% - 2rem)"
        fixed
        app
        floating
        :expand-on-hover="mini"
        :value="drawer"
        :right="$vuetify.rtl"
        class="my-4 ms-4 border-radius-xl"
        :class="!$vuetify.breakpoint.mobile ? '' : 'bg-white'"
        :data-color="sidebarColor"
        :data-theme="sidebarTheme">
        <v-list-item class="pa-0">
            <v-list-item-content class="pa-0">
                <v-list-item-title class="title d-flex align-center mb-0">
                    <div class="v-navigation-drawer-brand pa-5 d-flex align-center">
                        <v-img
                            src="@/assets/img/logo-ct-white.png"
                            class="navbar-brand-img ms-3"
                            width="32"
                            v-if="sidebarTheme == 'dark'">
                        </v-img>
                        <v-img
                            src="@/assets/img/logo-ct.png"
                            class="navbar-brand-img ms-3"
                            width="32"
                            v-else>
                        </v-img>
                        <span class="ms-2 font-weight-bold text-sm">Material Dashboard 2 PRO</span>
                    </div>
                </v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <hr class="horiz ontal mb-0" :class="sidebarTheme == 'dark' ? 'light' : 'dark'" />

        <!-- ユーザー情報 -->
        <v-list nav dense>
            <v-list-group
                :ripple="false"
                append-icon="fas fa-angle-down"
                class="mx-2"
                active-class="item-active">
                <!-- ログインユーザー情報 -->
                <template v-slot:activator>
                    <v-avatar size="30" class="my-3 ms-2">
                        <img src="@/assets/img/team-3.jpg" :alt="loginUser.lastName" />
                    </v-avatar>
                    <v-list-item-content>
                        <v-list-item-title class="ms-2 ps-1 font-weight-light">
                            {{ loginUser.lastName + " " + loginUser.firstName }}
                        </v-list-item-title>
                    </v-list-item-content>
                </template>

                <!-- ユーザー情報関連ページ -->
                <v-list-item
                    :ripple="false"
                    link
                    class="mb-1 no-default-hover px-0"
                    v-for="child in userPages"
                    :key="child.title"
                    :to="child.link">
                    <div class="w-100 d-flex align-center px-2 border-radius-lg">
                        <v-list-item-icon class="me-2 align-center">
                            <i class="material-icons-round opacity-10">{{ child.prefix }}</i>
                        </v-list-item-icon>
                        <v-list-item-content class="ms-2 ps-1">
                            <v-list-item-title v-text="child.title"></v-list-item-title>
                        </v-list-item-content>
                    </div>
                </v-list-item>
            </v-list-group>
        </v-list>

        <hr class="horizontal mb-3" :class="sidebarTheme == 'dark' ? 'light' : 'dark'" />

        <!-- dashboards -->
        <v-list nav dense>
            <v-list-group
                :ripple="false"
                v-for="dashboard in dashboards"
                :key="dashboard.title"
                v-model="dashboard.active"
                append-icon="fas fa-angle-down"
                class="pb-1 mx-2"
                active-class="item-active">
                <template v-slot:activator>
                    <v-list-item-icon class="me-2 align-center">
                        <i class="material-icons-round opacity-10">{{ dashboard.action }}</i>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title
                            v-text="dashboard.title"
                            class="ms-1">
                        </v-list-item-title>
                    </v-list-item-content>
                </template>

                <v-list-item
                    :ripple="false"
                    link
                    :to="page.link"
                    v-for="page in dashboard.items"
                    :key="page.title"
                    class="mb-1 no-default-hover px-0"
                    :class="page.items ? 'has-children' : ''">
                    <div class="w-100 d-flex align-center px-2 border-radius-lg">
                        <v-list-item-icon class="me-2 align-center">
                            <i class="material-icons-round opacity-10">{{ page.prefix }}</i>
                        </v-list-item-icon>

                        <v-list-item-content class="ms-6 ps-1">
                            <v-list-item-title
                                v-text="page.title"
                                @click="listClose($event)">
                            </v-list-item-title>
                        </v-list-item-content>
                    </div>
                </v-list-item>
            </v-list-group>

            <!-- タスク関連ページ -->
            <h5 class="text-uppercase
                    text-caption
                    ls-0
                    font-weight-bolder
                    p-0
                    mx-4
                    mt-4
                    mb-2
                    ps-2
                    d-none-mini
                    white-space-nowrap"
                :class="sidebarTheme == 'dark' ? 'text-white' : 'text-default'">
                Tasks
            </h5>
            <v-list-item-group>
                <v-list-item
                    :ripple="false"
                    link
                    :to="page.link"
                    v-for="page in taskPages"
                    :key="page.title"
                    v-model="page.active"
                    class="mb-1 mx-2 no-default-hover"
                    active-class="item-active">
                    <v-list-item-icon class="me-2 align-center">
                        <i class="material-icons-round opacity-10">{{ page.prefix }}</i>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="page.title" class="ms-1"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>

            <!-- 設定関連ページ -->
            <h5 class="
                    text-uppercase text-caption
                    ls-0
                    font-weight-bolder
                    p-0
                    mx-4
                    mt-4
                    mb-2
                    ps-2
                    d-none-mini
                    white-space-nowrap"
                :class="sidebarTheme == 'dark' ? 'text-white' : 'text-default'">
                Settings
            </h5>
            <v-list-item-group>
                <v-list-item
                    :ripple="false"
                    link
                    :to="page.link"
                    v-for="page in settingPages"
                    :key="page.title"
                    v-model="page.active"
                    class="mb-1 mx-2 no-default-hover"
                    active-class="item-active">
                    <v-list-item-icon class="me-2 align-center">
                        <i class="material-icons-round opacity-10">{{ page.prefix }}</i>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="page.title" class="ms-1"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>

            <hr class="horizontal my-4" :class="sidebarTheme == 'dark' ? 'light' : 'dark'"/>

            <h5 class="
                    text-uppercase text-caption
                    ls-0
                    font-weight-bolder
                    p-0
                    mx-4
                    mt-4
                    mb-2
                    ps-2
                    d-none-mini
                    white-space-nowrap
                "
                :class="sidebarTheme == 'dark' ? 'text-white' : 'text-default'">
                Docs
            </h5>
            <v-list-item-group>
                <div v-for="(item, i) in itemsDocs" :key="i">
                    <v-list-item
                        :ripple="false"
                        link
                        :to="item.link"
                        class="pb-1 mx-2 no-default-hover py-2"
                        active-class="item-active"
                        v-if="!item.external">
                        <v-list-item-icon class="me-2 align-center">
                            <i class="material-icons-round opacity-10">{{ item.action }}</i>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title v-text="item.title" class="ms-1"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item
                        link
                        :href="item.link"
                        class="pb-1 mx-2 no-default-hover py-2"
                        :ripple="false"
                        active-class="item-active"
                        v-if="item.external"
                        target="_blank">
                        <v-list-item-icon class="me-2 align-center">
                            <i class="material-icons-round opacity-10">{{ item.action }}</i>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title
                                v-text="item.title"
                                class="ms-1">
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </div>
            </v-list-item-group>
        </v-list>

        <v-card
            class="pa-0 border-radius-lg mt-7 mb-9 mx-4"
            :style="`background-image: url(${require('../assets/img/curved-images/white-curved.jpeg')}); background-size: cover;`">
            <span
                class="mask opacity-8 border-radius-lg"
                :class="`bg-gradient-` + sidebarColor">
            </span>
        </v-card>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: "drawer",
    props: {
        drawer: {
            type: Boolean,
            default: null,
        },
        sidebarColor: {
            type: String,
            default: "success",
        },
        sidebarTheme: {
            type: String,
            default: "dark",
        },
    },
    data() {
        return {
            mini: false,
            togglerActive: false,
            thirdLevelSimple: [
                "Third level menu",
                "Just another link",
                "One last link",
            ],
            userPages: [
                {
                    title: "Profile",
                    prefix: "account_circle",
                    link: "/profile",
                },
                {
                    title: "Logout",
                    prefix: "logout",
                    link: "/logout",
                },
            ],
            itemsDocs: [
                {
                    action: "upcoming",
                    link: "/getting-started",
                    title: "Getting Started",
                    external: false,
                },
                {
                    action: "view_in_ar",
                    link: "https://vuetifyjs.com/en/components/alerts/",
                    title: "Components",
                    external: true,
                },
                {
                    action: "receipt_long",
                    link: "https://github.com/creativetimofficial/ct-vuetify-soft-ui-dashboard-pro/blob/main/CHANGELOG.md",
                    title: "Changelog",
                    external: true,
                },
            ],
            dashboards: [
                {
                    action: "dashboard",
                    active: true,
                    title: "dashboards",
                    items: [
                        {
                            title: "Summary",
                            prefix: "show_chart",
                            link: "/summary",
                        },
                        {
                            title: "Kanban",
                            prefix: "view_kanban",
                            link: "/kanban",
                        },
                    ],
                },
            ],
            taskPages: [
                {
                    title: "Dones",
                    prefix: "task",
                    link: "/task/done",
                },
                {
                    title: "Archives",
                    prefix: "archive",
                    link: "/task/archive",
                }
            ],
            settingPages: [
                {
                    title: "Application",
                    prefix: "settings",
                    link: "/settings/application",
                },
                {
                    title: "Reminder",
                    prefix: "access_alarm",
                    link: "/settings/reminder",
                },
                {
                    title: "External",
                    prefix: "api",
                    link: "/settings/external",
                },
            ],
        }
    },
    computed: {
        loginUser() {
            return this.$store.getters['user/baseInfo'];
        }
    },
    methods: {
        listClose(event) {
            let items;
            let headers;
            let groups;
            let currentEl;

            if (
                document.querySelectorAll(
                ".mb-0.v-list-item.v-list-item--link.item-active"
                )
            ) {
                items = document.querySelectorAll(
                ".mb-0.v-list-item.v-list-item--link.item-active"
                );
            }

            if (
                document.querySelectorAll(
                ".mb-0.v-list-item.v-list-item--link .v-list-group__header.v-list-item--active"
                )
            ) {
                headers = document.querySelectorAll(
                ".mb-0.v-list-item.v-list-item--link .v-list-group__header.v-list-item--active"
                );
            }

            if (
                document.querySelectorAll(
                ".mb-0.v-list-item.v-list-item--link .v-list-group .v-list .v-list-group.v-list-group--active, .mb-0.v-list-item.v-list-item--link .v-list-group.v-list-group--active"
                )
            ) {
                groups = document.querySelectorAll(
                ".mb-0.v-list-item.v-list-item--link .v-list-group .v-list .v-list-group.v-list-group--active, .mb-0.v-list-item.v-list-item--link .v-list-group.v-list-group--active"
                );
            }

            if (
                event.target.closest(
                ".mb-0.v-list-item.v-list-item--link .v-list-item__content.ms-6 .v-list-group"
                )
            ) {
                currentEl = event.target.closest(
                ".mb-0.v-list-item.v-list-item--link .v-list-item__content.ms-6 .v-list-group"
                );
            }

            if (items != null) {
                for (var i = 0; i < items.length; i++) {
                items[i].classList.remove("item-active");
                }
            }

            if (headers != null) {
                for (var j = 0; j < headers.length; j++) {
                headers[j].classList.remove(
                    "v-list-item--active",
                    "item-active",
                    "primary--text"
                );
                headers[j].setAttribute("aria-expanded", false);
                }
            }

            if (groups != null) {
                for (var k = 0; k < groups.length; k++) {
                groups[k].classList.remove("v-list-group--active", "primary--text");
                }
            }

            if (event.target.closest(".mb-0.v-list-item.v-list-item--link")) {
                event.target
                .closest(".mb-0.v-list-item.v-list-item--link")
                .classList.add("item-active");
            }

            if (currentEl != null) {
                currentEl
                .querySelector(".v-list-group__header")
                .classList.add("v-list-item--active", "item-active");
            }
        },
    },
};
</script>
