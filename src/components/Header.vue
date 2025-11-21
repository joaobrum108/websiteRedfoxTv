<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const windowWidth = ref(window.innerWidth);
const isMobile = ref(window.innerWidth < 1024);
const mobileMenuOpen = ref(false);

function handleResize() {
  windowWidth.value = window.innerWidth;
  isMobile.value = window.innerWidth < 1024;
}

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value;
}

function closeMobileMenu() {
  mobileMenuOpen.value = false;
}

function handleClickOutside(event) {
  const menu = document.querySelector('.mobile-menu');
  const button = document.querySelector('.menu-toggle');
  
  if (menu && button && !menu.contains(event.target) && !button.contains(event.target)) {
    closeMobileMenu();
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize);
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
  document.removeEventListener('click', handleClickOutside);
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
      
      <v-col cols="12" md="9" lg="10" class="menu-container">
        <v-row class="menu-center d-flex align-center justify-center">
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
          <router-link to="/patrocinadores" class="nav-link">
            <p class="menu-item">Patrocinadores</p>
          </router-link>
        </v-row>
      </v-col>
      
    </v-container>
  </header>

  <header v-else class="header mobile-header">
    <v-container class="d-flex align-center justify-space-between mobile-container">
      <div class="d-flex align-center">
        <button 
          class="menu-toggle"
          @click="toggleMobileMenu"
          :class="{ 'active': mobileMenuOpen }"
          aria-label="Abrir menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <router-link to="/" @click="closeMobileMenu">
          <img src="../assets/redfoxtv.png" class="logo-mobile" alt="Red Fox TV">
        </router-link>
      </div>
      
      <v-btn
        class="watch-btn-mobile"
        href="https://www.youtube.com/@redfoxtvoficial"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>Assista Agora</p>
      </v-btn>
    </v-container>

    <div class="mobile-menu" :class="{ 'active': mobileMenuOpen }">
      <div class="mobile-menu-content">
        <div class="menu-header">
          <h3>Menu</h3>
        </div>
        
        <nav class="mobile-nav">
          <RouterLink to="/" class="mobile-nav-link" @click="closeMobileMenu">
            <span class="mobile-nav-icon">🏠</span>
            <span>Home</span>
          </RouterLink>
          
          <RouterLink to="/canal/RedfoxConecta" class="mobile-nav-link" @click="closeMobileMenu">
            <span class="mobile-nav-icon">📡</span>
            <span>RedFox Conecta</span>
          </RouterLink>
          
          <RouterLink to="/canal/redfoxSport" class="mobile-nav-link" @click="closeMobileMenu">
            <span class="mobile-nav-icon">⚽</span>
            <span>RedFox Sports</span>
          </RouterLink>
          
          <RouterLink to="/canal/redfoxPets" class="mobile-nav-link" @click="closeMobileMenu">
            <span class="mobile-nav-icon">🐾</span>
            <span>RedFox Pets</span>
          </RouterLink>
          
          <router-link to="/canal/redfoxJornalismo" class="mobile-nav-link" @click="closeMobileMenu">
            <span class="mobile-nav-icon">📰</span>
            <span>Jornalismo 360</span>
          </router-link>
          
          <router-link to="/patrocinadores" class="mobile-nav-link" @click="closeMobileMenu">
            <span class="mobile-nav-icon">🤝</span>
            <span>Patrocinadores</span>
          </router-link>
        </nav>
        
        <div class="menu-footer">
          <div class="social-links">
            <a href="#" class="social-link" aria-label="Instagram">
              <span>📷</span>
            </a>
            <a href="#" class="social-link" aria-label="Facebook">
              <span>👍</span>
            </a>
            <a href="#" class="social-link" aria-label="Twitter">
              <span>🐦</span>
            </a>
          </div>
        </div>
      </div>
     
      <div class="menu-overlay" @click="closeMobileMenu"></div>
    </div>
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
  margin-left: 12px;
}

.menu-container {
  display: flex;
  justify-content: center;
  align-items: center;
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
  padding: 10px 16px;
  position: relative;
  font-size: 0.85rem;
  text-decoration: none !important;
  border: none;
  background: transparent;
  overflow: hidden;
  border-radius: 8px;
  white-space: nowrap;
}

.menu-item::after {
  content: '';
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: #ff4444;
  transition: width 0.3s ease;
}

@media (hover: hover) and (pointer: fine) {
  .menu-item:hover {
    color: #ff4444;
    transform: translateY(-2px);
    text-shadow: 0 0 10px rgba(255, 68, 68, 0.6);
    background: rgba(255, 68, 68, 0.1);
  }
  
  .menu-item:hover::after {
    width: 60%;
  }
}

.watch-btn {
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

.watch-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 68, 68, 0.3);
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

.menu-toggle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
  position: relative;
}

.menu-toggle span {
  display: block;
  width: 22px;
  height: 2px;
  background-color: white;
  margin: 2px 0;
  transition: all 0.3s ease;
  transform-origin: center;
}

.menu-toggle.active span:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
}

.menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

.menu-toggle.active span:nth-child(3) {
  transform: translateY(-6px) rotate(-45deg);
}

.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
  visibility: hidden;
  pointer-events: none;
}

.mobile-menu.active {
  visibility: visible;
  pointer-events: all;
}

.mobile-menu-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 80%;
  max-width: 300px;
  height: 100%;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  padding: 20px;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  z-index: 1002;
  overflow-y: auto;
}

.mobile-menu.active .mobile-menu-content {
  transform: translateX(0);
}

.menu-header {
  padding: 20px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 20px;
}

.menu-header h3 {
  color: white;
  margin: 0;
  font-size: 1.2rem;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  padding: 15px 0;
  color: white;
  text-decoration: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  font-weight: 500;
}

.mobile-nav-link:active,
.mobile-nav-link.router-link-active {
  color: #ff4444;
}

.mobile-nav-icon {
  margin-right: 12px;
  font-size: 1.2rem;
  width: 24px;
  text-align: center;
}

.menu-footer {
  margin-top: auto;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.social-link:active {
  background: rgba(255, 68, 68, 0.3);
  transform: scale(0.95);
}

.menu-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1001;
}

.mobile-menu.active .menu-overlay {
  opacity: 1;
}

@media (max-width: 1200px) {
  .menu-center {
    gap: 1rem;
  }
  
  .menu-item {
    font-size: 0.8rem;
    padding: 8px 12px;
  }
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
  
  .mobile-menu-content {
    width: 85%;
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
  
  .mobile-menu-content {
    width: 90%;
    padding: 15px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .header,
  .menu-item,
  .watch-btn,
  .watch-btn-mobile,
  .mobile-menu-content,
  .menu-toggle span,
  .menu-overlay {
    transition: none;
  }
}
</style>