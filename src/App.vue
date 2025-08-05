<template>
  <v-app>
    <Nav />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
  import { onMounted } from 'vue'
  import axios from 'axios'
  import Nav from './components/Nav.vue'
  import { useUserStore } from './stores/user.js'
  import { useRouter } from 'vue-router'

  const userStore = useUserStore()
  const router = useRouter()
  onMounted(async () => {
    try {
      const response = await axios.get('users/me')
      userStore.name = response.data.name; // Assuming the API returns the user's name
    } catch (error) {
      console.error('Error fetching user data:', error)
      console.log('Please direct the user to login.')
      if (error.status === 401 && (router.currentRoute.value.path !== '/login' || router.currentRoute.value.path !== '/register')) {
        // Redirect to login if unauthorized
        router.push('/login')
      }
    }
  })
</script>
