<template>
  <header class="header">
    <div class="logo">Facebook</div>
    <input type="text" class="search-bar" placeholder="Buscar" v-model="search" @keyup.enter="buscar" />
  </header>
</template>

<script setup>
import { ref } from 'vue'
const search = ref('')
const buscar = () => {
  if (search.value.trim()) {
    alert(`Buscando: "${search.value}"`)
    search.value = ''
  }
}
</script>
