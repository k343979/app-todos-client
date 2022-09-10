<template>
    <!-- サイドメニュー -->
    <v-navigation-drawer v-model="drawerFlag" class="blue-grey darken-2" dark app>
        <v-sheet color="blue-grey darken-2" class="pa-4">
            <v-avatar class="mb-4" color="grey" size="64"></v-avatar>
            <div class="title" style="color:#fff;">水口 佑介</div>
            <div style="color:#fff;">example@vuetifyjs.com</div>
        </v-sheet>

        <!-- <v-divider></v-divider> -->
        <v-list>
            <v-list-item-group v-model="active">
                <router-link to="/">
                    <v-list-item link>
                        <v-list-item-icon>
                            <v-icon>mdi-view-dashboard</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>Dashboard</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </router-link>
                <router-link to="/task/create">
                    <v-list-item link>
                        <v-list-item-icon>
                            <v-icon>mdi-clipboard-edit</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>新規作成</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </router-link>
                <router-link to="/task/done">
                    <v-list-item link>
                        <v-list-item-icon>
                            <v-icon>mdi-sticker-check</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>完了タスク</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </router-link>
                <router-link to="/task/archive">
                    <v-list-item link>
                        <v-list-item-icon>
                            <v-icon>mdi-archive-arrow-down</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>アーカイブ</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </router-link>
                <router-link to="/notification">
                    <v-list-item link>
                        <v-list-item-icon>
                            <v-icon>mdi-alarm-light</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>お知らせ</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </router-link>
                <v-list-group :value="false" no-action prepend-icon="mdi-cog">
                    <template v-slot:activator>
                        <v-list-item-title>設定</v-list-item-title>
                    </template>
                    <router-link to="/setting/user-account">
                        <v-list-item link>
                            <v-list-item-content class="ms-5 ps-5">
                                <v-list-item-title>アカウント</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </router-link>
                    <router-link to="/setting/application">
                        <v-list-item link>
                            <v-list-item-content class="ms-5 ps-5">
                                <v-list-item-title>アプリ設定</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </router-link>
                    <router-link to="/setting/reminder">
                        <v-list-item link>
                            <v-list-item-content class="ms-5 ps-5">
                                <v-list-item-title>リマインダー</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </router-link>
                    <router-link to="/setting/external">
                        <v-list-item link>
                            <v-list-item-content class="ms-5 ps-5">
                                <v-list-item-title>外部システム</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </router-link>
                </v-list-group>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    props: {
        active: {
            type: Number,
            default: 0
        },
        drawer: {
            type: Boolean,
            dafault: false,
        }
    },
    data() {
        return {
            drawerFlag: null,
        }
    },
    computed: {
    },
    methods: {
    },
    watch: {
        drawer(newV, oldV) {
            console.log(oldV);
            this.drawerFlag = newV;
        },
    },
}
</script>