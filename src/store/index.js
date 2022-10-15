import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from "vuex-persistedstate";

import form from './modules/form'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        namespaced: true,
        // ユーザー情報
        user,
        // フォーム
        form
    },
    // plugins: [createPersistedState()]
})
