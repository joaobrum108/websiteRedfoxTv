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
                    <v-btn class="btn1" color="#e70038" style="text-transform: capitalize;" size="large">
                      Conheça Nossos Canais
                    </v-btn>
                  </v-col>
                  
                  <v-col cols="auto">
                    <v-btn class="btn2" outlined style="text-transform: capitalize;" size="large">
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
      <v-container >
        <v-row>
          <v-col cols="12" class="text-center">
            <h2  class="text-lg-h2 text-h3 text-md-h2 " style="font-weight: 600;">Nossos <span style="color: #e70038;">Canais</span></h2>
            <br>
            <p class="text-body-1 text-md-h5">
              Conteúdo diversificado para todos os gostos. Escolha seu favorito e 
              <br> 
              aproveite!
            </p>
          </v-col>
        </v-row>
        
        <v-row dense class="d-flex align-center justify-center pt-8">

          <v-col
            v-for="apresentador in apresentadores"
            :key="apresentador.id"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card class="mx-auto" max-width="429" outlined>
              <v-img
                height="458"
                :src="apresentador.imagem"
                cover
                class="card-image"
              >
                <v-container class="card-overlay">
                  <v-chip 
                    :color="apresentador.corChip || '#e70038'" 
                    text-color="white" 
                    style="text-transform: capitalize;" 
                    small
                  >
                    {{ apresentador.chip }}
                  </v-chip>
                </v-container>
              </v-img>
              
              <v-card-title class="justify-center text-center">
                {{ apresentador.titulo }}
              </v-card-title>
              
              <v-card-subtitle class="text-center">
                {{ apresentador.subtitulo }}
              </v-card-subtitle>
              
              <v-card-actions class="justify-center">
                <v-btn 
                  :to="`/apresentador/${apresentador.id}`" 
                  color="#e70038" 
                  style="text-transform: capitalize;"
                >
                  Assistir Agora
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
import apresentadores from '../data/apresentadores'
</script>

<style scoped>
.home-section-2 {
  background-color: #121212;
  padding: 24px 0;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  
}

.btn2 {
  border-radius: 8px;
  font-weight: 500;
  box-shadow: black 0px 4px 20px -5px;
  border: solid red 1px;
  background-color: #000 !important;
  color: red !important;
}

.btn1 {
  box-shadow: red 0px 4px 20px -5px;
  border-radius: 8px;
  font-weight: 500;
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
</style>