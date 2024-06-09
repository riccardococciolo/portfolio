<script>
export default {
    data() {
        return {
            links: [{ name: "Chi Sono", id: "#about-1" }, { name: "Tecnologie", id: "#tech-1" }, { name: "Formazione ed Esperienza", id: "#experience-1" }, { name: "Progetti", id: "#project-id" }],
        }
    },
}
</script>

<template>
    <div class="wrapper">
        <div class="container">
            <div class="row gap-5">
                <div class="col-12 gy-5">
                    <div class="row justify-content-center align-items-center gap-4 gap-lg-0">
                        <div v-for="link in links" class="col-12 col-lg-2 text-white text-center link"><a :href="link.id">{{ link.name }}</a>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="row justify-content-center gap-4 gap-lg-0">
                        <div class="col-2 text-center gy-5">
                            <a href="https://github.com/riccardococciolo"><i class="fa-brands fa-github"></i></a>
                        </div>
                        <div class="col-2 text-center gy-5">
                            <a href="https://www.linkedin.com/in/riccardo-cocciolo-670606242/"><i class="fa-brands fa-linkedin"></i></a> 
                        </div>
                    </div>
                </div>
                <div class="col-12"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
i {
    color: rgb(130, 130, 130);
    font-size: 2rem;
    overflow-y: hidden;
    position: relative;
    transition: transform .15s ease-in-out, color .15s ease-in-out;

    &:hover {
        transform: scale(1.3);
        color: white;
        text-shadow: 0 0 1px rgb(255, 255, 255);
    }
}

.wrapper {
    background-color: rgb(18, 18, 18);
}

.link {
    font-size: 1.1rem;

    a {
        text-decoration: none;
        color: inherit;
        transition: color .2s ease-in-out;

        &:hover {
            color: green;
            text-shadow: 0 0 5px green;
        }
    }
}
</style>