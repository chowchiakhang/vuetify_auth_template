<template>
    <v-navigation-drawer v-model="drawer">
    <!--  -->
    </v-navigation-drawer>

    <v-app-bar>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

    <v-app-bar-title>
        <router-link to="/"
            class="text-decoration-none"
        >
            Home
        </router-link>
    </v-app-bar-title>

    <v-spacer></v-spacer>

     <v-btn v-if="userStore.name === null">
        <router-link
            to="/login"
            class="text-decoration-none"
        >
            Login
        </router-link>
     </v-btn>
     <v-btn v-if="userStore.name === null">
        <router-link
            to="/register"
            class="text-decoration-none"
        >
            Sign up
        </router-link>
     </v-btn>
     <v-btn v-if="userStore.name !== null" @click="handleClick">
            Logout
     </v-btn>
    </v-app-bar>
</template>

<script setup>
  import { ref } from 'vue'
  import axios from 'axios'
  import { useRouter } from 'vue-router'
  import { useUserStore } from '../stores/user.js'
  const userStore = useUserStore()

  const router = useRouter()
  const drawer = ref(null)
//   const router = useRouter()
  async function handleClick() {
    // Handle logout logic here
    // For example, you can call an API to log out the user
    // await axios.post('api/logout')
    // Redirect to home after logout
    userStore.name = null;
    localStorage.removeItem('token') // Clear the token from local storage
    router.push('/')
  }
</script>