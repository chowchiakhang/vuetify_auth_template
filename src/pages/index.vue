<template>
  <div v-if="user">Welcome, {{ user }}.</div>
  <div v-else>This is the home page.</div>
</template>

<script setup>
  const props = defineProps({
    user: {
      type: String
    }
  })
</script>
