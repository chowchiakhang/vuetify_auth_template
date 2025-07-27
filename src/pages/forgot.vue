<template>
<v-container>
      <v-row>
        <v-col
          cols="12"
          md="6"
          class="mx-auto">
          <h1>Forgot Password</h1>
          <v-alert v-if="successMessage" :text="successMessage" type="success" variant="outlined"></v-alert>
          <Error v-if="errorMessage" :error="errorMessage"></Error>
          <v-form @submit.prevent="handleSubmit">
            <v-text-field label="Email" required v-model="userData.email"></v-text-field>
            <v-btn color="primary" type="submit" class="me-4">Login</v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
</template>

<script setup>
  import { ref } from 'vue'
  import axios from 'axios'
  import Error from '../components/Error.vue'
  const userData = ref({
    email: ''
  })
  const errorMessage = ref("")
  const successMessage = ref("")
  async function handleSubmit() {
    // Handle form submission logic here
    // For example, you can call an API to reset the password
    try {
      const response = await axios.post('api/forgot', userData.value)
      console.log('Password reset link sent to:', userData.value.email, response)
      successMessage.value = 'Password reset link has been sent to your email.'
      errorMessage.value = ''
    } catch (error) {
      console.error('Error sending password reset link:', error)
      // Handle error, e.g., show a notification
      errorMessage.value = 'Failed to send password reset link. Please try again.'
      successMessage.value = ''
    }
  }
</script>