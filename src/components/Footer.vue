<template>
    <v-container fluid class="footer-container">
        <v-row align="center" justify="center" class="footer-content">
            <v-col cols="12" class="text-center">
                <p class="copyright-text">&copy; {{ new Date().getFullYear() }} RedFox TV. Todos os direitos reservados.</p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup></script>

<style scoped>
.footer-container {
    text-align: center !important;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #151515;
    padding: 24px 0;
    border: solid #212121 3px;
    border-right: none;
    border-bottom: none;
    border-left: none;
    min-height: 80px;
}

.footer-content {
    width: 100%;
}

.copyright-text {
    color: #737373;
    font-size: 1rem;
    margin: 0;
    line-height: 1.4;
}


@media (max-width: 768px) {
    .footer-container {
        padding: 32px 16px;
        min-height: 100px;
    }
    
    .copyright-text {
        font-size: 1.1rem;
        line-height: 1.5;
    }
}

@media (max-width: 480px) {
    .footer-container {
        padding: 36px 12px;
        min-height: 120px;
    }
    
    .copyright-text {
        font-size: 1.05rem;
        line-height: 1.6;
    }
}

@media (max-width: 360px) {
    .footer-container {
        padding: 40px 8px;
        min-height: 140px;
    }
    
    .copyright-text {
        font-size: 1rem;
        line-height: 1.7;
    }
}
</style>