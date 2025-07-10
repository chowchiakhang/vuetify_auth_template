<template>
    <v-navigation-drawer v-model="drawer">
    <!--  -->
    </v-navigation-drawer>

    <v-app-bar>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

    <v-app-bar-title>Application</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn
        v-for="link in links"
        :key="link"
        :text="link"
        variant="text"
        >
    </v-btn>
    </v-app-bar>
</template>

<script setup>
  import { ref } from 'vue'

  const drawer = ref(null)
  const links = ['Dashboard', 'Profile', 'Settings']
</script>