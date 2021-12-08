'use strict'

let liveTime = setInterval(() => {
    const month = () => {
        const month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']
        for (let i = 0; i < month.length; i++) {
            if (i === new Date().getMonth()){
                return month[i]
            }
        }
    }

    const day = () => {
        const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
        for (let i = 0; i < week.length; i++) {
            if (i + 1 === new Date().getDay()) {
                return week[i]
            }
        }
    }

    const time = (min, forms) => {
        min = Math.abs(min) % 100
        const min1 = min % 10
        if (min > 10 && min < 20) { return forms[2] }
        if (min1 > 1 && min1 < 5) { return forms[1] }
        if (min1 === 1) { return forms[0] }
        return forms[2]
    }

    const clean = () => {
        document.body.innerHTML = ''
    }

    document.body.appendChild(document.createElement('div')).innerHTML =
        `Сегодня ${day()}, ${new Date().getDate()} ${month()} ${new Date().getFullYear()} года, 
     ${new Date().getHours()} ${time(new Date().getHours(), ['час', 'часа', 'часов'])} 
     ${new Date().getMinutes()} ${time(new Date().getMinutes(), ['минута', 'минуты', 'минут'])} 
     ${new Date().getSeconds()} ${time(new Date().getSeconds(), ['секунда', 'секунды', 'секунд'])}
    `

    document.body.appendChild(document.createElement('div')).innerHTML =
        `${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`


    setTimeout(clean, 995)

}, 1000)

