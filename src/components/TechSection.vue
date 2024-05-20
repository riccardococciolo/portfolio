<script>
export default {
    data() {
        return {
            frontEnd: [
                {
                    tech: "HTML",
                    level: "Alto",
                },
                {
                    tech: "CSS",
                    level: "Alto",
                },
                {
                    tech: "JavaScript",
                    level: "Intermedio",
                },
                {
                    tech: "Bootstrap",
                    level: "Alto",
                },
                {
                    tech: "VUE.js",
                    level: "Intermedio",
                },
                {
                    tech: "SASS",
                    level: "Intermedio",
                },
                {
                    tech: "GSAP",
                    level: "Intermedio",
                },
            ],
            backEnd: [
                {
                    tech: "PHP",
                    level: "Base",
                },
                {
                    tech: "Laravel",
                    level: "Base",
                },
                {
                    tech: "MySQL",
                    level: "Base",
                },
            ],
        }
    },
}
</script>

<template>
    <div class="container">
        <h2>TECNOLOGIE</h2>
        <div class="row justify-content-center align-items-stretch pb-5 gap-5">
            <div class="col-12 col-md-9 col-lg-5">
                <div class="info-container">
                    <div class="row">
                        <div>
                            <h3 class="p-0 overflow-y-hidden text-center">Frontend Development</h3>
                        </div>
                        <div v-for="info in frontEnd" class="col-6 text-white d-flex g-4">
                            <div>
                                <span><i class="fa-solid fa-circle-check pt-2"></i></span>
                            </div>
                            <div class="d-flex flex-column ps-3">
                                <span class="tech pb-1">{{ info.tech }}</span>
                                <span class="level">{{ info.level }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-9 col-lg-5">
                <div class="info-container h-100">
                    <div class="row">
                        <div>
                            <h3 class="p-0 overflow-y-hidden text-center">Backend Development</h3>
                        </div>
                        <div v-for="info in backEnd" class="col-6 text-white d-flex g-4">
                            <div>
                                <span><i class="fa-solid fa-circle-check pt-2"></i></span>
                            </div>
                            <div class="d-flex flex-column ps-3">
                                <span class="tech pb-1">{{ info.tech }}</span>
                                <span class="level">{{ info.level }}</span>
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
    font-size: 3rem;
    font-weight: 900;
    background: -o-linear-gradient(to right, rgb(0, 128, 0) 0%, white 90%);
    background: linear-gradient(to right, rgb(0, 128, 0) 0%, white 90%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding: 0px;
    word-wrap: break-word;
    padding-bottom: 4rem;
    text-align: center;
}

h3 {
    color: green;
    font-size: 1.5rem;
}

.info-container {
    padding: 2rem;
    border-radius: 50px;
    position: relative;
    overflow: hidden;

    .tech {
        font-size: 1.2rem;
    }

    &::before {
        content: "";
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background-image: conic-gradient(
            green,
            transparent 60deg,
            transparent 180deg,
            green,
            transparent 240deg,
        );
        z-index: -2;
        animation: spin 9s linear infinite;
        animation-play-state: paused;
    }

    @keyframes spin {
        to {
            transform: rotate(-360deg);
        }
    }

    &:hover::before {
        animation-play-state: running;
    }

    &::after {
        content: "";
        position: absolute;
        background: rgb(25, 25, 25);
        inset: .25rem;
        border-radius: 50px;
        z-index: -1;
        transition: all 400ms ease;
    }

    .level {
        color: rgb(130, 130, 130);
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
        font-size: 5rem;
        padding-bottom: 7rem;
    }

    h3 {
        font-size: 2rem;
    }
}
</style>