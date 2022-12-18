<template>
    <v-row>
        <v-col cols="6" lg="3" class="d-flex align-center">
            <span class="text-body me-3 text-sm">Items per page:</span>
            <v-text-field
                hide-details
                type="number"
                outlined
                min="-1"
                max="15"
                background-color="rgba(255,255,255,.9)"
                color="rgba(0,0,0,.6)"
                light
                :value="displayCount"
                @input="$emit('changeDisplayCount', $event)"
                class="font-size-input
                    placeholder-lighter
                    text-color-light
                    input-alternative input-focused-alternative input-icon"
                placeholder="Items per page">
            </v-text-field>
        </v-col>
        <v-col cols="6" class="ml-auto d-flex justify-end">
            <v-pagination
                prev-icon="fa fa-angle-left"
                next-icon="fa fa-angle-right"
                class="pagination"
                color="#D81B60"
                v-model="currentPage"
                :length="pageLength"
                circle>
            </v-pagination>
        </v-col>
    </v-row>
</template>

<script>
export default {
    props: {
        itemsPerPage: {
            type: Number,
            default: 0
        },
        page: {
            type: Number,
            default: 0
        },
        pageCount: {
            type: Number,
            default: 0
        },
    },
    data() {
        return {
            // 表示件数
            displayCount: 0,
            currentPage: 0,
            pageLength: 0,
        }
    },
    methods: {
    },
    watch: {
        itemsPerPage: {
            immediate: true,
            handler(val) {
                this.displayCount = val;
            }
        },
        page: {
            immediate: true,
            handler(val) {
                this.currentPage = val;
            }
        },
        pageCount: {
            immediate: true,
            handler(val) {
                this.pageLength = val;
            }
        },
        currentPage: {
            immediate: true,
            handler(val) {
                this.$emit('changePage', val);
            }
        }
    },
}
</script>