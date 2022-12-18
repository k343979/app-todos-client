import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from "vuex-persistedstate";

import form from './modules/form'
import user from './modules/user'
import tasks from './modules/tasks'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        namespaced: true,
        user, // ユーザー情報
        form, // フォーム
        tasks, // タスク関連
    },
    // plugins: [createPersistedState()]
})
