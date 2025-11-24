<template>
  <v-main style="position: relative;">
 
    <section class="home-section">
      <v-container class="d-flex align-center justify-center" style="height: 100%;">
        <v-row class="d-flex align-center justify-center" style="height: 100%;">
          <v-col cols="12" md="8" class="text-white text-center">
            <v-row class="d-flex flex-column align-center justify-center">
              <v-col cols="12">
                <h1 class="text-lg-h2 text-h3 text-md-h2 font-weight-black">
                  Bem-vindo à <span style="color: #e70038;">RedFox TV</span>
                </h1>
              </v-col>
              <v-col cols="12" md="8">
                <p class="text-body-1 text-md-h5" style="color: #F5F5F5;">
                  Sua plataforma de entretenimento com programação diversificada e conteúdo de qualidade. 
                  Descubra nossos canais e encontre o que mais combina com você.
                </p>
              </v-col>
              <v-col cols="12">
                <v-row class="d-flex justify-center" dense>
                  <v-col cols="auto">
                    <v-btn @click="handleCanais" class="btn1" color="#e70038" style="text-transform: capitalize;" size="large">
                      BAIXE NOSSOS APLICATIVOS
                    </v-btn>
                  </v-col>
                  <v-col cols="auto">
                    <v-btn @click="handleYT" class="btn2" outlined style="text-transform: capitalize;" size="large">
                      Assista Agora
                    </v-btn>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="home-section-2">
      <v-container>
        <v-row>
          <v-col cols="12" class="text-center">
            <h2 class="text-lg-h2 text-h3 text-md-h2" style="font-weight: 600;">
              Nossos <span style="color: #e70038;">Canais</span>
            </h2>
            <br>
            <p class="text-body-1 text-md-h5">
              Conteúdo diversificado para todos os gostos. Escolha seu favorito e <br> aproveite!
            </p>
          </v-col>
        </v-row>

        <v-row class="d-flex justify-center" dense>
          <v-col
            v-for="canal in canais"
            :key="canal.id"
            cols="12"
            sm="10"
            md="6"
            lg="4"
            xl="3"
            class="d-flex justify-center"
          >
            <v-card
              class="apresentador-card d-flex flex-column"
              style="border: #222222 1px solid; border-radius: 16px; width: 100%; max-width: 390px; min-height: 374px;"
              outlined
            >
              <div class="flex-grow-1">
                <div class="card-image-container">
                  <v-img
                    :src="canal.imagem"
                    class="card-image"
                    aspect-ratio="1"
                    cover
                  >
                    <v-container class="card-overlay" align="end">
                      <v-chip
                        variant="elevated"
                        :color="canal.corChip || '#e70038'"
                        text-color="white"
                        style="text-transform: capitalize; font-weight: bold;"
                        small
                      >
                        {{ canal.chip }}
                      </v-chip>
                    </v-container>
                  </v-img>
                  <div class="card-hover-overlay">
                    <v-icon size="48" color="white">mdi-play-circle-outline</v-icon>
                    <p class="hover-text">Ver Canal</p>
                  </div>
                </div>

                <v-card-title
                  style="font-weight: bold; white-space: pre-wrap;"
                  class="justify-center text-h5 text-left px-4 pt-4"
                >
                  {{ canal.titulo }}
                </v-card-title>

                <v-card-subtitle
                  class="text-left card-subtitle px-4"
                  style="white-space: pre-line; line-height: 1.3;"
                >
                  {{ canal.subtitulo }}
                </v-card-subtitle>
              </div>

              <v-card-actions class="justify-center pa-4 mt-auto">
                <v-btn
                  class="btn-apresentador"
                  :to="`/canal/${canal.id}`"
                  color="#e70038"
                  style="text-transform: capitalize; border: #e70038 1px solid; width: 100%;"
                  size="large"
                >
                  Saiba Mais
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </v-main>
</template>


<script setup>
import programasDoCanal from '../data/canais'

const canais = Object.values(programasDoCanal.canais)

const handleCanais = () => {
  window.open('https://linktr.ee/redfoxtv', '_blank')
}

const handleYT = () => {
  window.open('https://www.youtube.com/@redfoxtvoficial', '_blank')
}
</script>

<style scoped>

.btn1 {
  box-shadow: red 0px 4px 20px -5px;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn1:hover {
  transform: translateY(-2px);
  box-shadow: red 0px 8px 25px -5px;
}

.btn2 {
  border-radius: 8px;
  font-weight: 500;
  box-shadow: black 0px 4px 20px -5px;
  border: solid red 1px;
  background-color: #000 !important;
  color: red !important;
  transition: all 0.3s ease;
}

.btn2:hover {
  transform: translateY(-2px);
  box-shadow: black 0px 8px 25px -5px;
  background-color: rgba(231, 0, 56, 0.1) !important;
}

.apresentador-card {
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
  background: #1a1a1a !important;
  position: relative;


}

.apresentador-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(231, 0, 56, 0.2);
  border-color: rgba(231, 0, 56, 0.3) !important;
}

.card-image-container {
  position: relative;
  overflow: hidden;
}

.card-image {
  position: relative;
  transition: all 0.5s ease;
}

.card-image::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(18, 18, 18, 0.7), transparent);
  z-index: 1;
  transition: all 0.4s ease;
}

.apresentador-card:hover .card-image::before {
  background: linear-gradient(rgba(231, 0, 56, 0.2), rgba(18, 18, 18, 0.8));
}

.apresentador-card:hover .card-image {
  transform: scale(1.05);
}

.card-overlay {
  position: relative;
  z-index: 2;
}

.card-hover-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(36, 36, 36, 0.199);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.4s ease;
  z-index: 3;
}

.apresentador-card:hover .card-hover-overlay {
  opacity: 1;
}

.hover-text {
  color: white;
  font-weight: bold;
  margin-top: 8px;
  font-size: 1.1rem;
}

.btn-apresentador {
  border-radius: 8px;
  font-weight: 500;
  background-color: transparent !important;
  color: #e70038 !important;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.btn-apresentador::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(231, 0, 56, 0.2), transparent);
  transition: left 0.5s;
}

.btn-apresentador:hover::before {
  left: 100%;
}

.btn-apresentador:hover {
  background-color: #e70038 !important;
  color: white !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(231, 0, 56, 0.4);
}

.apresentador-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #e70038, transparent);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.apresentador-card:hover::after {
  opacity: 1;
}

.home-section-2 {
  background-color: #121212;
  padding: 24px 0;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.v-main {
  min-height: 100vh;
}

.home-section {
  position: relative;
  background-image:
  linear-gradient(to top, #121212, transparent),
  url('https://preview--redfox-vibrant-hub.lovable.app/assets/hero-redfox-IlkklpQx.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  padding: 24px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.text-white h1 {
  margin-bottom: 24px;
}

.text-white p {
  margin-bottom: 32px;
  line-height: 1.6;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.v-col {
  animation: fadeInUp 0.6s ease forwards;
}

.v-col:nth-child(1) { animation-delay: 0.1s; }
.v-col:nth-child(2) { animation-delay: 0.2s; }
.v-col:nth-child(3) { animation-delay: 0.3s; }
.v-col:nth-child(4) { animation-delay: 0.4s; }
</style>