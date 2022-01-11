'use strict'

const hard = () => {
    const select = document.getElementById('select')
    const valuteInput = document.getElementById('valute')
    const valuteInfo = document.querySelector('.valuteInfo')
    const rubInput = document.getElementById('rub')
    const rubInfo = document.querySelector('.rubInfo')
    const form = document.getElementById('form')
    let valute

    fetch('https://www.cbr-xml-daily.ru/daily_json.js')
        .then(data => data.json())
        .then(newData => convert(newData))
        .catch(err => console.log(err))

    const convert = (data) => {
        const dollar = data.Valute.USD.Value
        const euro = data.Valute.EUR.Value

        select.addEventListener('change', () => {
            if (select.value === 'usd') {
                valuteInfo.textContent = 'USD'
                rubInfo.textContent = 'Российский рубль'
                rubInput.value = ''
                valuteInput.value = ''
            } else if (select.value === 'eur') {
                valuteInfo.textContent = 'EUR'
                rubInfo.textContent = 'Российский рубль'
                rubInput.value = ''
                valuteInput.value = ''
            } else {
                valuteInfo.textContent = ''
                rubInfo.textContent = ''
                rubInput.value = ''
                valuteInput.value = ''
            }
        })

        const resetInput = (e, input) => {
            if (e.target.value.trim() !== '') {
                input.value = ''
            }
        }

        const converter = () => {
            if (select.value !== '' && (rubInput.value.trim() !== '' || valuteInput.value.trim() !== '')) {
                if (valuteInfo.textContent === 'USD') {
                    valute = +dollar
                } else if (valuteInfo.textContent === 'EUR') {
                    valute = +euro
                }
                if (rubInput.value !== '') {
                    valuteInput.value = +rubInput.value / valute
                    valuteInput.value = Math.floor(valuteInput.value * 100) / 100
                } else {
                    rubInput.value = (valute * +valuteInput.value)
                    rubInput.value = Math.floor(rubInput.value * 100) / 100
                }
            }
        }


        rubInput.addEventListener('input', (e) => resetInput(e, valuteInput))

        valuteInput.addEventListener('input', (e) => resetInput(e, rubInput))

        form.addEventListener('submit', (e) => {
            e.preventDefault()
            converter()
        })
    }
}

hard()