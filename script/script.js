'use strict'

const sharingan = document.getElementById('image')
const btnStart = document.getElementById('start')
const btnReset = document.getElementById('reset')
let count = 0
let isFalse = false


const animate = () => {
    if (isFalse) {
        sharingan.style.transform = `rotate(${count}deg)`
        count++
        requestAnimationFrame(animate)
    }
}

btnStart.addEventListener('click', () => {
    if (!isFalse) {
        isFalse = true
        requestAnimationFrame(animate)
        btnStart.textContent = 'pause'
    } else {
        isFalse = false
        btnStart.textContent = 'start'
    }
})

btnReset.addEventListener('click', () => {
    isFalse = false
    count = 0
    sharingan.style.transform = `rotate(${count}deg)`
})

