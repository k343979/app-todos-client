<!-- Rateコンポーネント -->
<template>
    <v-row>
        <v-col cols="12" md="6">
            <p class="mb-0" v-text="item.label"></p>
            <v-rating
                v-model="item.val"
                background-color="indigo lighten-3"
                color="indigo"
                length="5"
                hover
                large
            ></v-rating>
        </v-col>
    </v-row>
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
    },
}
</script>