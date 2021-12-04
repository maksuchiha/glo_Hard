"use strict"

let days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"]

let dayOfWeek = new Date().getDay()
if (dayOfWeek === 0) dayOfWeek = 7
for (let i = 0; i < days.length; i++) {
    (i === dayOfWeek - 1 && i === 5) ? document.body.insertAdjacentHTML("beforeend", "<div><b>" + `<i>${days[i]}</i>` + "</b></div>") :
        (i === dayOfWeek - 1 && i === 6) ? document.body.insertAdjacentHTML("beforeend", "<div><b>" + `<i>${days[i]}</i>` + "</b></div>") :
            (i === dayOfWeek - 1 && (i !== 5 && i !== 6)) ? document.body.insertAdjacentHTML("beforeend", "<div><b>" + days[i] + "</b></div>") :
                (i === 5) ? document.body.insertAdjacentHTML("beforeend", "<div>" + `<i>${days[i]}</i>` + "</div>") :
                    (i === 6) ? document.body.insertAdjacentHTML("beforeend", "<div>" + `<i>${days[i]}</i>` + "</div>") :
                        (i !== 5 || i !== 6) ? document.body.insertAdjacentHTML("beforeend", "<div>" + days[i] + "</div>") :
                            ''
}