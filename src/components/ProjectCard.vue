<script>
export default {
    props: {
        project: Object,
    },
    data() {
        return {

        }
    },
    methods: {
        getImgPath(img) {
            return new URL(img, import.meta.url).href
        },
    }
}
</script>

<template>
    <div class="position-absolute z-1 top-50 start-50 project">
        <div class="row">
            <div class="col-12 d-flex justify-content-center">
                <img class="proj-img pb-2" :src="getImgPath(this.project.img)" alt="">
            </div>
            <div class="col-12">
                <div>
                    <h3 class="overflow-y-hidden pt-3">{{this.project.title}}</h3>
                    <p class="text-white">{{ this.project.description }}</p>
                </div>
                <div class="row">
                    <div class="col-3 pe-0">
                        <div class="stack h-100"><span>STACK</span></div>
                    </div>
                    <div class="col-9">
                        <div class="row g-2 justify-content-around">
                            <div v-for="stack in this.project.stack" class="stack col-5">
                                <img class="icon" :src="getImgPath(stack.icon)" alt="">
                                <span>{{stack.name}}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>

        </div>

    </div>
</template>

<style lang="scss" scoped>
.project {
    background-color: rgb(25, 25, 25);
    padding: 2.5rem;
    border-radius: 30px;
    transform: translate(-50%, -50%);
    border: solid green 1px;
    width: 90%;
}

h3 {
    color: green;
    font-size: 2rem;
    text-align: center;
}

.icon {
    width: 10px;
    padding-bottom: 5px;
}

p {
    font-size: .8rem;
    text-align: center;
}

.stack {
    background-color: rgb(60, 60, 60);
    padding: .7rem .1rem;
    border-radius: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
    margin-right: 10px;
    color: white;
    span {
        font-size: .7rem;
    }
}

@media screen and (min-width: 768px) {
    .project {
        width: 80%;
    }
}

@media screen and (min-width: 992px) {
    .proj-img {
    max-height: 200px;
}

.project {
    width: auto;
}
}
</style>