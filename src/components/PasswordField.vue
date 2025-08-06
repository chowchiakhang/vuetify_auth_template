<template>
    <v-text-field
        v-model="model"
        label="Password"
        :type="showPassword ? 'text' : 'password'"
        required
        :rules="rules"
        :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
        @click:append-inner="showPassword = !showPassword"
    ></v-text-field>

</template>

<script setup>
    import { ref, defineModel } from 'vue'
    const model = defineModel({
        default: ''
    })
    const props = defineProps({
        label: { type: String, default: 'Password' },
        rules: { type: Array, default: [] },
    })
    const showPassword = ref(false)
</script>