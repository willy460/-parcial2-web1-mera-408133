<template>
  <div>
    <div class="post-composer">
      <textarea v-model="nuevoPost" class="post-input" placeholder="Escribe algo..."></textarea>
      <div class="post-actions">
        <span class="attach-btn">📎 Adjuntar</span>
        <button class="share-btn" @click="compartirPost">Compartir</button>
      </div>
    </div>

    <article v-for="(post, i) in posts" :key="i" class="post">
      <div class="post-header">
        <div class="post-author-pic">👤</div>
        <div>
          <div style="font-weight: bold;">{{ post.autor }}</div>
          <div style="font-size: 12px; color: #65676b;">{{ post.fecha }}</div>
        </div>
      </div>
      <p>{{ post.texto }}</p>
      <div class="post-actions-bar">
        <a href="#" class="post-action" @click.prevent="toggleLike(i)">
          {{ post.liked ? '👍 Me gusta' : '🤍 Me gusta' }}
        </a>
      </div>
    </article>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const nuevoPost = ref('')
const posts = ref([
  { autor: 'Ignacio', fecha: '20 agosto', texto: 'El real madrid tiene que mejorar...', liked: false }
])

const compartirPost = () => {
  if (!nuevoPost.value.trim()) return alert('Escribe algo antes de compartir')
  posts.value.unshift({ autor: 'William', fecha: 'Ahora', texto: nuevoPost.value, liked: false })
  nuevoPost.value = ''
  alert('¡Post compartido exitosamente!')
}

const toggleLike = (index) => {
  posts.value[index].liked = !posts.value[index].liked
}
</script>
