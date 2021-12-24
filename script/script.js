'use strict'

const hard = () => {
    const task1 = document.getElementById('task1')
    const task2 = document.getElementById('task2')


    task1.innerHTML = task1.innerHTML.replace(/функц+/gi, (str) => {
        return `<strong>${str}</strong>`
    })

    task2.innerHTML = task2.innerHTML.replace(/[\d]+:[\d]+/gi, (str) => {
        return `<b>${str}</b>`
    })

    document.body.innerHTML = document.body.innerHTML.replace(/("(?!")[^"]*")|<[^<>]+>/gi, (str) => {
        return `<mark>${str}</mark>`
    })

    document.body.innerHTML = document.body.innerHTML.replace(/(http?:\/\/[^\s]+)/gi, (str) => {
        return `<a href="' + url + '">${str}</a>`
    })

    document.body.innerHTML = document.body.innerHTML.replace(/#([A-F]{3}){1,2}/g, (str) => {
        console.log(str)
    })

}

hard()