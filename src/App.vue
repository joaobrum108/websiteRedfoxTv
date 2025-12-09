<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Cookies from './stores/cookies.vue';
</script>

<template>
<v-app>
    <Header />
    <router-view />
    <Cookies />
    <Footer />
</v-app>
</template>

<style scoped>

</style>
