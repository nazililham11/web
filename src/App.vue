<template>
    <div class="flex flex-col h-screen">
        <Header/>
        <Portofolio/>
        <Footer/>
    </div>
</template>

<script>

import Portofolio from '@/view/Portofolio.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'App',
    components: {
        Portofolio, 
        Header,
        Footer
    }
}
</script>

