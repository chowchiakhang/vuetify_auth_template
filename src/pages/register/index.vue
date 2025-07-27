<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        md="6"
        class="mx-auto"
      >
        <h1>Register</h1>
        <Error v-if="errorMessage" :error="errorMessage"/>
        <v-form @submit.prevent="handleSubmit">

          <v-text-field
            v-model="data.name"
            label="Username"
            required>
          </v-text-field>

          <v-text-field
            v-model="data.email"
            label="Email"
            type="email"
            required
          ></v-text-field>

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
          >Register
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
  import Error from '../../components/Error.vue'
  const router = useRouter()
  const data = ref({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const errorMessage = ref("")
  // No additional script needed for now
  async function handleSubmit() {
    // Handle form submission logic here
    // For example, you can call an API to register the user
    try {
    const response = await axios.post('api/register', data.value)
    router.push('/login')
    } catch (error) {
      console.error('Registration failed:', error)
      // Handle error, e.g., show a notification
      errorMessage.value = 'Registration failed.'
    }
  }
</script>
