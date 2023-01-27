<template>
    Child: {{ input }}
    <input
            type="text"
            v-model="input"
            @input="$emit('update:modelValue', $event.target.value)"
    />
</template>

<script>
    import {ref} from "@vue/reactivity";

    export default {
        name: "SampleForm",
        setup() {
            const input = ref("");
            return { input };
        },
    }
</script>

<style scoped>

</style>