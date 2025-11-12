<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import apresentadores from '../data/apresentadores'
import { usePodcastStore } from '../stores/api'
import { storeToRefs } from 'pinia'

const podcastStore = usePodcastStore()
const { episodes } = storeToRefs(podcastStore)
const loading = ref(false)
const route = useRoute()
const dados = ref(
  Object.values(apresentadores.canais).find(item => item.id === route.params.id) || null
)



const loadEpisodes = async (playlistId) => {
  loading.value = true
  try {
    const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY
    const urlBase = import.meta.env.VITE_YOUTUBE_URL_PLAYLIST
    const maxResults = import.meta.env.VITE_MAX_RESULTS

    const response = await fetch(
      `${urlBase}?key=${apiKey}&playlistId=${playlistId}&part=snippet&maxResults=${maxResults}`
    )
    const data = await response.json()

    if (!data.items || data.items.length === 0) {
      throw new Error('Nenhum episódio encontrado')
    }

    podcastStore.episodes = data.items.map(item => ({
      id: item.snippet.resourceId.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails?.medium?.url || '',
    }))
  } catch (e) {
    console.log(e, 'erro na API de playlist')
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  if (dados.value?.playlistId) {
    await loadEpisodes(dados.value.playlistId)
  }
})

watch(() => route.params.id, async (novoId, antigoId) => {
  if (novoId === antigoId) return

  dados.value = Object.values(apresentadores.canais).find(item => item.id === novoId) || null

  if (dados.value?.playlistId) {
    await loadEpisodes(dados.value.playlistId)
  }
})
</script>

<template>
  <div v-if="dados && Object.keys(dados).length">
    <section style="min-height: 90vh;">
      <v-container
        fluid
        style="height: auto; width: 100%; min-height: 90vh;  display: flex; align-items: center; justify-content: center;"
      >
        <v-row
          class="line"
          dense
          style="max-width: 1350px; display: flex; align-items: center; justify-content: center"
        >
          <v-col cols="12" md="5" lg="5" class="coluna-imagem order-md-2 order-1">
            <div class="imagem-container">
              <img :src="dados.imagem || '/default.jpg'" :alt="dados.titulo" class="imagem" />
            </div>
          </v-col>

          <v-col cols="12" md="7" lg="7" class="coluna-conteudo order-md-1 order-2">
            <v-row class="mb-4">
              <v-col cols="12">
                <v-chip color="#e70038" variant="elevated">
                  {{ dados.chip }}
                </v-chip>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12">
                <h1 class="text-left text-h2 titulo-principal">
                  {{ dados.titulo }}
                </h1>
                <h3 class="text-left subtitulo">
                  {{ dados.subtitulo }}
                </h3>
              </v-col>
            </v-row>

            <v-row class="mt-4" justify="start">
              <v-col cols="auto">
                <v-sheet elevation="10" class="pa-4 card-item">
                  <v-icon color="red">mdi-clock-outline</v-icon>
                  <p class="text-subtitle-1 font-weight-medium text-left">Horários</p>
                  <h3 class="text-left">{{ dados.dialogoHorarios }}</h3>
                </v-sheet>
              </v-col>

            </v-row>

            <v-row class="mt-4">
              <v-col cols="auto">
                <v-btn
                  class="btn1"
                  color="primary"
                  variant="elevated"
                  :href="`https://linktr.ee/redfoxtv`"
                  target="_blank"
                >
                  Explorar mais
                </v-btn>
              </v-col>
              <v-col cols="auto">
                <v-btn
                  class="btn2"
                  color="secondary"
                  variant="outlined"
                  :href="`https://www.youtube.com/playlist?list=${dados.playlistId}`"
                  target="_blank"
                >
                  Ver Episódios
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </section>


      <section v-if="dados.id !== 'redfoxJornalismo'" >
        <v-container
          fluid
          style="max-width: 1350px; min-height: 70vh; text-align: center;"
        >
          <v-col>
            <h1 class="text-h4 mb-8">Nossos Principais Convidados</h1>

            <v-row v-if="dados?.fotosConvidados">
              <v-col
                v-for="(foto, index) in dados.fotosConvidados"
                :key="index"
                cols="12"
                sm="6"
                md="4"
              >
                <v-img
                  style="border-radius: 50px;"
                  :src="foto"
                  :alt="`Convidado ${index + 1}`"
                  max-width="300"
                  max-height="400"
                  class="mx-auto"
                />
              </v-col>
            </v-row>

            <div v-else>
              <p>Nenhuma imagem de convidado disponível.</p>
            </div>
          </v-col>
        </v-container>
      </section>


    <section>
      <v-container
        fluid
        style="max-width: 1350px; height: auto; width: 100%; min-height: 60vh; display: flex; align-items: center; justify-content: center;"
      >
        <v-col>
          <v-col>
            <h1 class="text-left text-h3 text-md-h3 titulo-principal">
              Destaques Recentes
            </h1>
            <div v-if="loading">Carregando...</div>
          </v-col>
          <v-row>
            <v-col cols="12" md="4" lg="4" v-for="episode in episodes" :key="episode.id">
              <v-card style="border-radius: 16px;" class="mx-auto" max-width="400">
                <v-img :src="episode.thumbnail" :alt="episode.title" />
                <v-card-title>
                  {{ episode.title }}
                </v-card-title>
                <v-card-actions class="d-flex align-center justify-center">
                  <v-btn
                    class="btn1"
                    width="600"
                    color="primary"
                    variant="elevated"
                    :href="`https://www.youtube.com/watch?v=${episode.id}`"
                    target="_blank"
                  >
                    Assistir
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-container>
    </section>

    
  </div>

  <div v-else>
    <p>Apresentador não encontrado</p>
  </div>
</template>



<style scoped>
.coluna-conteudo {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.coluna-imagem {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
}

.imagem-container {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}

.imagem {
  width: 100%;
  max-width: 450px;
  height: auto;
  border-radius: 32px;
  /* box-shadow: red 0px 4px 60px -2px; */
}

.titulo-principal {
  color: #fff;
  margin-bottom: 1rem;
  font-weight: bold;
  text-align: left !important;
}

.subtitulo {
  color: #999999;
  text-align: left !important;
}

.card-item {
  width: 100%; 
  max-width: 234px;
  height: auto;
  min-height: 100px;
  max-height: 140px;
  border-radius: 20px;
  height: 200px;
}

.card-item2{
  width: 100%; 
  min-width: 150px;
  max-width: 254px;
  height: auto;
  min-height: 100px;
  max-height: 120px;
  border-radius: 20px;
  height: 200px;
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


@media (max-width: 960px) {
  .coluna-imagem {
    justify-content: center;
    order: 1; 
  }
  
  .coluna-conteudo {
    order: 2; 
  }
  
  .imagem-container {
    justify-content: center;
  }
  
  .imagem {
    max-width: 400px; 
  }
}

.btn1{
  border: solid red 1px;
  border-radius: 8px;
  box-shadow: red 0px 4px 25px -5px;
  background-color: #e70038 !important;
  color: #fff !important;
}
.btn1:hover{
  background-color: #fff !important;
  color: #e70038 !important;

}
.btn2{
  border: solid red 1px;
  border-radius: 8px;
  box-shadow: red 0px 4px 25px -5px;
  background-color: #fff !important;
  color: #e70038 !important;
}
.btn2:hover{
  background-color: #e70038 !important;
  color: #fff !important;
}
</style>