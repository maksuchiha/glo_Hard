'use strict'

const input = document.getElementById('input')
const output = document.getElementById('p')
let timeout


function outputTimeout() {
    if (timeout) {
        clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
        output.textContent = input.value
    }, 300)
}

input.addEventListener('input', outputTimeout)