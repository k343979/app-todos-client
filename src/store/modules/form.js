const state = {
    // タスク新規作成フォーム
    taskCreate: {
        0: {
            tag: "text-field",
            label: "タイトル",
            key: "title",
            val: null,
            rule: {
                max: 50,
                match: null,
                required: true,
            }
        },
        1: {
            tag: "date-time-picker",
            label: "期限",
            key: "deadline",
            dateVal: null,
            timeVal: null,
            rule: {
                required: true,
            }
        },
        2: {
            tag: "rating",
            label: "重要度",
            key: "important_level",
            val: null,
            rule: {
                max: 5,
                match: null,
                required: false,
            }
        },
        3: {
            tag: "select-tip",
            label: "タグ付与",
            key: "tags",
            val: null,
            tags: ['Programming', 'Playing video games', 'Watching movies', 'Sleeping'],
            rule: {
            }
        },
        4: {
            tag: "text-area",
            label: "内容",
            key: "detail",
            val: null,
            rule: {
                max: 500,
                match: null,
                required: true,
            }
        },
    }
};

const getters = {
    taskCreate: (state) => state.taskCreate,
};

const actions = {
};

const mutations = {
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
