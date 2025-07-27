<template>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="6"
          class="mx-auto">
          <h1>Login</h1>
          <Error v-if="errorMessage" :error="errorMessage"/>
          <v-form @submit.prevent="handleSubmit">
            <v-text-field label="Email" required v-model="userData.email"></v-text-field>
            <v-text-field label="Password" type="password" required v-model="userData.password"></v-text-field>
            <v-btn color="primary" type="submit" class="me-4">Login</v-btn>
            <v-btn color="danger">
              <router-link to="/forgot" class="text-decoration-none">
                Forgot Password
              </router-link>
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
</template>

<script setup>
  import { ref } from 'vue'
  import axios from 'axios'
  import { useRouter } from 'vue-router'
  import { useUserStore } from '../../stores/user.js'
  import Error from '../../components/Error.vue'
  const router = useRouter()
  const userData = ref({
    email: '',
    password: ''
  })
  const errorMessage = ref("")
  const userStore = useUserStore()
  async function handleSubmit() {
    // Handle form submission logic here
    // For example, you can call an API to register the user
    try {
    const response = await axios.post(
      'api/login',
      userData.value
    )
    userStore.name = response.data.name; // Assuming the API returns the user's name
    router.push('/') // Redirect to home after login
    } catch (error) {
      console.error('Login failed:', error)
      // Handle error, e.g., show a notification
      errorMessage.value = 'Login failed. Please check your email and password.'
    }
  }
</script>
