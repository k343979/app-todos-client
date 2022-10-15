<!-- テーブルコンポーネント -->
<template>
    <v-data-table
        :headers="header"
        :items="data"
        :item-key="config.itemKey"
        class="elevation-1"
        :search="searchItems[0].val"
        show-select
        :loading="loading"
        loading-text="Loading..."
        :custom-filter="filter">
        <template v-if="'tags' in data[0]" v-slot:[`item.tags`]="{ item }">
            <v-chip v-for="(tag, index) in item.tags" :key="index">{{ tag }}</v-chip>
        </template>
    </v-data-table>
</template>

<script>
export default {
    props: {
        searchItems: {
            type: Object,
            default: () => {}
        },
        header: {
            type: Array,
            default: () => []
        },
        config: {
            type: Object,
            default: () => {}
        },
        data: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            loading: false,
        }
    },
    methods: {
        filter(value, search) {
            return value != null &&
            search != null &&
            typeof value === 'string' &&
            value.toString().toLocaleLowerCase().indexOf(search) !== -1
        },
    },
}
</script>