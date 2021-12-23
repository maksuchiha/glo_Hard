'use strict'

const sharingan = document.getElementById('image')
const btn = document.getElementById('button')
let count = 0
let isFalse = false


const animate = () => {
    if (isFalse) {
        sharingan.style.transform = `rotate(${count}deg)`
        count++
        requestAnimationFrame(animate)
    }
}

btn.addEventListener('click', () => {
    if (!isFalse) {
        isFalse = true
        requestAnimationFrame(animate)
    } else {
        isFalse = false
    }
})