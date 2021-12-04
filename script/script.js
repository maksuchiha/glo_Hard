"use strict"

const days = [ 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье' ]
const body = document.querySelector('.div')
const cartElem = document.createElement('div')
const now = new Date()
const week = days.join('<br>')


cartElem.classList.add('week')

cartElem.innerHTML = `
                <span class="mon">${days[0]}</span><br>
                <span class="tue">${days[1]}</span><br>
                <span class="wed">${days[2]}</span><br>
                <span class="thu">${days[3]}</span><br>
                <span class="fri">${days[4]}</span><br>
                <i class="sat">${days[5]}</i><br>
                <i class="sun">${days[6]}</i>
            `
body.append(cartElem)

if (now.getDay() === 1) {
    cartElem.querySelector('.mon').style.fontWeight = 'bold'
} else if (now.getDay() === 2) {
    cartElem.querySelector('.thu').style.fontWeight = 'bold'
} else if (now.getDay() === 3) {
    cartElem.querySelector('.wed').style.fontWeight = 'bold'
} else if (now.getDay() === 4) {
    cartElem.querySelector('.thu').style.fontWeight = 'bold'
} else if (now.getDay() === 5) {
    cartElem.querySelector('.fri').style.fontWeight = 'bold'
} else if (now.getDay() === 6) {
    cartElem.querySelector('.sat').style.fontWeight = 'bold'
} else if (now.getDay() === 7) {
    cartElem.querySelector('.sun').style.fontWeight = 'bold'
}