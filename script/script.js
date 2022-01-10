'use strict'

const hard = () => {
    const select = document.getElementById('cars')
    const output = document.querySelector('.output')


    const getData = () => {
        fetch('https://bfs01.getcourse.ru/public/files/12250/88/84120897322424565eb4cddeea2b910a.json?e=1641790799&s=_QUeCM_T1jQ_bpKjfjPHUw')
            .then(data => data.json())
            .then(newData => render(newData))
            .catch(error => console.log(error))
    }

    const out = (e, data) => {
        const createTextItem = select.querySelectorAll('option')

        createTextItem.forEach((item, textIndex) => {
            if (+e.target.value === textIndex - 1) {
                output.innerHTML = `тачка: ${data.cars[textIndex -1].brand} ${data.cars[textIndex -1].model}<br>
                                      цена: ${data.cars[textIndex -1].price}
                                    `
            } else if (e.target.value === 'def') {
                output.innerHTML = ``
            }
        })
    }

    const render = (data) => {
        data.cars.forEach((item, index) => {
            const option = document.createElement('option')

            option.textContent = `${item.brand}`
            option.value = `${index}`
            select.append(option)
        })

        select.addEventListener('change', (e) => {
            out(e, data)
        })
    }

    getData()
}

hard()