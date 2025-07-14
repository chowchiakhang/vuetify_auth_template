<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        md="6"
        class="mx-auto"
      >
        <h1>Register</h1>
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
  const data = ref({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  // No additional script needed for now
  async function handleSubmit(e) {
    // Handle form submission logic here
    // For example, you can call an API to register the user
    console.log('Form submitted', data.value);
    const response = await axios.post('api/register', data.value);
    if (response.status === 200) {  
      console.log('Registration successful');
      // Redirect or show success message
    } else {
      console.error('Registration failed', response.data);
      // Handle error
    }
  }
</script>
