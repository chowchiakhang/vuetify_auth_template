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
        <v-form @submit.prevent="handleSubmit" ref="form">

          <v-text-field
            v-model="data.username"
            label="Username"
            required
            :rules="[value => !!value || 'Username is required']"
          ></v-text-field>

          <v-text-field
            v-model="data.email"
            label="Email"
            type="email"
            required
            :rules="[
              value => !!value || 'Email is required',
              value => /.+@.+\..+/.test(value) || 'Email must be valid'
            ]"
          ></v-text-field>

          <PasswordField
            v-model="data.password"
            label="'Password'"
            :rules="passwordRules"
          >
          </PasswordField>

          <PasswordField
            v-model="data.confirmPassword"
            label="'Confirm Password'"
            :rules="confirmPasswordRules"
          >
          </PasswordField>

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
  import { ref, watch } from 'vue'
  import axios from 'axios'
  import { useRouter } from 'vue-router'
  import Error from '../../components/Error.vue'
  const router = useRouter()
  const data = ref({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const errorMessage = ref("")
  const form = ref()
  const passwordRules = [
    value => !!value || 'Password is required',
    value => value.length >= 8 || 'Password must be at least 8 characters long',
    value => /[A-Z]/.test(value) || 'Password must contain at least one uppercase letter',
    value => /[a-z]/.test(value) || 'Password must contain at least one lowercase letter',
    value => /[0-9]/.test(value) || 'Password must contain at least one number',
    value => /[^A-Za-z0-9]/.test(value) || 'Password must contain at least one symbol'
  ]
  const confirmPasswordRules = [
    value => !!value || 'Confirm Password is required',
    value => value === data.value.password || 'Passwords must match'
  ]
  // No additional script needed for now
  async function handleSubmit() {
    const { valid } = await form.value.validate()
    if (!valid) {
      return
    }
    try {
      errorMessage.value = ""
      const response = await axios.post('auth/register', data.value)
      router.push('/login')
    } catch (error) {
      console.error('Registration failed:', error)
      // Handle error, e.g., show a notification
      errorMessage.value = 'Registration failed.'
    }
  }
</script>
