<script>
import { gsap } from '../../node_modules/gsap';
import { ScrollTrigger } from '../../node_modules/gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
    data() {
        return {
            showText1: true
        }
    },
    mounted() {
        this.initAnimation();
        this.breckText();
        this.titleAnimation();
    },
    methods: {
        breckText() {
            let splittedText = document.getElementById('title-experience').textContent.split("");

            let clutter = ""

            splittedText.forEach(function (elem) {
                clutter += `<span class="d-inline-block overflow-y-hidden" style="min-width: 1vw;">${elem}</span>`
            });

            document.getElementById('title-experience').innerHTML = clutter;

        },
        titleAnimation() {
            const random = gsap.utils.random(-100, 100, true);

            gsap.from('#title-experience span', {
                x: "random(-150, 150, 5)",
                y: "random(-150, 150, 5)",
                duration: 2,
                autoAlpha: 0,
                rotation: random,
                delay: 0,
                ease: 'power3.out',
                stagger: .1,
                scrollTrigger: {
                    trigger: "#title-experience",
                    start: 'center center',
                }
            })
        },
        initAnimation() {
            const textIn = document.querySelectorAll('.firsts');
            const text2 = document.querySelectorAll('.second');

            gsap.set(textIn, { autoAlpha: 0, x: -100 });
            gsap.set(text2, { autoAlpha: 0, display: 'none' });

            gsap.to(textIn, {
                autoAlpha: 1,
                duration: 1,
                x: 0,
                scrollTrigger: {
                    trigger: textIn,
                    start: 'start center',
                },
            })
        },
        switchAnimation() {

            const text1 = document.querySelectorAll('.first');
            const text2 = document.querySelectorAll('.second');

            if (this.showText1) {
                gsap.to(text1, {
                    autoAlpha: 0,
                    x: 50,
                    duration: 0.5,
                    onComplete: () => {
                        gsap.set(text1, { display: 'none', x: 0 });
                        gsap.set(text2, { display: 'block', autoAlpha: 0, x: -50, });
                        gsap.to(text2, { autoAlpha: 1, duration: 1, x: 0 });
                    }
                });
                this.showText1 = !this.showText1;
            } else {
                gsap.to(text2, {
                    autoAlpha: 0,
                    x: 50,
                    duration: 0.5,
                    onComplete: () => {
                        gsap.set(text2, { display: 'none', x: 0 });
                        gsap.set(text1, { display: 'block', autoAlpha: 0, x: -50, });
                        gsap.to(text1, { autoAlpha: 1, duration: 1, x: 0, });
                    }
                });
                this.showText1 = !this.showText1;
            }
        }
    }
}
</script>

<template>
    <div class="container">
        <h2 class="d-none d-lg-block" id="title-experience">FORMAZIONE ED ESPERIENZE</h2>
        <h2 class="d-lg-none">FORMAZIONE ED ESPERIENZE</h2>
        <div class="row justify-content-center align-items-stretch pb-5">
            <div class="col-12 col-md-9 col-lg-6 pb-5 pb-lg-0">
                <div class="info-container h-100 position-relative">
                    <i @click="switchAnimation()"
                        class="fa-solid fa-chevron-right fa-fade position-absolute top-50 translate-middle"></i>
                    <div class="row">
                        <div>
                            <h3 class="p-0 overflow-y-hidden text-center">Formazione</h3>
                        </div>
                        <div class="row text-white">
                            <div class="col-12 pt-4">
                                <div>
                                    <span class="first firsts">Boolean</span>
                                    <span class="second">Liceo Scientifico “Pietro e Paolo Vianeo”</span>
                                </div>
                            </div>
                            <div class="col-6 pt-4">
                                <span class="firsts">Titolo di Studio</span>
                            </div>
                            <div class="col-6 pt-4">
                                <span class="first firsts">Corso Privato</span>
                                <span class="second">Diploma di Liceo Scientifico</span>
                            </div>
                            <div class="col-6 pt-4">
                                <span class="firsts">Periodo</span>
                            </div>
                            <div class="col-6 pt-4">
                                <span class="first firsts">Set 2023 - Mar 2024</span>
                                <span class="second">2017 - 2022</span>
                            </div>
                            <div class="col-12 pt-4">
                                <p class="first firsts text-center text-lg-start">
                                    Corso intensivo di 700 ore durante le quali ho acquisito competenze approfondite in
                                    linguaggi di programmazione web, framework e metodologie di sviluppo software.
                                    Ho lavorato su progetti pratici che mi hanno permesso di sviluppare applicazioni web
                                    funzionali e reattive.
                                </p>
                                <p class="second">Votazione: 95</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-9 col-lg-6">
                <div class="info-container h-100">
                    <div class="row">
                        <div>
                            <h3 class="p-0 overflow-y-hidden text-center">Esperienze</h3>
                        </div>
                        <div>
                            <div class="row text-white">
                                <div class="col-12 pt-4">
                                    <div>
                                        <span class="firsts">Boolean</span>
                                    </div>
                                </div>
                                <div class="col-6 pt-4">
                                    <span class="firsts">Posizione</span>
                                </div>
                                <div class="col-6 pt-4">
                                    <span class="firsts">Jr Full Stack Web Developer Trainee</span>
                                </div>
                                <div class="col-6 pt-4">
                                    <span class="firsts">Periodo</span>
                                </div>
                                <div class="col-6 pt-4">
                                    <span class="firsts">Set 2023 - Mar 2024</span>
                                </div>
                                <div class="col-12 pt-4">
                                    <p class="firsts text-center text-lg-start">
                                        - Durante il corso ho lavorato su un progetto di sviluppo di una web app che
                                        permette di trovare e gestire l’affitto di appartamenti.
                                        <br>
                                        - Sono stato responsabile della gestione dei dati, delle operazioni CRUD e della
                                        visualizzazione degli appartamenti nel database utilizzando framework come
                                        Vue.js per il frontend e Laravel per il backend.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
h2 {
    font-size: 2.5rem;
    font-weight: 900;
    background: -o-linear-gradient(to right, rgb(0, 128, 0) 0%, white 100%);
    background: linear-gradient(to right, rgb(0, 128, 0) 0%, white 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding: 0px;
    word-wrap: break-word;
    padding-bottom: 4rem;
    text-align: center;
    overflow-y: hidden;
}

h3 {
    color: green;
    font-size: 1.7rem;
}

i {
    right: 10px;
    font-size: 30px;
}

.info-container {
    padding: 2rem;
    border-radius: 50px;
    position: relative;
    overflow: hidden;
    background-color: rgb(25, 25, 25);
    border: solid 3px rgb(25, 25, 25);

    &:hover {
        background-color: black;
        border: solid 3px green;
        transition: all 1s ease;
    }

    i {
        color: green;
    }
}

@media screen and (min-width: 768px) {
    h2 {
        font-size: 4rem;
        padding-bottom: 6rem;
    }

    h3 {
        font-size: 2rem;
    }
}

@media screen and (min-width: 992px) {
    h2 {
    font-size: 4rem;
    font-weight: 900;
    background: -o-linear-gradient(to right, rgb(0, 128, 0) 0%, white 90%);
    background: linear-gradient(to right, rgb(0, 128, 0) 0%, white 90%);
    color: green;
    background-clip: text;
    -webkit-text-fill-color: inherit;
    -webkit-background-clip: text;
    padding: 0px;
    word-wrap: break-word;
    padding-bottom: 4rem;
    text-align: center;
    overflow-y: hidden;
}
}
</style>