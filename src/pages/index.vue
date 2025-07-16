<template>
  <div v-if="userStore.name !== null">Welcome, {{ userStore.name }}.</div>
  <div v-else>This is the home page.</div>
</template>

<script setup>
  import { useUserStore } from '../stores/user.js'
  const userStore = useUserStore()
</script>
