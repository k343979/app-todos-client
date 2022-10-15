const state = {
    // ユーザー情報
    baseInfo: {
        userName: "水口 佑介",
        email: "example@vuetifyjs.com",
    }
};

const getters = {
    baseInfo: state => state.baseInfo,
};

const actions = {
    setBaseInfo({ commit }) {
        commit("setBaseInfo")
    },
};

const mutations = {
    setBaseInfo(state, baseInfo) {
        state.baseInfo = baseInfo;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
