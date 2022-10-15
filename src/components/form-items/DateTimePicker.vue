<!-- datepickerとtimepickerコンポーネント -->
<template>
    <v-row>
        <v-col cols="12" class="py-0">
            <p class="mb-0" v-text="item.label"></p>
        </v-col>
        <v-col cols="12" md="6">
            <v-menu
                ref="dateMenu"
                v-model="dateMenu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                min-width="auto">
                <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        v-model="item.dateVal"
                        :rules="validate(item.rule)"
                        prepend-icon="mdi-calendar"
                        :required="item.rule.required"
                        v-bind="attrs"
                        v-on="on"
                        readonly>
                    </v-text-field>
                </template>
                <v-date-picker
                    v-model="item.dateVal"
                    locale="ja-JP"
                    no-title
                    @input="dateMenu = false">
                </v-date-picker>
            </v-menu>
        </v-col>
        <v-col cols="12" md="6">
            <v-menu
                ref="timeMenu"
                v-model="timeMenu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                :return-value.sync="item.timeVal"
                max-width="290px"
                min-width="290px">
                <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        v-model="item.timeVal"
                        prepend-icon="mdi-clock-time-four-outline"
                        v-bind="attrs"
                        v-on="on"
                        readonly>
                    </v-text-field>
                </template>
                <v-time-picker
                    v-model="item.timeVal"
                    :disabled="!item.dateVal"
                    full-width
                    @click:minute="$refs.timeMenu.save(item.timeVal)">
                </v-time-picker>
            </v-menu>
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
    data() {
        return {
            dateMenu: false,
            timeMenu: false,
        }
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

                return messages
            }
        },
    },
}
</script>