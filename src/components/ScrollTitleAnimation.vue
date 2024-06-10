<script>
import { gsap } from '../../node_modules/gsap';
import { ScrollTrigger } from '../../node_modules/gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
    props: {
        text: String,
        size: String,
        overlay: String,
        title: String,
        gradient: String,
    },
    data() {
        return {

        }
    },
    methods: {
        animateTextToCenter(overlay, title) {
            const container = document.getElementById(overlay);
            const text = document.getElementById(title);
            const textL = document.getElementById(`${title}s`);

            const containerRect = container.getBoundingClientRect();
            const textRect = text.getBoundingClientRect();
            const centerX = (containerRect.width - textRect.width) / 2;
            const centerY = (containerRect.height - textRect.height) / 2;

            console.log(centerX, centerY)

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    start: 'center center',
                    scrub: 1,
                    end: '+=2500',
                    pin: true,
                    toggleActions: 'play pause resume reset',
                }
            })

            let mm = gsap.matchMedia();

            mm.add("(max-width: 767px)", () => {
                tl.scrollTrigger.end = '+=1000';
                tl.fromTo(text, {
                    xPercent: -100,
                },
                {
                    xPercent: 100,
                })
            })

            mm.add("(min-width: 768px)", () => {
                tl.scrollTrigger.end = '+=2500';
                tl.fromTo(textL, {
                    xPercent: -100,
                },
                {
                    xPercent: 100,
                })
            })
        },
    },
    mounted() {
        this.animateTextToCenter(this.overlay, this.title)
    },
}
</script>

<template>
    <div :id="overlay" class="overlay-animation">
        <div class="d-flex w-100">
            <svg class="d-md-none" :id="title" width="100%" height="135">
                <defs>
                    <linearGradient :id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style="stop-color:rgb(0,128,0);stop-opacity:1" />
                        <stop offset="100%" style="stop-color:white;stop-opacity:1" />
                    </linearGradient>
                </defs>
                <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" :font-size="size"
                    font-weight="1000" fill="none" :stroke="`url(#${gradient})`" stroke-width="3">
                    {{text}}
                </text>
            </svg>
            <svg class="d-none d-md-block" :id="`${title}s`" width="100%" height="500">
                <defs>
                    <linearGradient :id="`${gradient}s`" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style="stop-color:rgb(0,128,0);stop-opacity:1" />
                        <stop offset="100%" style="stop-color:white;stop-opacity:1" />
                    </linearGradient>
                </defs>
                <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" :font-size="size"
                    font-weight="1000" fill="none" :stroke="`url(#${gradient}s)`" stroke-width="5">
                    {{text}}
                </text>
            </svg>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.overlay-animation {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
}

text {
    word-wrap: break-word;
}
</style>