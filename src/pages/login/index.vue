<template>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="6"
          class="mx-auto">
          <h1>Login</h1>
          <v-form>
            <v-text-field label="Username" required></v-text-field>
            <v-text-field label="Password" type="password" required></v-text-field>
            <v-btn color="primary" type="submit">Login</v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
</template>

<script setup>
  //
</script>
