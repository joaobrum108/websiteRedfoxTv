<template>
  <div v-if="dados">
    <h1>{{ dados.titulo }}</h1>
    <img :src="dados.imagem" :alt="dados.titulo" />
    <p>{{ dados.subtitulo }}</p>

    <!-- Informações adicionais -->
    <div class="info">
      <p><strong>Horários:</strong> {{ dados.dialogoHorarios }}</p>
      <p><strong>Duração:</strong> {{ dados.dialogoDuracao }}</p>
      <span class="chip">{{ dados.chip }}</span>
    </div>

    <div class="videos" v-if="dados.videos && dados.videos.length">
      <video
        v-for="(video, index) in dados.videos"
        :key="index"
        controls
        :src="video"
      />
    </div>
  </div>

  <div v-else>
    <p>Apresentador não encontrado.</p>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import apresentadores from '../data/apresentadores'

const route = useRoute()
const dados = ref(apresentadores[route.params.id] || null)


watch(() => route.params.id, (novoId) => {
  dados.value = apresentadores[novoId] || null
})
</script>

<style scoped>
div {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  color: #e70038;
  margin-bottom: 20px;
  text-align: center;
}

img {
  width: 100%;
  max-width: 400px;
  height: auto;
  display: block;
  margin: 0 auto 20px;
  border-radius: 8px;
}

p {
  line-height: 1.6;
  margin-bottom: 15px;
  text-align: center;
}

.info {
  background-color: #f5f5f5;
  padding: 15px;
  border-radius: 8px;
  margin: 20px 0;
}

.info p {
  text-align: left;
  margin-bottom: 8px;
}

.chip {
  display: inline-block;
  background-color: #e70038;
  color: white;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 0.8em;
  text-transform: capitalize;
}

.videos {
  margin-top: 30px;
}

video {
  width: 100%;
  max-width: 600px;
  margin: 10px 0;
  border-radius: 8px;
}
</style>
