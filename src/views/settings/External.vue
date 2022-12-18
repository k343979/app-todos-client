<template>
    <v-container fluid class="py-6">
        <v-row justify-lg="center">
            <v-col lg="9">
                <linkage-accounts></linkage-accounts>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import LinkageAccounts from '../../components/settings/LinkageAccounts.vue'
export default {
    name: "external",
    components: {
        LinkageAccounts,
    },
}
</script>