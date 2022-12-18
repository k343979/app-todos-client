<template>
    <v-container fluid class="py-6">
        <v-row>
            <!-- 小サイドメニュー -->
            <v-col lg="3">
                <v-card class="card-shadow border-radius-xl position-sticky top-1">
                    <div class="px-4 pt-3 pb-0">
                        <v-list>
                            <v-list-item-group class="border-radius-sm">
                                <v-list-item class="px-3 py-1 border-radius-lg mb-2"
                                    v-for="item in menu"
                                    :key="item.icon">
                                    <v-icon size="18"
                                        class="material-icons-round me-2 text-dark">
                                        {{ item.icon }}
                                    </v-icon>
                                    <v-list-item-content class="py-0">
                                        <a :href="'#'+item.id" class="text-decoration-none">
                                            <div class="d-flex flex-column">
                                                <span class="text-dark text-sm">{{ item.text }}</span>
                                            </div>
                                        </a>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </div>
                </v-card>
            </v-col>
            <!-- 設定メニュー一覧 -->
            <v-col lg="9">
                <notifications></notifications>
                <div class="mt-6">
                    <devices></devices>
                </div>
                <div class="mt-6">
                    <delete-account></delete-account>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Notifications from '../../components/settings/Notifications.vue'
import Devices from '../../components/settings/Devices.vue'
import DeleteAccount from '../../components/settings/DeleteAccount.vue'
export default {
    name: "applications",
    components: {
        Notifications,
        Devices,
        DeleteAccount
    },
    data() {
        return {
            menu: [
                {
                    id: "notifications",
                    icon: "campaign",
                    text: "Notifications",
                },
                {
                    id: "devices",
                    icon: "settings_applications",
                    text: "Devices",
                },
                {
                    id: "delete-account",
                    icon: "delete",
                    text: "Delete Account",
                },
            ],
        };
    },
};
</script>