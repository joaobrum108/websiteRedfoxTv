<template>
  <v-container v-show="showCookieCard" class="cookie-wrapper">
    <v-card class="cookie-card">
        <v-card-title class="text-center cookie-title">
          Política de Cookies
        </v-card-title>

        <v-card-text class="text-center cookie-text">
            Utilizamos cookies para melhorar sua experiência na RedFox TV. 
            Ao aceitar, você concorda com nossa política de cookies.
        </v-card-text>

        <v-card-actions>
            <v-btn block class="btn-accept" @click="acceptCookies">
              Aceitar
            </v-btn>
        </v-card-actions>
    </v-card>
</v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Cookies from 'js-cookie'

const showCookieCard = ref(true)

onMounted(() => {
  const consent = Cookies.get('cookie_consent')
  if (consent === 'true') {
    showCookieCard.value = false
  }
})

const acceptCookies = () => {
  Cookies.set('cookie_consent', 'true', { expires: 365 })
  showCookieCard.value = false
}
</script>

<style scoped>
.cookie-wrapper {
  position: fixed;
  bottom: 0; 
  right: 0;   
  padding: 10px;
  z-index: 999;
  display: flex;    
  justify-content: flex-end; 
}


.cookie-card {
  border-radius: 14px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  padding: 18px;
  width: 100%;
  max-width: 600px; 
}

.cookie-title {
  font-weight: 700;
  font-size: 18px;
  color: #db0e35;
}

.cookie-text {
  font-size: 14px;
  color: #6b7280;
  line-height: 1.5;
}

.btn-accept {
  background-color: #db0e35 !important;
  color: #fff !important;
  font-weight: 600;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(219, 14, 53, 0.35);
  transition: transform 160ms ease, box-shadow 160ms ease;
}

.btn-accept:hover {
  transform: translateY(-1px);
}

.btn-accept:active {
  transform: translateY(0);
}

@media (max-width: 600px) {
  .cookie-card {
    padding: 12px;
  }
  .cookie-title {
    font-size: 1rem;
  }
  .cookie-text {
    font-size: 0.9rem;
  }
}
</style>
