<template>
  <div>
    <HeaderBar />
    <main class="main-layout">
      <Sidebar />
      <section class="content">
        <nav class="nav-tabs">
          <router-link to="/muro" class="nav-tab" active-class="active">Muro</router-link>
          <router-link to="/info" class="nav-tab" active-class="active">Info</router-link>
          <router-link to="/photos" class="nav-tab" active-class="active">Fotos</router-link>
          <router-link to="/boxes" class="nav-tab" active-class="active">Cajas</router-link>
        </nav>
        <router-view />
      </section>
    </main>
  </div>
</template>

<script setup>
import HeaderBar from './components/HeaderBar.vue'
import Sidebar from './components/Sidebar.vue'
</script>
