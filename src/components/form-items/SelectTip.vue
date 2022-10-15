<!-- Tipの選択ボックスコンポーネント -->
<template>
    <v-combobox
        v-model="items.val"
        :items="items.tags"
        chips
        clearable
        :label="items.label"
        multiple
        solo>
        <template v-slot:selection="{ attrs, item, select, selected }">
            <v-chip
                v-bind="attrs"
                :input-value="selected"
                close
                @click="select"
                @click:close="remove(item)">
                <strong>{{ item }}</strong>&nbsp;
            </v-chip>
        </template>
    </v-combobox>
</template>

<script>
export default {
    props: {
        index: {
            type: Number,
            default: 0,
        },
    },
    data () {
        return {
        }
    },
    computed: {
        items() {
            return this.$store.getters['form/taskCreate'][this.index];
        },
    },
    methods: {
        // 選択済みのタグを削除
        remove(target) {
            this.items.val.splice(this.items.val.indexOf(target), 1)
        },
    },
}
</script>