<script>
import { gsap } from 'gsap';
import { ScrollToPlugin } from '../../node_modules/gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin);

export default {
    data() {
        return {
            links: [{ name: "Chi Sono", id: "#about-1" }, { name: "Tecnologie", id: "#tech-1" }, { name: "Formazione ed Esperienza", id: "#experience-1" }, { name: "Progetti", id: "#project-id" }],
            sidebarOpen: false,
            navbarHidden: false,
        };
    },
    methods: {
        getImgPath(img) {
            return new URL(`${img}`, import.meta.url).href
        },
        navAnimation() {
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
                        stagger: config.stagger,
                    });
                },
                defaults: {
                    duration: 1,
                    autoAlpha: 0,
                },
                extendTimeline: true,
            });

            const tl = gsap.timeline();

            let mm = gsap.matchMedia();

            mm.add("(max-width: 768px)", () => {

                tl.fade(".sidebar", {
                    x: "-100%",
                    duration: 1,
                })
                tl.fade("ul li:first-child", {
                    x: -100,
                    duration: .7,
                })
                    .fade("ul li:nth-child(2)", {
                        x: -100,
                        duration: .7,
                    })
                    .fade("ul li:nth-child(3)", {
                        x: -100,
                        duration: .7,
                    })
                    .fade("ul li:nth-child(4)", {
                        x: -100,
                        duration: .7,
                    });
            })

            mm.add("(min-width: 769px)", () => {
                tl.fade("ul li:first-child", {
                    x: -100,
                    duration: 1.3,
                })
                    .fade("ul li:nth-child(2)", {
                        x: -100,
                        duration: 1.3,
                    })
                    .fade("ul li:nth-child(3)", {
                        x: -100,
                        duration: 1.3,
                    })
                    .fade("ul li:nth-child(4)", {
                        x: -100,
                        duration: 1.3,
                    });
            })
        },
        setNav() {
            gsap.set("#nav-2", {
                yPercent: -100,
            })
        },
        toggleSidebar() {
            this.sidebarOpen = !this.sidebarOpen;

            if (this.sidebarOpen) {
                setTimeout(() => {
                    this.navAnimation();
                }, 1)
            }
        },
        closeSidebar() {
            this.sidebarOpen = false;
        },
        checkNavbarVisibility() {
            const rect = this.$refs.navbar.getBoundingClientRect();
            const isVisible = rect.bottom >= 0;

            if (!isVisible && !this.navbarHidden) {
                this.navbarHidden = true;
                gsap.to("#nav-2", {
                    yPercent: 0,
                })
            } else if (isVisible && this.navbarHidden) {
                this.navbarHidden = false;
                gsap.set("#nav-2", {
                    yPercent: -100,
                })
            }
        },
    },
    computed: {
        navIn() {
            if (this.navbarHidden) {
            }
        }
    },
    mounted() {
        this.navAnimation();
        this.setNav();
        window.addEventListener('scroll', this.checkNavbarVisibility);
        window.addEventListener('resize', this.checkNavbarVisibility);
        this.checkNavbarVisibility();
    },
};
</script>

<template>
    <div ref="navbar" class="nav-container px-4 d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center">
            <a href="#hero"><img :src="getImgPath('../assets/img/logo-portfolio.png')" alt=""></a>
        </div>
        <div class="d-flex align-items-center d-none d-lg-block">
            <ul class="d-flex justify-content-center align-items-center gap-5 text-white m-0">
                <li v-for="link in links" class="" :key="link"><a :href="link.id">{{ link.name }}</a></li>
            </ul>
        </div>
        <div class="d-flex align-items-center gap-4">
            <a href="">
                <div class="nav-button">
                    <a href="">
                        <div class="btn-overlay"></div>
                    </a>
                    <a href="https://www.linkedin.com/in/riccardo-cocciolo-670606242/"><span>Linkedin</span></a>
                </div>
            </a>
            <span @click="toggleSidebar">
                <i class="fa-solid fa-bars text-white d-lg-none"></i>
            </span>
        </div>
    </div>
    <div v-show="sidebarOpen" class="nav-overlay">
        <div class="sidebar">
            <div class="side-links p-3 pt-5">
                <ul class="d-flex flex-column justify-content-center align-items-start gap-4 text-white m-0 ps-4">
                    <li v-for="link in links" :key="link"><a :href="link.id" @click="closeSidebar">{{ link.name }}</a>
                    </li>
                </ul>
            </div>
            <span @click="closeSidebar"><i class="fa-solid fa-xmark"></i></span>
        </div>
    </div>
    <div v-show="navbarHidden" id="nav-2"
        class="nav-container nav-color px-4 d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center">
            <a href="#hero"><img src="../assets/img/logo-portfolio.png" alt=""></a>
        </div>
        <div class="d-flex align-items-center d-none d-lg-block">
            <ul class="d-flex justify-content-center align-items-center gap-5 text-white m-0">
                <li v-for="link in links" class="" :key="link"><a :href="link.id">{{ link.name }}</a></li>
            </ul>
        </div>
        <div class="d-flex align-items-center gap-4">
            <a href="">
                <div class="nav-button">
                    <a href="">
                        <div class="btn-overlay"></div>
                    </a>
                    <a href="https://www.linkedin.com/in/riccardo-cocciolo-670606242/"><span>Linkedin</span></a>
                </div>
            </a>
            <span @click="toggleSidebar">
                <i class="fa-solid fa-bars text-white d-lg-none"></i>
            </span>
        </div>
    </div>
    <div v-show="sidebarOpen" class="nav-overlay">
        <div class="sidebar">
            <div class="side-links p-3 pt-5">
                <ul class="d-flex flex-column justify-content-center align-items-start gap-4 text-white m-0 ps-4">
                    <li v-for="link in links" :key="link"><a :href="link.id" @click="closeSidebar">{{ link.name }}</a>
                    </li>
                </ul>
            </div>
            <span @click="closeSidebar"><i class="fa-solid fa-xmark"></i></span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.nav-container {
    width: 100%;
    height: 80px;
}

i {
    font-size: 30px;
}

.nav-color {
    background-color: rgb(18, 18, 18);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9998;
}

.nav-button {
    display: inline-block;
    width: 100px;
    height: 40px;
    border: none;
    background-color: rgb(35, 35, 35);
    border-radius: 25px;
    color: white;
    font-size: 16px;
    position: relative;
    overflow: hidden;

    &:hover .btn-overlay {
        left: 0%;
        transition: left .7s ease-in-out;
    }

    span {
        width: 100%;
        height: 100%;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

.btn-overlay {
    position: absolute;
    display: inline-block;
    top: 0;
    left: -15%;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(270deg, rgb(35, 35, 35), green);
}

img {
    width: 80px;
}

a {
    text-decoration: none;
    color: inherit;
}

ul {
    list-style: none;

    a {
        text-decoration: none;
        color: inherit;
    }
}

.nav-overlay {
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    background-color: rgb(0, 0, 0, .7);
    z-index: 9999;
    position: fixed;

    .sidebar {
        background-color: black;
        height: 100%;
        width: 60%;
        position: relative;

        span {
            position: absolute;
            top: 20px;
            right: 25px;
            color: rgb(105, 105, 105);

            i {
                font-size: 1.5rem;
            }
        }
    }
}

@media screen and (min-width: 768px) {
    .nav-container {
        height: 100px;
    }
}
</style>