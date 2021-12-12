'use strict'

let liveTime = setInterval(() => {

    const month = new Date(Date.now()).toLocaleString("ru-RU", {month: "long"}).slice(0, -1) + 'я'

    const getTitle = (item) => {
        item = item.trim()
        return  item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
    }

    const day = new Date(Date.now()).toLocaleString("ru-RU", {weekday: "long"})

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
        `Сегодня ${getTitle(day)}, ${new Date().getDate()} ${month} ${new Date().getFullYear()} года, 
     ${new Date().getHours()} ${time(new Date().getHours(), ['час', 'часа', 'часов'])} 
     ${new Date().getMinutes()} ${time(new Date().getMinutes(), ['минута', 'минуты', 'минут'])} 
     ${new Date().getSeconds()} ${time(new Date().getSeconds(), ['секунда', 'секунды', 'секунд'])}
    `

    document.body.appendChild(document.createElement('div')).innerHTML =
        `${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`


    setTimeout(clean, 995)

}, 1000)
