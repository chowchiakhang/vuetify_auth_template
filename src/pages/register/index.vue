<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Register Page</h1>
        <v-form @submit.prevent>

          <v-text-field
            v-model="data.username"
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
            @click="handleSubmit"
          >Register
          </v-btn>

        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import { ref } from 'vue'
  const data = ref({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  // No additional script needed for now
  async function handleSubmit() {
    // Handle form submission logic here
    // For example, you can call an API to register the user
    console.log('Form submitted', data.value);
  }
</script>
