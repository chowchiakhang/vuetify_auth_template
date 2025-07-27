<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        md="6"
        class="mx-auto"
      >
        <h1>Reset Password</h1>
        <v-form @submit.prevent="handleSubmit">

          <v-text-field
            v-model="data.password"
            label="Password"
            type="password"
            required
          ></v-text-field>

          <v-text-field
            v-model="data.confirmPassword"
            label="Confirm Password"
            type="password"
            required
          ></v-text-field>

          <v-btn
            color="primary"
            type="submit"
          >Submit
          </v-btn>

        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import { ref } from 'vue'
  import axios from 'axios'
  import { useRouter, useRoute } from 'vue-router'
  const router = useRouter()
  const route = useRoute()
  const data = ref({
    password: '',
    confirmPassword: ''
  })
  // No additional script needed for now
  async function handleSubmit() {
    // Handle form submission logic here
    // For example, you can call an API to register the user
    const response = await axios.post('api/reset', {
      password: data.value.password,
      confirmPassword: data.value.confirmPassword,
      token: route.query.token
    })
    console.log('Password reset successful:', response)
    router.push('/login') // Redirect to login after reset
  }
</script>