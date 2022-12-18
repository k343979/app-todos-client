<template>
    <div>
        <h5 class="font-weight-bold text-h5 text-typo mb-0">
            {{ title }}
        </h5>
        <p class="text-sm text-body font-weight-light mb-0">
            {{ description }}
        </p>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        description: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
        }
    },
}
</script>