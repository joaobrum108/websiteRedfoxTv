<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const windowWidth = ref(window.innerWidth);
const isMobile = ref(window.innerWidth < 1024); 

function handleResize() {
  windowWidth.value = window.innerWidth;
  isMobile.value = window.innerWidth < 1024;
}

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<template>

  <header v-if="!isMobile" class="header desktop-header">
    <v-container max-width="1357" class="d-flex align-center justify-space-between header-container">
      <v-col cols="auto" md="auto" sm="auto">
        <router-link to="/">
          <img src="../assets/redfoxtv.png" class="logo-img" alt="Red Fox TV">
        </router-link>
      </v-col>
      
      <v-col cols="auto" md="8" lg="8" class="menu">
        <RouterLink to="/" class="nav-link">
          <p class="menu-item">Home</p>
        </RouterLink>
        <RouterLink to="/canal/RedfoxConecta" class="nav-link">
          <p class="menu-item">RedFox Conecta</p>
        </RouterLink>
        <RouterLink to="/canal/redfoxSport" class="nav-link">
          <p class="menu-item">RedFox Sports</p>
        </RouterLink>
        <RouterLink to="/canal/redfoxPets" class="nav-link">
          <p class="menu-item">RedFox Pets</p>
        </RouterLink>
        <router-link to="/canal/redfoxJornalismo" class="nav-link">
          <p class="menu-item">Jornalismo 360</p>
        </router-link>
      </v-col>
    </v-container>
  </header>

  <header v-else class="header mobile-header">
    <v-container class="d-flex align-center justify-space-between mobile-container">
      <router-link to="/">
        <img src="../assets/redfoxtv.png" class="logo-mobile" alt="Red Fox TV">
      </router-link>
      
      <v-btn
        class="watch-btn-mobile"
        href="https://www.youtube.com/@redfoxtvoficial"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>Assista Agora</p>
      </v-btn>
    </v-container>
  </header>
</template>

<style scoped>

.header {
  background-color: rgba(0, 0, 0, 0.1); 
  backdrop-filter: blur(10px); 
  -webkit-backdrop-filter: blur(10px); 
  border-bottom: solid rgba(33, 33, 33, 0.5) 1px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 12vh;
  min-height: 60px;
  max-height: 80px;
  transition: all 0.3s ease;
}


.desktop-header .header-container {
  height: 100%;
  padding: 0 16px;
}


.mobile-header .mobile-container {
  height: 100%;
  padding: 0 16px;
}

.logo-img {
  max-width: 160px !important;
  height: auto;
  object-fit: contain;
}

.logo-mobile {
  width: auto;
  max-width: 130px;
  height: auto;
}


.menu {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  text-decoration: none !important;
}

.menu-item {
  margin: 0;
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  padding: 12px 20px;
  position: relative;
  font-size: 1rem;
  text-decoration: none !important;
  border: none;
  background: transparent;
  overflow: hidden;
  border-radius: 8px;
}

@media (hover: hover) and (pointer: fine) {
  .menu-item:hover {
    color: #ff4444;
    transform: translateY(-3px) scale(1.05);
    text-shadow: 0 0 15px rgba(255, 68, 68, 0.6);
    background: rgba(255, 68, 68, 0.1);
  }
  
  .menu-item:hover::after {
    width: 80%;
  }
}


.watch-btn-mobile {
  background: linear-gradient(135deg, #ff4444, #cc0000);
  color: white;
  padding: 10px 18px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.4s ease;
  margin: 0;
  text-decoration: none;
  border: none;
  font-size: 0.9rem;
  white-space: nowrap;
}


@media (max-width: 1023px) {

  .header {
    height: 10vh;
    min-height: 50px;
    max-height: 70px;
  }
  
  .logo-mobile {
    max-width: 110px;
  }
  
  .watch-btn-mobile {
    padding: 8px 16px;
    font-size: 0.85rem;
  }
}

@media (max-width: 768px) {

  .header {
    height: 9vh;
    min-height: 45px;
    max-height: 60px;
  }
  
  .logo-mobile {
    max-width: 100px;
  }
  
  .watch-btn-mobile {
    padding: 6px 14px;
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  
  .header {
    height: 8vh;
    min-height: 40px;
  }
  
  .logo-mobile {
    max-width: 90px;
  }
  
  .mobile-container {
    padding: 0 12px !important;
  }
}


@media (prefers-reduced-motion: reduce) {
  .header,
  .menu-item,
  .watch-btn-mobile {
    transition: none;
  }
}
</style>