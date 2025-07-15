<template>
  <v-app>
    <Nav :user="user"/>
    <v-main>
      <router-view :user="user"/>
    </v-main>
  </v-app>
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import axios from 'axios'
  import Nav from './components/Nav.vue'
  const user = ref('')
  onMounted(async () => {
    // This is a placeholder for any setup logic you might need
    const response = await axios.get('api/user')
    user.value = response.data.name
  })
</script>
