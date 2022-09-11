<template>
    <v-app id="task-create">
        <!-- サイドメニュー -->
        <side-menu :selected="selected" :drawer="drawer" />

        <!-- ヘッダー -->
        <app-bar :title="title" :drawer="drawer" @changeDrawer="changeDrawer" />

        <v-main>
            <v-container>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import AppBar from '../components/AppBar.vue'
import SideMenu from '../components/SideMenu.vue'
export default {
    components: {
        AppBar,
        SideMenu,
    },
    data() {
        return {
            drawer: true,
            selected: 2,
            title: "完了タスク",
        };
    },
    methods: {
        // サイドメニューの開閉
        changeDrawer(newDrawer) {
            this.drawer = newDrawer;
        },
    },
}
</script>