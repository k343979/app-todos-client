<template>
    <v-app id="task-create">
        <!-- サイドメニュー -->
        <side-menu :active="selected" :drawer="drawer" />

        <!-- ヘッダー -->
        <v-app-bar app>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Dashboard</v-toolbar-title>

            <v-spacer></v-spacer>

        </v-app-bar>
        <v-main>
            <v-container>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import SideMenu from '../components/SideMenu.vue'
export default {
    components: {
        SideMenu,
    },
    data() {
        return {
            drawer: null,
            selected: 1,
        };
    },
}
</script>