<template>
  <div class="photos-grid">
    <div class="photo-item" v-for="(foto, index) in fotos" :key="index">
      <img :src="foto" alt="Foto de publicación">
    </div>
  </div>
</template>

<script>
import images_1 from '../assets/images_1.jpeg'
import images_2 from '../assets/images_2.jpeg'
import images_3 from '../assets/images_3.jpeg'
import images_4 from '../assets/images_4.jpeg'
import images_5 from '../assets/images_5.jpeg'
import images_6 from '../assets/images_6.jpeg'
import images_7 from '../assets/images_7.jpeg'
import images_8 from '../assets/images_8.jpeg'
import images_9 from '../assets/images_9.jpeg'
import images_10 from '../assets/images_10.jpeg'
import images_11 from '../assets/images_11.jpeg'
import descarga from '../assets/descarga.jpeg'
import descarga_1 from '../assets/descarga_1.jpeg'
import descarga_2 from '../assets/descarga_2.jpeg'
import images from '../assets/images.jpeg'

export default {
  name: 'Photos',
  data() {
    return {
      fotos: [
        images, images_1, images_2, images_3, images_4, images_5,
        images_6, images_7, images_8, images_9, images_10, images_11,
        descarga, descarga_1, descarga_2
      ]
    }
  }
}
</script>

<style scoped>
.photos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 10px;
}

.photo-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.photo-item img:hover {
  transform: scale(1.05);
}
</style>
