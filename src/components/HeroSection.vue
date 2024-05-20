<script>
import { gsap } from '../../node_modules/gsap';
import '../main';

export default {
    data() {
        return {

        }
    },
    methods: {
        counter(el, finalNum) {
            const counterElement = document.querySelector(el);

            gsap.to(counterElement, {
                duration: 2,
                snap: { innerHTML: 1 },
                innerHTML: finalNum,
                delay: 4,
            });
        },
        heroAnimation() {
            gsap.registerEffect({
                name: "fade",
                effect: (targets, config) => {
                    return gsap.from(targets, {
                        autoAlpha: config.autoAlpha,
                        duration: config.duration,
                        x: config.x,
                        y: config.y,
                        ease: "Power4.in",
                        onComplete: config.onComplete,
                        scaleY: config.scaleY,
                        scaleX: config.scaleX,
                        scale: config.scale,
                    })
                },
                defaults: {
                    duration: 1,
                    autoAlpha: 0,
                },
                extendTimeline: true,
            })

            const tl = gsap.timeline()


            let mm = gsap.matchMedia();

            mm.add("(max-width: 768px)", () => {

                tl.fade('#subtitle', {
                    x: -100,
                })
                .fade('#title', {
                    x: -100,
                })
                .fade('#counter-1, #hero-btn-1', {
                    x: -100,
                    onComplete: this.counter(".counter-1", 10),
                })
                .fade('#counter-2, #hero-btn-2', {
                    x: -100,
                    onComplete: this.counter(".counter-2", 60),
                })
                .fade('#hero-pp', {
                    x: 50,
                    scale: 0,
                    duration: 2,
                    ease: "sine.in"
                })
            });

            mm.add("(min-width: 769px)", () => {
                tl.fade('#subtitle', {
                    x: -200,
                })
                .fade('#hero-pp', {
                    x: 150,
                    scale: 0,
                    duration: 2,
                    ease: "sine.in"
                }, .1)
                .fade('#title', {
                    x: -200,
                    })
                .fade('#counter-1, #hero-btn-1', {
                    x: -200,
                    onComplete: this.counter(".counter-1", 10),
                })
                .fade('#counter-2, #hero-btn-2', {
                    x: -200,
                    onComplete: this.counter(".counter-2", 60),
                })
            })
        }

    },
mounted() {
    this.heroAnimation()
}
}

</script>

<template>
    <section>
        <div class="background blur-effect">
            <video id="video-bg" src="../assets/img/3-d-paths-lines-1-copy_enhanced (4).webm" autoplay loop
                muted></video>
            <div class="container h-100">
                <div class="row align-items-center h-100">
                    <div class="col-lg-6 col-12 align-self-center p-0 ">
                        <div class="row align-self-end h-100">
                            <div id="subtitle" class="col-12 pe-0 m-0">
                                <h4 class="text-center text-lg-start m-0 py-4">Ciao! Mi chiamo <span>Riccardo
                                        Cocciolo</span></h4>
                            </div>
                            <div class="col-12 m-0">
                                <h1 id="title" class="text-center text-lg-start px-3 px-lg-0 m-0 py-4">SONO UN WEB DEVELOPER</h1>
                            </div>
                            <div class="col-12 justify-content-center justify-content-lg-start pe-0 ps-lg-4">
                                <div class="row justify-content-lg-start justify-content-center gap-5">
                                    <div id="counter-1" class="col-3 d-flex flex-column align-items-center p-0">
                                        <div class="d-flex align-items-center">
                                            <div class="counter counter-1"></div><span class="counter">+</span>
                                        </div>
                                        <div>
                                            <p>Tecnologie Usate</p>
                                        </div>
                                    </div>
                                    <div id="counter-2" class="col-3 d-flex flex-column align-items-center p-0">
                                        <div class="d-flex align-items-center">
                                            <div class="counter counter-2"></div><span class="counter">+</span>
                                        </div>
                                        <div>
                                            <p>Progetti Completati</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="col-12 d-flex justify-content-center justify-content-lg-start gap-5 pe-0 py-5 pb-lg-0">
                                <div id="hero-btn-1" class="gradient-button">
                                    <div class="gradient-overlay"></div>
                                    <span>Download CV</span>
                                </div>
                                <div id="hero-btn-2" class="gradient-button">
                                    <div class="gradient-overlay"></div>
                                    <span>Download CV</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-12 m-0 p-0">
                        <div class="img-container d-flex justify-content-center py-5 py-lg-0">
                            <img id="hero-pp" src="../assets/img/cp_pp-removebg_upscale_hdr (1).png" class="p-0 img-fluid"
                                alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.background {
    width: 100%;
    margin: 0px auto;
    overflow-x: hidden;
}

video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: -1;
    // filter: blur(2px);
}

.blur-effect {
    position: relative;
}

.blur-effect::before {
    content: "";
    position: absolute;
    width: 180px;
    height: 200px;
    z-index: 0;
    top: 0;
    left: 0;
    background: rgb(0, 128, 0);
    background: -o-linear-gradient(190deg, rgb(0, 128, 0) 50%, black 100%);
    background: linear-gradient(190deg, rgb(0, 128, 0) 50%, black 100%);
    -webkit-backdrop-filter: blur(120px);
    filter: blur(120px);
}

.gradient-button {
    width: 120px;
    height: 45px;
    font-size: 12px;
}

h4 {
    color: white;
    font-size: 1rem;

    span {
        color: green;
        text-shadow: 0 0 8px rgba(0, 128, 0);
    }
}

h1 {
    font-size: 2.5rem;
    font-weight: 900;
    background: -o-linear-gradient(to right, rgb(0, 128, 0) 0%, white 100%);
    background: linear-gradient(to right, rgb(0, 128, 0) 0%, white 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px black;
    padding: 0px;
    word-wrap: break-word;
}

p {
    color: rgb(255, 255, 255);
    -webkit-text-stroke: .2px black;
    font-size: 1rem;
    text-align: center;
}

.img-container {
    margin: 0;

    img {
        transform: scaleX(-1);
        display: inline-block;
        transform-origin: bottom;
        display: inline-block !important;
        width: 90%;
    }
}

.counter {
    color: white;
    font-size: 3rem;
    font-weight: 900;
}

@media screen and (min-width: 768px) {

    .blur-effect::before {
        content: "";
        position: absolute;
        width: 400px;
        height: 350px;
        z-index: 0;
        top: 0;
        left: 85%;
        margin-top: -5%;
        margin-right: -5%;
        margin-left: 0%;
        background: rgb(0, 128, 0);
        background: -o-linear-gradient(190deg, rgb(0, 128, 0) 50%, black 100%);
        background: linear-gradient(190deg, rgb(0, 128, 0) 50%, black 100%);
        -webkit-backdrop-filter: blur(120px);
        filter: blur(120px);
    }

    h1 {
        font-size: 3.5rem;
    }

    .counter {
        color: white;
        font-size: 3.5rem;
        font-weight: 900;
    }

    h4 {
        color: white;
        font-size: 1.3rem;

        span {
            color: green;
            text-shadow: 0 0 8px rgba(0, 128, 0);
        }
    }

    p {
        color: rgb(255, 255, 255);
        -webkit-text-stroke: .2px black;
        font-size: 1.2rem;
        margin: 0px;
    }

    .gradient-button {
        width: 130px;
        height: 50px;
        font-size: 16px;
    }
}

@media screen and (min-width: 1025px) {
    h1 {
        font-size: 4rem;
    }

    .counter {
        color: white;
        font-size: 4rem;
        font-weight: 900;
    }

    h4 {
        color: white;
        font-size: 1.5rem;

        span {
            color: green;
            text-shadow: 0 0 8px rgba(0, 128, 0);
        }
    }

    .gradient-button {
        width: 160px;
        height: 60px;
        font-size: 16px;
    }

    .background {
        height: calc(100vh - 100px);
    }
}

@media screen and (min-width: 1400px) {
    h1 {
        font-size: 5rem;
    }
}
</style>