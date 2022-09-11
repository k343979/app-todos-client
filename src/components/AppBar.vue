<template>
    <v-app-bar app>
        <v-app-bar-nav-icon @click="changeDrawer(drawerFlag)"></v-app-bar-nav-icon>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
        <v-spacer></v-spacer>
    </v-app-bar>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: "",
        },
        drawer: {
            type: Boolean,
            dafault: false,
        }
    },
    data() {
        return {
            pageTitle: "",
            drawerFlag: null,
        }
    },
    methods: {
        changeDrawer(drawerFlag) {
            this.$emit("changeDrawer", !drawerFlag);
        },
    },
    watch: {
        title: {
            immediate: true,
            handler(newTitle) {
                this.pageTitle = newTitle;
            }
        },
        drawer: {
            immediate: true,
            handler(newDrawer) {
                this.drawerFlag = newDrawer;
            }
        },
    },
}
</script>