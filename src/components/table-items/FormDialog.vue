<template>
    <v-dialog v-model="toggleDisplay" max-width="500px">
        <v-card class="card-shadow border-radius-xl">
            <div class="card-header-padding card-border-bottom">
                <span class="font-weight-bold text-h5 text-typo mb-0">{{ formTitle }}</span>
            </div>
            <v-card-text class="card-padding">
                <v-container class="px-0">
                    <v-row>
                        <v-col cols="6">
                            <v-text-field
                                v-model="internalForm.name"
                                hide-details
                                class="
                                    input-style
                                    font-size-input
                                    text-light-input
                                    placeholder-light
                                    input-icon"
                                dense
                                flat
                                filled
                                solo
                                height="43"
                                placeholder="Name">
                            </v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field
                                v-model="internalForm.email"
                                hide-details
                                class="
                                    input-style
                                    font-size-input
                                    text-light-input
                                    placeholder-light
                                    input-icon"
                                dense
                                flat
                                filled
                                solo
                                height="43"
                                placeholder="Email">
                            </v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field
                                v-model="internalForm.age"
                                hide-details
                                class="
                                    input-style
                                    font-size-input
                                    text-light-input
                                    placeholder-light
                                    input-icon"
                                dense
                                flat
                                filled
                                solo
                                height="43"
                                placeholder="Age">
                            </v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field
                                v-model="internalForm.salary"
                                hide-details
                                class="
                                    input-style
                                    font-size-input
                                    text-light-input
                                    placeholder-light
                                    input-icon"
                                dense
                                flat
                                filled
                                solo
                                height="43"
                                placeholder="Salary">
                            </v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>

            <v-card-actions class="card-padding d-flex justify-end">
                <v-btn
                    @click="$emit('close', false)"
                    elevation="0"
                    :ripple="false"
                    class="
                        font-weight-normal
                        text-capitalize
                        btn-ls btn-outline-secondary
                        bg-transparent
                        py-3
                        px-6"
                    height="43">
                    Cancel
                </v-btn>

                <v-btn
                    @click="$emit('save', internalForm)"
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
                    Save
                </v-btn>
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
        formTitle: {
            type: String,
            default: ''
        },
        form: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {
            toggleDisplay: false,
            internalForm: {}
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
                    this.$emit('close', false);
                }
            }
        },
        form(val) {
            this.internalForm = val;
        }
    },
}
</script>