<script>
import HeroSection from '../components/HeroSection.vue'
import Navbar from '../components/Navbar.vue'
import ScrollTitleAnimation from '../components/ScrollTitleAnimation.vue'
import AboutSection from '../components/AboutSection.vue'
import TechSection from '../components/TechSection.vue'
import ExperienceSection from '../components/ExperienceSection.vue'
import ProjectSection from '../components/ProjectSection.vue'
import Footer from '../components/Footer.vue'

export default {
    data() {
        return {

        }
    },
    methods: {
    },
    mounted() {
    },
    components: { HeroSection, Navbar, ScrollTitleAnimation, AboutSection, TechSection, ExperienceSection, ProjectSection, Footer }
}

</script>

<template>
    <Navbar />
    <HeroSection id="hero" />
    <ScrollTitleAnimation :text="'CHI SONO ?'" :size="'17vw'" :gradient="'gradient'" :title="'about'" :overlay="'overlay-1'" />
    <AboutSection id="about-1"/>
    <ScrollTitleAnimation :text="'TECNOLOGIE'" :size="'15vw'" :gradient="'gradient-1'" :title="'tech'" :overlay="'overlay-2'" />
    <TechSection id="tech-1" />
    <ScrollTitleAnimation :text="'FORMAZIONE'" :size="'14vw'" :gradient="'gradient-2'" :title="'experience'" :overlay="'overlay-3'" />
    <ExperienceSection id="experience-1" />
    <ScrollTitleAnimation :text="'PROGETTI'" :size="'18vw'" :gradient="'gradient-3'" :title="'project'" :overlay="'overlay-4'" />
    <ProjectSection id="project-id" />
    <Footer />
</template>

<style lang="scss" scoped>

</style>