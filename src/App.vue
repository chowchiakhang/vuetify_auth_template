<template>
  <v-app>
    <Nav />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import axios from 'axios'
  import Nav from './components/Nav.vue'
  import { useUserStore } from './stores/user.js'
  const userStore = useUserStore()
  onMounted(async () => {
    try {
      const response = await axios.get('api/user')
      userStore.name = response.data.name; // Assuming the API returns the user's name
    } catch (error) {
      console.error('Error fetching user data:', error)
      console.log('Please direct the user to login.')
    }
  })
</script>
