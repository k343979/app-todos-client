<template>
    <v-container fluid class="px-6 py-6">
        <v-row class="mt-8">
            <v-col cols="12">
                <v-card class="card-shadow border-radius-xl">
                    <!-- テーブルタイトル -->
                    <div class="card-header-padding">
                        <table-title :title="'Done'" :description="''"></table-title>
                    </div>

                    <v-card-text class="px-0 py-0">
                        <v-data-table
                            :headers="headers"
                            :items="dones"
                            :search="keyword"
                            class="table"
                            :page.sync="page"
                            hide-default-footer
                            @page-count="pageCount = $event"
                            :items-per-page="itemsPerPage"
                            mobile-breakpoint="0">
                            <template v-slot:top>
                                <v-toolbar flat height="80">
                                    <!-- 検索結果フィルター -->
                                    <v-row>
                                        <v-col cols="12" md="5">
                                            <table-filter @filter="filterItem"></table-filter>
                                        </v-col>
                                    </v-row>

                                    <v-spacer></v-spacer>

                                    <!-- フォーム付きダイアログ -->
                                    <form-dialog
                                        :displayFlag="formDialog"
                                        :formTitle="formTitle"
                                        :form="editedItem"
                                        @save="save"
                                        @close="close">
                                    </form-dialog>
                                    <!-- 削除前確認ダイアログ -->
                                    <confirm-dialog
                                        :displayFlag="deleteDialog"
                                        @deleteItemConfirm="deleteItemConfirm"
                                        @closeDelete="closeDelete">
                                    </confirm-dialog>
                                </v-toolbar>
                            </template>

                            <template v-slot:[`item.name`]="{ item }">
                                <div class="d-flex align-center ms-2">
                                <span class="text-sm font-weight-normal text-body">
                                    {{ item.name }}
                                </span>
                                </div>
                            </template>

                            <template v-slot:[`item.email`]="{ item }">
                                <span class="text-sm font-weight-normal text-body">{{ item.email }}</span>
                            </template>

                            <template v-slot:[`item.age`]="{ item }">
                                <span class="text-sm font-weight-normal text-body">{{ item.age }}</span>
                            </template>

                            <template v-slot:[`item.salary`]="{ item }">
                                <span class="text-sm font-weight-normal text-body">{{ item.salary }}</span>
                            </template>

                            <template v-slot:[`item.actions`]="{ item }">
                                <v-btn
                                    @click="editItem(item)"
                                    icon
                                    elevation="0"
                                    :ripple="false"
                                    height="28"
                                    min-width="36"
                                    width="36"
                                    class="btn-ls me-2 my-2 rounded-sm"
                                    color="#67748e">
                                    <v-icon size="14" class="material-icons-round">construction</v-icon>
                                </v-btn>

                                <v-btn
                                    @click="deleteItem(item)"
                                    icon
                                    elevation="0"
                                    :ripple="false"
                                    height="28"
                                    min-width="36"
                                    width="36"
                                    class="btn-ls me-2 my-2 rounded-sm"
                                    color="#67748e">
                                    <v-icon size="14" class="material-icons-round">archive</v-icon>
                                </v-btn>
                            </template>
                        </v-data-table>
                    </v-card-text>
                    <!-- ページネーション -->
                    <v-card-actions class="card-padding">
                        <table-pagination
                            :itemsPerPage="itemsPerPage"
                            :page="page"
                            :pageCount="pageCount"
                            @changePage="page = $event"
                            @changeDisplayCount="changeDisplayCount">
                        </table-pagination>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import header from "./materials/TableHeader";

import TableTitle from "../../components/table-items/Title.vue";
import TableFilter from "../../components/table-items/Filter.vue";
import TablePagination from "../../components/table-items/Pagination.vue";
import FormDialog from "../../components/table-items/FormDialog.vue"
import ConfirmDialog from "../../components/table-items/ConfirmDialog.vue"
export default {
    name: "Done",
    components: {
        TableTitle,
        TableFilter,
        TablePagination,
        FormDialog,
        ConfirmDialog
    },
    data() {
        return {
            page: 1,
            pageCount: 0,
            itemsPerPage: 10,
            formDialog: false,
            deleteDialog: false,
            keyword: "",
            editedIndex: -1,
            editedItem: {
                name: "",
                email: "",
                age: "",
                salary: "",
            },
            defaultItem: {
                name: "",
                email: "",
                age: "",
                salary: "",
            },
        };
    },
    computed: {
        formTitle() {
            return this.editedIndex === -1 ? "New Item" : "Edit Item";
        },
        headers() {
            return header.dones;
        },
        pages() {
            return this.pagination.rowsPerPage
                ? Math.ceil(this.items.length / this.pagination.rowsPerPage) : 0;
        },
        dones() {
            return this.$store.getters['tasks/dones'];
        }
    },
    methods: {
        editItem(item) {
            this.editedIndex = this.dones.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.formDialog = true;
        },
        deleteItem(item) {
            this.editedIndex = this.dones.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.deleteDialog = true;
        },
        deleteItemConfirm() {
            this.dones.splice(this.editedIndex, 1);
            this.closeDelete(false);
        },
        filterItem(val) {
            this.keyword = val;
        },
        close(val = false) {
            this.formDialog = val;
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem);
                this.editedIndex = -1;
            });
        },
        closeDelete(val = false) {
            this.deleteDialog = val;
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem);
                this.editedIndex = -1;
            });
        },
        save(task) {
            if (this.editedIndex > -1) {
                let params = task;
                params.index = this.editedIndex;
                this.$store.commit('tasks/updateDone', params);
            } else {
                const id = this.dones.length + 1;
                task.id = id;
                this.$store.commit('tasks/addArchive', task);
            }
            this.close();
        },
        changeDisplayCount(val) {
            this.itemsPerPage = parseInt(val, 10);
        }
    },
    watch: {
        formDialog(val) {
            val || this.close();
        },
        deleteDialog(val) {
            val || this.closeDelete();
        },
    }
};
</script>
