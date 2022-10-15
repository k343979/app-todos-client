<!-- テキストエリアコンポーネント -->
<template>
    <v-textarea
        v-model="item.val"
        :label="item.label"
        :rules="validate(item.rule)"
        :counter="item.rule.max"
        :required="item.rule.required"
        rows="10">
    </v-textarea>
</template>

<script>
export default {
    props: {
        index: {
            type: Number,
            default: 0,
        },
    },
    computed: {
        item() {
            return this.$store.getters['form/taskCreate'][this.index];
        },
        // バリデーション
        validate() {
            return (rule) => {
                const messages = []
                // 必須チェック
                if (rule.required) {
                    const ele =
                        v => (v || '').length > 0 ||
                        'This field is required'
                    messages.push(ele);
                }
                // 文字数上限チェック
                if (rule.max) {
                    const ele =
                        v => (v || '').length <= rule.max ||
                        `A maximum of ${rule.max} characters is allowed`
                    messages.push(ele);
                }

                return messages
            }
        },
    },
}
</script>