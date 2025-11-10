<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isDesktop = ref(window.innerWidth > 768);
const isMobile = ref(window.innerWidth <= 768);

function handleResize() {
  isMobile.value = window.innerWidth <= 768;
  isDesktop.value = window.innerWidth > 768;
}

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});


</script>

<template>
  <header v-if="isDesktop" class="header">
    <v-container max-width="1357" class="d-flex align-center justify-space-between header-container">
     <router-link to="/">
       <img src="../assets/redfoxtv.png" class="logo-img" alt=""></img>
     </router-link>
      
      <v-col cols="auto" class="menu">
        <RouterLink to="/" class="nav-link">
          <p class="menu-item">Home</p>
        </RouterLink>
        <RouterLink to="/canal/RedfoxConecta" class="nav-link">
          <p class="menu-item">Redfox Conecta</p>
        </RouterLink>
        <RouterLink to="/canal/redfoxSport" class="nav-link">
          <p class="menu-item"> Redfox Sport</p>
        </RouterLink>
        <router-link to="/canal/redfoxJornalismo" class="nav-link"><p class="menu-item">Redfox Jornalismo</p></router-link>
        <RouterLink to="/canal/redfoxPets" class="nav-link">
          <p class="menu-item">Redfox Pets</p>
        </RouterLink>
      </v-col>
      <v-col cols="auto">
        <a href="https://www.youtube.com/@redfoxtvoficial" class="watch-link" target="_blank" rel="noopener noreferrer">
           <p class="watch-btn">Assista Agora</p>
        </a>
      </v-col>
    </v-container>
  </header>

 <header class="header-mobile" v-if="isMobile">
  <v-container class="d-flex align-center justify-space-between" style="height: 100%;">
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

.header-container {
  height: 100%;
  padding: 0 16px;
}

.header-mobile {
  background-color: rgba(0, 0, 0, 0.1) !important;
  backdrop-filter: blur(10px) !important;
  -webkit-backdrop-filter: blur(10px) !important;
  border-bottom: solid rgba(33, 33, 33, 0.5) 1px !important;
  position: relative ;

  height: 12vh !important;
  min-height: 60px !important;
  max-height: 80px !important;
}


.logo-mobile {
  width: auto;
  max-width: 130px;
  height: auto;
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
  display: inline-block;
  border: none;
  font-size: 0.9rem;
  white-space: nowrap;
}

.logo-img {
  max-width: 160px !important;
  height: auto;
  object-fit: contain;
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


.menu-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.6s ease;
}

.menu-item:hover::before {
  left: 100%;
}

.menu-item:hover {
  color: #ff4444;
  transform: translateY(-3px) scale(1.05);
  text-shadow: 0 0 15px rgba(255, 68, 68, 0.6);
  background: rgba(255, 68, 68, 0.1);
  box-shadow: 
    0 5px 15px rgba(255, 68, 68, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.menu-item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #ff4444, #ff6b6b);
  transition: all 0.4s ease;
  transform: translateX(-50%);
}

.menu-item:hover::after {
  width: 80%;
}


.watch-btn {
  background: linear-gradient(135deg, #ff4444, #cc0000);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  margin: 0;
  text-decoration: none;
  display: inline-block;
  border: none;
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.watch-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.6s ease;
}

.watch-btn:hover::before {
  left: 100%;
}

.watch-btn:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 
    0 8px 25px rgba(255, 68, 68, 0.4),
    0 0 0 2px rgba(255, 68, 68, 0.2);
  background: linear-gradient(135deg, #ff6b6b, #ff4444);
}


@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 5px rgba(255, 68, 68, 0.4);
  }
  50% {
    box-shadow: 0 0 15px rgba(255, 68, 68, 0.8);
  }
}

.watch-btn {
  animation: pulse-glow 3s infinite;
}

@media (max-width: 768px) {
  .header {
    height: 10vh;
    min-height: 50px;
  }
  
  .logo-img {
    max-width: 50px !important;
  }
  
  .menu {
    gap: 1rem;
  }
  
  .menu-item {
    padding: 8px 12px;
    font-size: 0.9rem;
  }
  
  .watch-btn {
    padding: 10px 18px;
    font-size: 0.9rem;
  }
}
</style>