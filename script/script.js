"use strict"

const days = [ 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье' ]
const body = document.querySelector('.div')
const cartElem = document.createElement('div')
let mon
let tue
let wed
let thu
let fri
let sat
let sun
const now = new Date()
const week = days.join('<br>')


cartElem.classList.add('week')

cartElem.innerHTML = `
                <span class="mon">${week.slice(0, 11)}</span><br>
                <span class="tue">${week.slice(15, 25)}</span><br>
                <span class="wed">${week.slice(26, 31)}</span><br>
                <span class="thu">${week.slice(35, 42)}</span><br>
                <span class="fri">${week.slice(46, 53)}</span><br>
                <i class="sat">${week.slice(57, 64)}</i><br>
                <i class="sun">${week.slice(68, 79)}</i>
            `
body.append(cartElem)

mon = cartElem.querySelector('.mon')
tue = cartElem.querySelector('.tue')
wed = cartElem.querySelector('.wed')
thu = cartElem.querySelector('.thu')
fri = cartElem.querySelector('.fri')
sat = cartElem.querySelector('.sat')
sun = cartElem.querySelector('.sun')

if (now.getDay() === 1) {
    mon.style.fontWeight = 'bold'
} else if (now.getDay() === 2) {
    tue.style.fontWeight = 'bold'
} else if (now.getDay() === 3) {
    wed.style.fontWeight = 'bold'
} else if (now.getDay() === 4) {
    thu.style.fontWeight = 'bold'
} else if (now.getDay() === 5) {
    fri.style.fontWeight = 'bold'
} else if (now.getDay() === 6) {
    sat.style.fontWeight = 'bold'
} else if (now.getDay() === 7) {
    sun.style.fontWeight = 'bold'
}


