<template>
    <v-app id="dashboard">
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
                <v-row dense>
                    <v-col v-for="(list,index) in tasks" :key="index" cols="12" md="6" lg="4">
                        <!-- タスクカード -->
                        <v-expansion-panels v-model="panel" multiple>
                            <v-expansion-panel>
                                <v-expansion-panel-header v-text="listTitle(index)"></v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <v-card class="my-3" v-for="(item,i) in list" :key="i">
                                        <v-card-text>
                                            <div v-text="item.deadline"></div>
                                            <p class="text-h5 text--primary" v-text="item.title"></p>
                                            <p>adjective</p>
                                        </v-card-text>
                                        <v-card-actions>
                                            <v-btn text color="teal accent-4" @click="openDialog(item)">
                                                Detail
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                        <!-- 詳細ダイアログ -->
                        <template>
                            <div class="text-center">
                                <v-dialog v-model="dialog" width="700">
                                    <v-card class="pt-4">
                                        <v-card-text>
                                            <p class="text-h5 text--primary" v-text="dialogTitle"></p>
                                            <div class="mb-2" v-text="dialogDeadline"></div>
                                            <p v-text="dialogDetail"></p>
                                        </v-card-text>
                                        <v-divider></v-divider>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color="grey darken-1" text @click="dialog = false">Close</v-btn>
                                            <v-btn color="teal accent-4" text @click="editable">Edit</v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                            </div>
                        </template>
                    </v-col>
                </v-row>
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
            selected: 0,
            panel: [0],
            dialog: false,
            dialogTitle: null,
            dialogDeadline: null,
            dialogDetail: null,
            tasks: {
                0: {
                    0: {
                        title: "待ちタスク1",
                        deadline: "2022/09/30",
                        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
                    },
                    1: {
                        title: "待ちタスク2",
                        deadline: "2022/09/30",
                        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
                    },
                },
                1: {
                    0: {
                        title: "進行タスク1",
                        deadline: "2022/09/30",
                        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
                    },
                },
                2: {
                    0: {
                        title: "完了タスク1",
                        deadline: "2022/09/30",
                        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
                    },
                    1: {
                        title: "完了タスク2",
                        deadline: "2022/09/30",
                        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
                    },
                    2: {
                        title: "完了タスク3",
                        deadline: "2022/09/30",
                        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
                    },
                },
            },
        };
    },
    computed: {
    },
    methods: {
        // 各リストのタイトル
        listTitle(i) {
            if (i == 0) {
                return "waiting"
            } else if (i == 1) {
                return "ongoing"
            } else {
                return "done"
            }
        },
        // 詳細ダイアログを開く
        openDialog(item) {
            this.dialogTitle    = item.title;
            this.dialogDeadline = item.deadline;
            this.dialogDetail   = item.detail;
            this.dialog         = true;
        },
        // 編集可能にする
        editable() {
            console.log(1);
        },
    },
};
</script>
