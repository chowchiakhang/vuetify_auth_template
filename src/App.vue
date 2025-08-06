<template>
  <v-app>
    <Nav />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
  import { onMounted, watch } from 'vue'
  import axios from 'axios'
  import Nav from './components/Nav.vue'
  import { useUserStore } from './stores/user.js'
  import { useRouter } from 'vue-router'

  const userStore = useUserStore()
  const router = useRouter()

  async function fetchUser() {
    try {
      const response = await axios.get('users/me', {
        headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}
      })
      userStore.name = response.data.username; // Assuming the API returns the user's name
    } catch (error) {
      console.error('Error fetching user data:', error)
      console.log('Please direct the user to login.')
      const routes = ['/', '/login', '/register']
      if (error.status === 401 && (routes.find(router.currentRoute.value.path) === undefined)) {
        // Redirect to login if unauthorized
        console.log(router.currentRoute.value.path)
        router.push('/login')
      }
    }
  }
  onMounted(fetchUser)

  watch(() => router.currentRoute.value.path, () => {
  fetchUser()
})
</script>
