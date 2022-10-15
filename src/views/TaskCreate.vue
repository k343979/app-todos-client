<template>
    <v-app id="task-create">
        <!-- サイドメニュー -->
        <side-menu :selected="selected" :drawer="drawer" />

        <!-- ヘッダー -->
        <app-bar :title="title" :drawer="drawer" @changeDrawer="changeDrawer" />

        <v-main>
            <v-container>
                <v-row justify="center" class="py-4">
                    <v-col cols="12" md="6">
                        <!-- タスク作成フォーム -->
                        <v-form ref="form">
                            <div v-for="(item, index) in formItems" :key="index" class="py-4">
                                <component
                                    :is="item.tag"
                                    :index="Number(index)">
                                </component>
                            </div>
                            <div class="text-center">
                                <v-btn
                                    :loading="loading"
                                    :disabled="loading"
                                    @click="submit"
                                    depressed
                                    color="primary">
                                    新規作成
                                </v-btn>
                            </div>
                        </v-form>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import AppBar from '../components/AppBar.vue'
import SideMenu from '../components/SideMenu.vue'
import TextField from '../components/form-items/TextField.vue'
import DateTimePicker from '../components/form-items/DateTimePicker.vue'
import Rating from '../components/form-items/Rating.vue'
import SelectTip from '../components/form-items/SelectTip.vue'
import TextArea from '../components/form-items/TextArea.vue'
export default {
    components: {
        AppBar,
        SideMenu,
        TextField,
        TextArea,
        DateTimePicker,
        Rating,
        SelectTip,
    },
    data() {
        return {
            drawer: true,
            selected: 1,
            title: "新規作成",
            loading: false,
        };
    },
    computed: {
        formItems() {
            return this.$store.getters['form/taskCreate'];
        },
    },
    methods: {
        // サイドメニューの開閉
        changeDrawer(newDrawer) {
            this.drawer = newDrawer;
        },
        // タスク作成
        async submit() {
            this.loading = true;
            let form = this.formItems;
            let keys = Object.keys(form);
            let param = [];
            keys.forEach((i) => {
                param[`${form[i].key}`] = null;

                if (form[i].val) {
                    param[`${form[i].key}`] = form[i].val;
                }
                if (form[i].dateVal) {
                    param[`${form[i].key}`] = form[i].dateVal;
                    if (form[i].timeVal) {
                        param[`${form[i].key}`] += " " + form[i].timeVal;
                    } else {
                        param[`${form[i].key}`] += " 23:59";
                    }
                }
            });
            await new Promise(resolve => setTimeout(resolve, 3000));
            this.loading = false;
        },
    },
}
</script>