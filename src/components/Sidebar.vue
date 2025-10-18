<template>
  <aside class="sidebar">
    <div class="profile-pic">
      <img src="../assets/perfil.jpeg" alt="">
    </div>
    <div class="profile-name">William</div>

    <ul class="sidebar-menu">
      <li @click="$router.push('/info')">Información</li>
      <li @click="$router.push('/info')">Correo</li>
      <li @click="$router.push('/info')">Teléfono</li>
      <li @click="$router.push('/info')">Intereses</li>
      <li @click="$router.push('/info')">Situación sentimental</li>
    </ul>

    <div style="margin: 20px 0;">
      <div style="color: #1877f2; font-weight: bold;">Amigos</div>
      <div class="friends-grid">
        <div class="friend-icon">👤</div>
        <div class="friend-icon">👤</div>
        <div class="friend-icon">👤</div>
      </div>
      <div style="color: #1877f2; font-size: 14px;">Ver todos</div>
    </div>
  </aside>
</template>
