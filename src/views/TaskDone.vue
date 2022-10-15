<template>
    <v-app id="task-done">
        <!-- サイドメニュー -->
        <side-menu :selected="selected" :drawer="drawer" />

        <!-- ヘッダー -->
        <app-bar :title="title" :drawer="drawer" @changeDrawer="changeDrawer" />

        <v-main>
            <v-container>
                <v-row justify="center" class="py-4 px-2">
                    <v-col cols="12">
                        <v-card>
                            <v-card-title>
                                完了タスク一覧
                                <v-spacer></v-spacer>
                                <!-- 検索フィールド -->
                                <search-field v-if="searchFieldFlag" :searchItems="searchItems" />
                                <!-- 検索フィールド開閉ボタン -->
                                <v-btn
                                    @click="searchFieldFlag = !searchFieldFlag"
                                    color="primary">
                                    <v-icon dark>mdi-magnify</v-icon>
                                </v-btn>
                            </v-card-title>
                            <!-- テーブル -->
                            <data-table
                                :searchItems="searchItems"
                                :header="tableHeader"
                                :config="tableConfig"
                                :data="tasks" />
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import AppBar from '../components/AppBar.vue'
import SideMenu from '../components/SideMenu.vue'
import SearchField from '../components/SearchField.vue'
import DataTable from '../components/DataTable.vue'
export default {
    components: {
        AppBar,
        SideMenu,
        SearchField,
        DataTable
    },
    data() {
        return {
            drawer: true,
            selected: 2,
            title: "完了タスク",
            searchFieldFlag: false,
            searchItems: {
                0: {
                    label: 'タイトル検索',
                    type: 'input',
                    val: '',
                    icon: 'mdi-magnify'
                },
                1: {
                    label: '重要度',
                    type: 'number',
                    val: '',
                },
                2: {
                    label: '期限 (From)',
                    type: 'date',
                    val: '',
                },
                3: {
                    label: '期限 (To)',
                    type: 'date',
                    val: '',
                },
                4: {
                    label: '完了日時 (From)',
                    type: 'date',
                    val: '',
                },
                5: {
                    label: '完了日時 (To)',
                    type: 'date',
                    val: '',
                },
            },
            tableConfig: {
                itemKey: 'title',
            },
            tasks: [
                {
                    title: 'タスク1',
                    important_level: 4,
                    deadline: '2022-10-03 15:00',
                    done_at: '2022-10-03 15:00',
                    tags: ['programming']
                },
                {
                    title: 'タスク2',
                    important_level: 3,
                    deadline: '2022-10-02 15:00',
                    done_at: '2022-10-01 17:00',
                    tags: ['programming']
                },
                {
                    title: 'タスク3',
                    important_level: 5,
                    deadline: '2022-09-30 15:00',
                    done_at: '2022-09-30 12:00',
                    tags: ['programming']
                },
            ],
        };
    },
    computed: {
        tableHeader() {
            return [
                {
                    text: 'タイトル',
                    align: 'start',
                    sortable: false,
                    value: 'title',
                },
                {
                    text: '重要度',
                    value: 'important_level',
                    filter: val => {
                        if (!this.searchItems[1].val) return true;

                        return val == parseInt(this.searchItems[1].val);
                    },
                },
                {
                    text: '期限',
                    value: 'deadline',
                    filter: val => {
                        let from = this.searchItems[2].val;
                        let to = this.searchItems[3].val ? this.searchItems[3].val + ' 23:59' : '';
                        // 両条件が設定される場合
                        if (from && to) return from <= val && val <= to;
                        // Fromのみ
                        if (from && !to) return from <= val;
                        // Toのみ
                        if (!from && to) return val <= to;

                        return true;
                    },
                },
                {
                    text: '完了日時',
                    value: 'done_at',
                    filter: val => {
                        let from = this.searchItems[4].val;
                        let to = this.searchItems[5].val ? this.searchItems[5].val + ' 23:59' : '';
                        // 両条件が設定される場合
                        if (from && to) return from <= val && val <= to;
                        // Fromのみ
                        if (from && !to) return from <= val;
                        // Toのみ
                        if (!from && to) return val <= to;

                        return true;
                    },
                },
                {
                    text: 'タグ',
                    value: 'tags',
                    sortable: false,
                },
            ]
        },
    },
    methods: {
        // サイドメニューの開閉
        changeDrawer(newDrawer) {
            this.drawer = newDrawer;
        },
    },
}
</script>