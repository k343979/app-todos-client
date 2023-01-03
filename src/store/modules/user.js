const state = {
    // ユーザー情報
    baseInfo: {}
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
