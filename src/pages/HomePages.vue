<script>
import HeroSection from '../components/HeroSection.vue'
import Navbar from '../components/Navbar.vue'
import ScrollTitleAnimation from '../components/ScrollTitleAnimation.vue'
import AboutSection from '../components/AboutSection.vue'

export default {
    data() {
        return {

        }
    },
    methods: {
    },
    mounted() {
    },
    components: { HeroSection, Navbar, ScrollTitleAnimation, AboutSection }
}

</script>

<template>
    <Navbar />
    <HeroSection />
    <ScrollTitleAnimation />
    <AboutSection />
</template>

<style lang="scss" scoped>

</style>