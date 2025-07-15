<template>
  <div>This is the {{ name }} Page</div>
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import axios from 'axios'
  // axios.defaults.withCredentials = true
  const name = ref('Home')
  onMounted(async () => {
    // This is a placeholder for any setup logic you might need
    const response = await axios.get('api/user')
    name.value = response.data.name
  })
  //
</script>
