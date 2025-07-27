<template>
<v-container>
      <v-row>
        <v-col
          cols="12"
          md="6"
          class="mx-auto">
          <h1>Forgot Password</h1>
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
  const userData = ref({
    email: ''
  })
  async function handleSubmit() {
    // Handle form submission logic here
    // For example, you can call an API to reset the password
    
    const response = await axios.post('api/forgot', userData.value)
    console.log('Password reset link sent to:', userData.value.email, response)
  }
</script>