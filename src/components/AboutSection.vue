<script>
import { gsap } from '../../node_modules/gsap';
import { ScrollTrigger } from '../../node_modules/gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
    data() {
        return {
            colors: ["green-1", "green-3", "green-5", "green-7", "green-9", "green-11"],
            tl: null,
        }
    },
    methods: {
        duplicateArray(arr, times) {
            let newArr = [];
            for (let i = 0; i < times; i++) {
                newArr = newArr.concat(arr);
            }
            return newArr;
        },
        blocksAnimation() {

            gsap.set(".block", {
                scale: .1,
                yPercent: 50,
                xPercent: 50,
            })

            const tl = gsap.timeline({
                repeat: -1,
                repeatDelay: 2,
                delay: 1,
                yoyo: true,
                scrollTrigger: {
                    trigger: ".block-container",
                    markers: true,
                    start: "top center",
                    end: "bottom center",
                }
            });

            tl.to('.block', {
                yPercent: 100,
                xPercent: 100,
                scale: 1,
                stagger: {
                    each: 0.1,
                    from: "top",
                    grid: [6, 6],
                    ease: 'power2.inOut',
                },
            });

            this.tl = tl;
        },
        handleMouseEnter() {
            this.tl.restart()
            this.tl.pause()
        },
        handleMouseLeave() {
            setTimeout(() => {
                gsap.set(".block", {
                    scale: .1,
                })
                this.tl.restart()
            }, 1000)
        },
        blocksHover(event) {
            const element = document.getElementById('block-container');

            const rect = element.getBoundingClientRect();
            const mouseX = event.clientX - rect.left;
            const mouseY = event.clientY - rect.top;

            const numCols = 6;
            const numRows = 6;
            const partWidth = rect.width / numCols;
            const partHeight = rect.height / numRows;

            const col = Math.floor(mouseX / partWidth);
            const row = Math.floor(mouseY / partHeight);

            const fromIndex = row * numCols + col;

            setTimeout(() => {

                gsap.set(".block", {
                    scale: .5,
                })
                gsap.to(".block", {
                    scale: 1,
                    duration: .5,
                    stagger: {
                        each: 0.1,
                        from: fromIndex,
                        grid: [6, 6],
                        ease: 'power2.inOut',
                    },
                })
            }, 50)
        }
    },
    computed: {
        repeatedColors() {
            return this.duplicateArray(this.colors, 6);
        }
    },
    mounted() {
        this.blocksAnimation();
        const element = document.getElementById('block-container');
        element.addEventListener('mousemove', this.blocksHover);
        element.addEventListener('mouseenter', this.handleMouseEnter);
        element.addEventListener('mouseleave', this.handleMouseLeave);
    },
    beforeDestroy() {
        const element = document.getElementById('block-container');
        element.removeEventListener('mousemove', this.blocksAnimation);
        element.removeEventListener('mouseenter', this.handleMouseEnter);
        element.removeEventListener('mouseleave', this.handleMouseLeave);
        this.tl.pause()
    },
}
</script>

<template>
    <section>
        <div class="bg-color p-4 py-5 p-lg-5">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-8 p-0">
                    <h2 class="m-0 overflow-x-visible pt-5">Chi Sono ?</h2>
                    <p class="pb-5">Sono un appassionato di sviluppo web con una solida formazione ottenuta presso
                        Boolean
                        Careers, dove
                        ho completato con successo il corso di Full Stack Web Development.
                        Durante il corso, ho lavorato su progetti diversificati, tra cui siti web dinamici, app per la
                        gestione di database e piattaforme di e-commerce. Attualmente, sto cercando opportunità
                        lavorative
                        nel campo dello sviluppo web dove posso applicare le mie competenze tecniche e contribuire a
                        progetti stimolanti. Sono motivato, creativo e desideroso di crescere professionalmente nel
                        settore
                        dello sviluppo software.</p>
                </div>
                <div class="col-12 col-lg-4 p-0">
                    <div id="block-container" class="row block-container p-0 h-100 w-100">
                        <div v-for="color in repeatedColors" class="col-2 p-1 overflow-x-hidden">
                            <div class="block" :class="color">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
    
</template>

<style lang="scss" scoped>
.bg-color {
    background-color: rgb(25, 25, 25);
}

h2 {
    font-size: 3.5rem;
    font-weight: 900;
    background: -o-linear-gradient(to right, rgb(0, 128, 0) 0%, white 80%);
    background: linear-gradient(to right, rgb(0, 128, 0) 0%, white 80%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding: 0px;
    word-wrap: break-word;
    padding-bottom: 2.5rem;
    text-align: center;
}

p {
    color: rgb(130, 130, 130);
    font-size: 1.2rem;
    text-align: center;
}

.block {
    height: 50%;
    aspect-ratio: 1/1;
    border-radius: 25%;
}

.green-1 {
    background-color: rgb(0, 255, 0);
}

.green-2 {
    background-color: rgb(0, 234, 0);
}

.green-3 {
    background-color: rgb(0, 213, 0);
}

.green-4 {
    background-color: rgb(0, 192, 0);
}

.green-5 {
    background-color: rgb(0, 171, 0);
}

.green-6 {
    background-color: rgb(0, 150, 0);
}

.green-7 {
    background-color: rgb(0, 129, 0);
}

.green-8 {
    background-color: rgb(0, 108, 0);
}

.green-9 {
    background-color: rgb(0, 87, 0);
}

.green-10 {
    background-color: rgb(0, 66, 0);
}

.green-11 {
    background-color: rgb(0, 45, 0);
}

.green-12 {
    background-color: rgb(0, 24, 0);
}

@media screen and (min-width: 992px) {
    .block {
        height: auto;
        width: 50%;
    }

    p {
        text-align: start;
        padding-right: 4rem;
    }

    h2 {
        font-size: 5rem;
        background: -o-linear-gradient(to right, rgb(0, 128, 0) 0%, white 60%);
        background: linear-gradient(to right, rgb(0, 128, 0) 0%, white 60%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        padding: 0px;
        word-wrap: break-word;
        padding-bottom: 2.5rem;
        text-align: start;
    }
}
</style>