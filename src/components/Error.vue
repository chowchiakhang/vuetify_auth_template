<template>
  <v-alert :text="error" type="error" variant="outlined"></v-alert>

</template>

<script setup>
  const props = defineProps({
    error: {
      type: String,
      default: ''
    }
  })
</script>