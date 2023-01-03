<template>
    <div>
        <div class="px-6 py-6">
            <h5 class="text-h5 font-weight-bold text-typo">基本情報</h5>
        </div>
        <div class="px-6 pb-6 pt-0">
            <v-row>
                <v-col sm="12" md="6">
                    <v-text-field
                        color="#e91e63"
                        label="姓"
                        v-model="userForm.lastName"
                        class="font-size-input input-style">
                    </v-text-field>
                </v-col>
                <v-col sm="12" md="6">
                    <v-text-field
                        color="#e91e63"
                        label="名"
                        v-model="userForm.firstName"
                        class="font-size-input input-style">
                    </v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col sm="12" md="6" class="py-0">
                    <v-text-field
                        label="メールアドレス"
                        v-model="userForm.email"
                        readonly
                        class="font-size-input input-style">
                    </v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col sm="12" md="6" class="py-0">
                    <v-text-field
                        color="#e91e63"
                        label="電話番号"
                        v-model="userForm.tel"
                        placeholder="+40 735 631 620"
                        class="font-size-input input-style">
                    </v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col sm="12" md="6" class="py-0">
                    <v-text-field
                        color="#e91e63"
                        label="個人ステータス"
                        v-model="userForm.jobTitle"
                        placeholder="+40 735 631 620"
                        class="font-size-input input-style">
                    </v-text-field>
                </v-col>
            </v-row>
            <v-row class="text-end">
                <v-btn
                    :ripple="false"
                    :elevation="0"
                    class="
                        font-weight-bold
                        text-xs
                        btn-default
                        bg-gradient-default
                        py-5
                        px-6
                        mt-6
                        mb-2
                        me-2"
                    color="primary"
                    @click="update(userForm)">
                    更新
                </v-btn>
            </v-row>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Profile',
    components: {
        // Calendar,
    },
    data() {
        return {
            userForm: {},
        }
    },
    computed: {
        /**
         * ユーザ情報
         * @type Object
         */
        userInfo() {
            return this.$store.getters['user/baseInfo'];
        },
    },
    methods: {
        /**
         * ユーザ情報を取得し、vuexにセット
         */
        fetch() {
            axios
                .get(`http://localhost:3000/v1/user/1`)
                .then((res) => {
                    this.$store.commit('user/setBaseInfo', res.data.user);
                })
                .catch((e) => { console.log(e); })
                .finally(() => {
                    // フォームにユーザ情報をセット
                    this.setForm();
                })
        },
        /**
         * vuexからユーザ情報を取得し、フォームにセット
         */
        setForm() {
            // 「=」の値渡しだとミューテーションエラーになるため、deep copyする
            this.userForm = JSON.parse(JSON.stringify(this.$store.getters['user/baseInfo']));
        },
        /**
         * ユーザ情報を更新し、vuexにセット
         *
         * @param userForm
         */
        update(userForm) {
            axios
                .put('http://localhost:3000/v1/user', userForm)
                .then((res) => {
                    this.$store.commit('user/setBaseInfo', res.data.user);
                })
                .catch((e) => { console.log(e); })
                .finally(() => {
                    // フォームにユーザ情報をセット
                    this.setForm();
                })
        }
    },
    mounted() {
        if (!this.userInfo) {
            // ユーザ情報を取得
            this.fetch();
        } else {
            setTimeout(() => {
                this.setForm();
            }, 200);
        }
    }
};
</script>