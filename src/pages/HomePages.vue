<script>
import HeroSection from '../components/HeroSection.vue'
import Navbar from '../components/Navbar.vue'
import ScrollTitleAnimation from '../components/ScrollTitleAnimation.vue'
import AboutSection from '../components/AboutSection.vue'
import TechSection from '../components/TechSection.vue'
import ExperienceSection from '../components/ExperienceSection.vue'

export default {
    data() {
        return {

        }
    },
    methods: {
    },
    mounted() {
    },
    components: { HeroSection, Navbar, ScrollTitleAnimation, AboutSection, TechSection, ExperienceSection }
}

</script>

<template>
    <Navbar />
    <HeroSection />
    <ScrollTitleAnimation :text="'CHI SONO ?'" :size="'17vw'" :gradient="'gradient'" :title="'about'" :overlay="'overlay-1'" />
    <AboutSection />
    <ScrollTitleAnimation :text="'TECNOLOGIE'" :size="'15vw'" :gradient="'gradient-1'" :title="'tech'" :overlay="'overlay-2'" />
    <TechSection />
    <ScrollTitleAnimation :text="'FORMAZIONE'" :size="'14vw'" :gradient="'gradient-2'" :title="'experience'" :overlay="'overlay-3'" />
    <ExperienceSection />
</template>

<style lang="scss" scoped>

</style>