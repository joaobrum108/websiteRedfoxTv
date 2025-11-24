<template>
  <section
    class="patrocinadores-section text-center d-flex align-center justify-center"
    style="height: auto; min-height: 120vh;"
  >
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1 class="text-h2 mb-8 font-weight-bold">
            Nossos principais <span style="color: #db0e35;">Patrocinadores</span>
          </h1>
          <h4 class="text-h6 mb-8" style="color: #A6A6A6;">
            Empresas que acreditam na nossa visão e fortalecem o nosso compromisso <br>
            com conteúdo de qualidade
          </h4>
        </v-col>
      </v-row>

      <v-row justify="center" align="stretch">
        <v-col cols="12">
          <p class="text-h4 font-weight-bold">Parceiros <span>Oficiais</span></p>
        </v-col>

        <v-slide-group
          show-arrows
          class="pa-4 custom-slide-group"
          center-active
        >
          <v-slide-group-item
            v-for="patrocinador in lerDados"
            :key="patrocinador.id"
            v-slot="{ isSelected, toggle, selectedClass }"
          >
            <v-card
              elevation="10"
              class="patrocinador-card text-center mx-4 d-flex flex-column"
              :class="['mx-2', selectedClass]"
              @click="toggle"
              style="width: 280px; min-height: 380px;"
            >
              <div class="card-image-container">
                <img 
                  :src="patrocinador.imagem" 
                  :alt="patrocinador.titulo || 'Patrocinador'" 
                  class="card-image"
                >
                <div class="card-overlay"></div>
              </div>
              <div class="card-content pa-4 d-flex flex-column flex-grow-1">
                <v-card-title class="text-h6 font-weight-bold justify-center px-0">
                  {{ patrocinador.titulo || 'Sem título' }}
                </v-card-title>
                <div class="tipo-badge mb-3">
                  {{ patrocinador.tipo }}
                </div>
                <v-card-text class="flex-grow-1 px-0">
                  {{ patrocinador.descricao }}
                </v-card-text>
                <v-btn
                  v-if="patrocinador.link"
                  :href="patrocinador.link"
                  target="_blank"
                  class="mt-auto"
                  color="#db0e35"
                  variant="outlined"
                  size="small"
                >
                  Visitar Site
                </v-btn>
              </div>
            </v-card>
          </v-slide-group-item>
        </v-slide-group>
      </v-row>
    </v-container>
  </section>

  <section style="background-color: #171717; height: auto; min-height: 100vh;" class="d-flex align-center">
    <v-container>
      <v-row justify="center" class="text-center mb-12">
        <v-col cols="12" md="8">
          <h2 class="text-h3 text-md-h2 font-weight-bold mb-4">Por que ser um <span style="color: #db0e35;">Patrocinador?</span></h2>
          <p class="text-h6 text-md-h5" style="color: #A6A6A6; line-height: 1.6;">
            Associe sua marca a conteúdo de qualidade e <br> alcance milhares de espectadores
          </p>
        </v-col>
      </v-row>

      <v-row justify="center" class="text-center">
        <v-col cols="12" md="3">
          <div class="beneficio-item d-flex flex-column align-center justify-center">
            <div class="icon-container mb-4">
              <v-icon size="64" color="#fff" class="beneficio-icon">
                mdi-chart-line
              </v-icon>
            </div>
            <h5 class="text-h5 font-weight-bold mb-3">Visibilidade Máxima</h5>
            <p class="text-body-1" style="color: #A6A6A6; line-height: 1.6;">
              Sua marca em destaque em todos os nossos canais e plataformas digitais
            </p>
          </div>
        </v-col>
        <v-col cols="12" md="3" >
          <div class="beneficio-item d-flex flex-column align-center justify-center">
            <div class="icon-container mb-4">
              <v-icon size="64" color="#fff" class="beneficio-icon">
                mdi-target-account
              </v-icon>
            </div>
            <h5 class="text-h5 font-weight-bold mb-3">Público Qualificado</h5>
            <p class="text-body-1" style="color: #A6A6A6; line-height: 1.6;">
              Alcance um público engajado e interessado em conteúdo de alta qualidade
            </p>
            </div>
        </v-col>

        <v-col cols="12" md="3">
          <div class="beneficio-item d-flex flex-column align-center justify-center">
            <div class="icon-container mb-4">
              <v-icon size="64" color="#fff" class="beneficio-icon">
                mdi-handshake
              </v-icon>
            </div>
            <h5 class="text-h5 font-weight-bold mb-3">Parceria Estratégica</h5>
            <p class="text-body-1" style="color: #A6A6A6; line-height: 1.6;">
              Desenvolvemos soluções personalizadas para atender seus objetivos específicos
            </p>
          </div>
        </v-col>
      </v-row>

      <v-row justify="center" class="text-center">
        <v-col cols="12" md="3" >
          <div class="beneficio-item d-flex flex-column align-center justify-center">
            <div class="icon-container mb-4">
              <v-icon size="64" color="#fff" class="beneficio-icon">
                mdi-trophy
              </v-icon>
            </div>
            <h5 class="text-h5 font-weight-bold mb-3">Credibilidade</h5>
            <p class="text-body-1" style="color: #A6A6A6; line-height: 1.6;">
              Associe sua marca a um conteúdo reconhecido e respeitado no mercado
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>

  <section style="min-height: 70vh; display: flex; align-items: center; justify-content: center;" class="py-12">
    <v-container style="background: linear-gradient(to right, #380f17, #221013); height: auto; max-width: 70%; border: 1px solid #4e0c19; border-radius: 16px; padding: 3rem 2rem;">
      <v-row align="center" justify="center" class="text-center">
        <v-col cols="12" class="pb-8">
          <h1 class="text-h3 text-md-h2 font-weight-bold">Seja um <span style="color: #db0e35;">Patrocinador</span></h1>
        </v-col>
        
        <v-col cols="12" class="pb-8">
          <p class="text-h6 text-md-h5" style="color: #999899; line-height: 1.6;">
            Faça parte da família RedFox Tv e potencialize <br> o alcance da sua marca
          </p>
        </v-col>

        <v-col cols="12" class="pt-4">
          <v-btn 
            @click="handleContato"
            size="x-large" 
            color="#db0e35" 
            dark 
            class="font-weight-bold"
            style="letter-spacing: 1px;"
          >
            Entre em Contato
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import patrocinadores from '../data/patrocinadores';

const lerDados = patrocinadores.patrocinadores.patrocinadores;

const handleContato = () => {
  window.open("https://api.whatsapp.com/send?phone=5511915765111" , "_blank");
}
</script>

<style scoped>
.patrocinador-card {
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  margin-bottom: 2rem;
  cursor: pointer;
  border: 1px solid #404040;
  overflow: hidden;
  background: linear-gradient(145deg, #1a1a1a, #2a2a2a);
}

.patrocinador-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 28px rgba(219, 14, 53, 0.2);
  border: 1px solid #db0e35;
  cursor: pointer;
}

.card-image-container {
  position: relative;
  overflow: hidden;
  height: 180px;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%);
  opacity: 0.3;
  transition: opacity 0.3s ease;
}

.patrocinador-card:hover .card-image {
  transform: scale(1.05);
}

.patrocinador-card:hover .card-overlay {
  opacity: 0.5;
}

.card-content {
  z-index: 2;
  position: relative;
}

.tipo-badge {
  display: inline-block;
  background: linear-gradient(135deg, #db0e35, #ff3366);
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.custom-slide-group {
  padding: 2rem 0;
}

.custom-slide-group :deep(.v-slide-group__next),
.custom-slide-group :deep(.v-slide-group__prev) {
  background-color: rgba(219, 14, 53, 0.8);
  border-radius: 50%;
  width: 48px;
  height: 48px;
}

.custom-slide-group :deep(.v-slide-group__next:hover),
.custom-slide-group :deep(.v-slide-group__prev:hover) {
  background-color: #db0e35;
  transform: scale(1.1);
}

.beneficio-item {
  padding: 2rem 1rem;
  height: 100%;
  transition: transform 0.3s ease;
}

.beneficio-item:hover {
  transform: translateY(-5px);
}

.icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #db0e35, #ff3366);
  border-radius: 50%;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(219, 14, 53, 0.3);
}

.beneficio-icon {
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

.icon-container:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(219, 14, 53, 0.4);
}

.beneficio-item h5 {
  color: #ffffff;
  font-size: 1.25rem;
}

.beneficio-item p {
  max-width: 280px;
  margin: 0 auto;
}

.cta-section {
  background: linear-gradient(135deg, #380f17 0%, #221013 100%);
  border: 1px solid #4e0c19;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(219, 14, 53, 0.15);
}


.patrocinador-card {
  animation: fadeInUp 0.6s ease forwards;
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


@media (max-width: 960px) {
  .patrocinador-card {
    width: 240px !important;
    min-height: 360px !important;
  }
  
  .card-image-container {
    height: 150px;
  }
}

@media (max-width: 600px) {
  .patrocinador-card {
    width: 280px !important;
    min-height: 380px !important;
  }
  
  .custom-slide-group :deep(.v-slide-group__next),
  .custom-slide-group :deep(.v-slide-group__prev) {
    display: none;
  }
}
</style>