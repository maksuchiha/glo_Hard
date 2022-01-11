'use strict'

const hard = () => {
    fetch('./data/dbHeroes.json')
        .then(data => data.json())
        .then(newData => createElements(newData))
        .catch(err => console.log(err))

    const createElements = (data) => {
        data.forEach((item) => {
            const card = document.createElement('div')
            card.classList.add('card')
            card.innerHTML = `
                              <img src="${item.photo}" alt="photo">
                              <div class="card__text">
                                  <span>Имя: ${item.name}</span>
                                  <span>Реальное имя: ${item.realName}</span>
                                  <span class="card__films">Список фильмов: <br> ${item.movies}</span>
                                  <span>Статус: ${item.status}</span>
                              </div>
                              `
            card.innerHTML = card.innerHTML.replace(/,/g, (str) => {
                return `${str + ' '}`
            })
            document.querySelector('.cards').append(card)
        })
    }
}

hard()