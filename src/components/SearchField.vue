<!-- 検索フィールドコンポーネント -->
<template>
    <v-row justify="space-between">
        <v-col v-for="(item, index) in searchItems" :key="index" cols="12" md="6">
            <v-text-field
                v-model="item.val"
                :append-icon="item.icon ? item.icon : ''"
                :type="item.type"
                :label="item.label"
                class="mx-3">
            </v-text-field>
        </v-col>
    </v-row>
</template>

<script>
export default {
    props: {
        searchItems: {
            type: Object,
            default: () => {}
        },
    },
}
</script>