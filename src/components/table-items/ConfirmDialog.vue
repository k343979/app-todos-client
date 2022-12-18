<template>
    <v-dialog v-model="toggleDisplay" max-width="500px">
        <v-card class="card-shadow card-padding border-radius-xl">
            <v-card-title
                class="pt-0 text-h5 text-typo justify-center">
                Are you sure you want to delete this item?
            </v-card-title>
            <v-card-actions class="pb-0">
                <v-spacer></v-spacer>
                <v-btn
                    @click="$emit('closeDelete', false)"
                    elevation="0"
                    :ripple="false"
                    class="
                        font-weight-normal
                        text-capitalize
                        btn-ls
                        bg-transparent
                        btn-outline-secondary
                        py-3
                        px-6"
                    height="43">
                    Cancel
                </v-btn>

                <v-btn
                    @click="$emit('deleteItemConfirm')"
                    elevation="0"
                    :ripple="false"
                    class="
                        font-weight-normal
                        text-capitalize
                        btn-ls btn-primary
                        bg-gradient-primary
                        py-3
                        px-6"
                    height="43">
                    OK
                </v-btn>
                <v-spacer></v-spacer>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: {
        displayFlag: {
            type: Boolean,
            default: false
        },
    },
    data() {
        return {
            toggleDisplay: false
        }
    },
    methods: {
    },
    watch: {
        displayFlag: {
            immediate: true,
            handler(val) {
                this.toggleDisplay = val;
            }
        },
        toggleDisplay: {
            immediate: true,
            handler(val) {
                if (!val) {
                    this.$emit('closeDelete', val);
                }
            }
        }
    },
}
</script>