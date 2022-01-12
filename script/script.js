'use strict'

const hard = () => {
    const cards = document.querySelector('.cards')
    const form = document.querySelector('.nav-form')
    const selectSex = document.getElementById('sex')
    const selectFilm = document.getElementById('film')
    const selectStatus = document.getElementById('status')
    const dataItems = []
    const films = []

    fetch('./data/dbHeroes.json')
        .then(data => data.json())
        .then(newData => createElements(newData))
        .catch(err => console.log(err))

    const renderOption = (data,info, place) => {
        data.textContent = `${info}`
        place.append(data)
    }

    const renderCards = (photo, name, realName, movies, status) => {
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `
                          <img src="${photo}" alt="photo">
                          <div class="card__text">
                              <span>Имя: ${name}</span>
                              <span>Реальное имя: ${realName}</span>
                              <span class="card__films">Список фильмов: <br> ${movies}</span>
                              <span>Статус: ${status}</span>
                          </div>
                         `
        card.innerHTML = card.innerHTML.replace(/,/g, (str) => {
            return `${str + ' '}`
        })

        cards.append(card)
    }

    const onlyUnique = (value, index, self) => {
        return self.indexOf(value) === index
    }

    const createElements = (data) => {
        data.forEach((item) => {
            dataItems.push(item)
            renderCards(item.photo, item.name, item.realName, item.movies, item.status)

            if (Array.isArray(item.movies)) {
                item.movies.forEach((item) => films.push(item))
            } else if (item.movies) {
                films.push(item)
            }

        })

        films.filter(onlyUnique).forEach((item) => {
            renderOption(document.createElement('option'), item, selectFilm)
        })
    }

    const filterCards = () => {
        cards.innerHTML = ''

        dataItems.filter(item => {
            const filmsOutput = item.movies.find(arr => arr === selectFilm.value)
            if (Array.isArray(item.movies)) {
                (selectStatus.value === item.status && selectSex.value === item.gender
                    && selectFilm.value === filmsOutput) ?
                    renderCards(item.photo, item.name, item.realName, filmsOutput, item.status) :
                    (item.status === selectStatus.value && selectSex.value === item.gender
                        && selectFilm.value === '') ?
                        renderCards(item.photo, item.name, item.realName, filmsOutput, item.status) :
                        (selectSex.value === item.gender && selectFilm.value === filmsOutput
                            && selectStatus.value === '') ?
                            renderCards(item.photo, item.name, item.realName, filmsOutput, item.status) :
                            (selectStatus.value === item.status && selectFilm.value === filmsOutput
                                && selectSex.value === '') ?
                                renderCards(item.photo, item.name, item.realName, filmsOutput, item.status) :
                                (selectStatus.value === item.status && selectFilm.value === ''
                                    && selectSex.value === '') ?
                                    renderCards(item.photo, item.name, item.realName, filmsOutput, item.status) :
                                    (selectFilm.value === filmsOutput && selectStatus.value === ''
                                        && selectSex.value === '') ?
                                        renderCards(item.photo, item.name, item.realName, filmsOutput, item.status) :
                                        (selectSex.value === item.gender && selectStatus.value === ''
                                            && selectFilm.value === '') ?
                                            renderCards(item.photo, item.name, item.realName, filmsOutput, item.status) :
                                            false
            }
        })
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        filterCards()
    })
}

hard()