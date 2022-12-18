const state = {
    // ユーザー情報
    baseInfo: {
        lastName: "水口",
        firstName: "佑介",
        email: "example@vuetifyjs.com",
        phoneNumber: "09012345678",
        jobTitle: "CEO / Co-Founder"
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
