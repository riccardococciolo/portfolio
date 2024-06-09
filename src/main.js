import { createApp } from 'vue';
import App from './App.vue';
import { gsap } from '../node_modules/gsap';

createApp(App).mount('#app')

const cursor = document.getElementById('cursor')
const shadow = document.getElementById('cursor-shadow')

const coords = {
    y: 0,
    x: 0,
}

const shadowCoords = {
    y: 0,
    x: 0,
}

window.addEventListener('mousemove', function (e) {
    coords.y = e.clientY;
    coords.x = e.clientX;
})

function update() {
    cursor.style.top = `${coords.y}px`;
    cursor.style.left = `${coords.x}px`;

    const x = lerp(shadowCoords.x, coords.x, 0.1)
    const y = lerp(shadowCoords.y, coords.y, 0.1)

    shadow.style.top = `${shadowCoords.y}px`;
    shadow.style.left = `${shadowCoords.x}px`;

    shadowCoords.y = y
    shadowCoords.x = x


    requestAnimationFrame(update)
}

requestAnimationFrame(update)

function lerp(a,b,t) {
    return a * (1 - t) + b * t
}