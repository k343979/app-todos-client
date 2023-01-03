<template>
    <router-view></router-view>
</template>

<script>
import axios from 'axios';
export default {
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
        }
    },
    mounted() {
        // ユーザ情報を取得
        this.fetch();
    }
}
</script>