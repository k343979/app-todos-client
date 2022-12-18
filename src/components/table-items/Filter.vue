<template>
    <v-text-field
        hide-details
        class="input-style
            font-size-input
            text-light-input
            placeholder-light
            input-icon"
        dense
        flat
        filled
        solo
        height="43"
        v-model="filter"
        @input="$emit('filter', filter)"
        placeholder="Filter">
        <template slot="prepend-inner">
            <v-icon
                color="#adb5bd"
                size="16"
                class="material-icons-round mt-n2">
                search
            </v-icon>
        </template>
    </v-text-field>
</template>

<script>
export default {
    data() {
        return {
            filter: null
        }
    },
}
</script>