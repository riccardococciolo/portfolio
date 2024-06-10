<script>
import ProjectCard from './ProjectCard.vue';
import { gsap } from '../../node_modules/gsap';
import { ScrollTrigger } from '../../node_modules/gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
    data() {
        return {
            projects: [
                { title: "DC COMICS", img: "../assets/img/comics_site.png", stack: [{ name: "HTML", icon: "../assets/img/html.png" }, { name: "SASS", icon: "../assets/img/sass.png" }, { name: "VUE", icon: "../assets/img/vue.png" }, { name: "JAVA SCRIPT", icon: "../assets/img/javascript.png" }], description: "Sito rappresentante un home page a tema Comics realizzato con Vue.js.", },
                { title: "CAROSELLO", img: "../assets/img/carousel_site.png", stack: [{ name: "HTML", icon: "../assets/img/html.png" }, { name: "JAVA SCRIPT", icon: "../assets/img/javascript.png" }, { name: "CSS", icon: "../assets/img/css.png" }], description: "Questo sito presenta un carosello di immagini con animazioni fluide, sviluppato con HTML, CSS, e JavaScript.", },
                { title: "PORTO", img: "../assets/img/social_site.png", stack: [{ name: "HTML", icon: "../assets/img/html.png" }, { name: "SASS", icon: "../assets/img/sass.png" }, { name: "VUE", icon: "../assets/img/vue.png" }, { name: "JAVA SCRIPT", icon: "../assets/img/javascript.png" }], description: "Porto é una piattaforma social realizzata con Vue.js. Presenta diverse card rappresentanti i post con elementi decorativi interni", },
                { title: "YU-GI-OH", img: "../assets/img/yu-gi-oh.png", stack: [{ name: "HTML", icon: "../assets/img/html.png" }, { name: "JAVA SCRIPT", icon: "../assets/img/javascript.png" }, { name: "CSS", icon: "../assets/img/css.png" }], description: "Questo sito presenta delle carte di YU-GI-OH ottenute tramite una chiamata AJAX utilizzando Axios e visualizzate in pagina tramite un ciclo for, sviluppato con HTML, CSS, e JavaScript. ", },
                { title: "BOOLZAPP", img: "../assets/img/whats_site.png", stack: [{ name: "HTML", icon: "../assets/img/html.png" }, { name: "JAVA SCRIPT", icon: "../assets/img/javascript.png" }, { name: "CSS", icon: "../assets/img/css.png" }], description: "Boolzapp é una piattaforma di messaggistica full responsive realizzata con HTML, CSS e JavaScript. Permette l'invio e l'eliminazione di messaggi tra diversi utenti con una risposta automatica gestita con JavaScript.", },
                { title: "BOOLBNB", img: "../assets/img/boolbnb_site.png", stack: [{ name: "HTML", icon: "../assets/img/html.png" }, { name: "SASS", icon: "../assets/img/sass.png" }, { name: "VUE", icon: "../assets/img/vue.png" }, { name: "JAVA SCRIPT", icon: "../assets/img/javascript.png" }, { name: "LARAVEL", icon: "../assets/img/laravel.png" }], description: "BoolBnB è una piattaforma di prenotazione viaggi realizzata con Vue.js per il frontend e Laravel per il backend. Offre una ricerca avanzata e filtri personalizzabili, permettendo agli utenti di trovare e inserire alloggi facilmente. Il design responsive e le ottimizzazioni delle performance come il lazy loading garantiscono un'esperienza utente fluida e sicura.", },
            ]
        }
    },
    methods: {
        projectAnimation() {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#project-container",
                    start: 'center center',
                    scrub: 1,
                    end: '+=2500',
                    pin: true,
                }
            })

            let mm = gsap.matchMedia();

            mm.add("(max-width: 768px)", () => {
                tl.to("#project-0", {
                yPercent: -220,
                scale: 0.55,
                ease: "linear",
            })

            tl.to("#project-1", {
                yPercent: -200,
                scale: 0.60,
                ease: "linear",
                zIndex: 14,
            })

            tl.to("#project-2", {
                yPercent: -180,
                scale: 0.65,
                ease: "linear",
                zIndex: 15,
            })

            tl.to("#project-3", {
                yPercent: -160,
                scale: 0.7,
                ease: "linear",
                zIndex: 20,
            })

            tl.to("#project-4", {
                yPercent: -140,
                scale: 0.75,
                ease: "linear",
                zIndex: 25,
            })

            tl.to("#project-5", {
                yPercent: -120,
                scale: 0.8,
                ease: "linear",
                zIndex: 30,
            })
            })

            mm.add("(min-width: 769px)", () => {
                tl.to("#project-0", {
                yPercent: -260,
                scale: 0.65,
                ease: "linear",
            })

            tl.to("#project-1", {
                yPercent: -240,
                scale: 0.7,
                ease: "linear",
                zIndex: 14,
            })

            tl.to("#project-2", {
                yPercent: -220,
                scale: 0.75,
                ease: "linear",
                zIndex: 15,
            })

            tl.to("#project-3", {
                yPercent: -200,
                scale: 0.8,
                ease: "linear",
                zIndex: 20,
            })

            tl.to("#project-4", {
                yPercent: -180,
                scale: 0.85,
                ease: "linear",
                zIndex: 25,
            })

            tl.to("#project-5", {
                yPercent: -160,
                scale: 0.9,
                ease: "linear",
                zIndex: 30,
            })
            })
            
        }
    },
    mounted() {
        this.projectAnimation()
    },
    components: { ProjectCard }
}
</script>

<template>
    <div class="container">
        <div id="project-container">
            <div class="project-container">
                <ProjectCard v-for="(project, index) in projects" :key="index" :id="`project-${5 - index}`"
                    :project="project" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.project-container {
    position: relative;
    width: 100%;
    height: 1000px;
}

#project-container {
    height: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
}

h2 {
    font-size: 3rem;
    font-weight: 900;
    background: -o-linear-gradient(to right, rgb(0, 128, 0) 0%, white 90%);
    background: linear-gradient(to right, rgb(0, 128, 0) 0%, white 90%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding: 0px;
    word-wrap: break-word;
    overflow-y: hidden;
    text-align: center;
}

@media screen and (min-width: 768px) {
    .project-container {
    position: relative;
    width: 100%;
    height: 1000px;
}

#project-container {
    height: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
}
}

@media screen and (min-width: 992px) {
    .project-container {
        position: relative;
        width: 70vw;
        height: 1400px;
    }

    #project-container {
        height: 1400px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>