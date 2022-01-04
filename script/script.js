'use strict'

const hard = () => {

    const getData = () => {
        fetch('./data/db.json')
            .then(data => data.json())
            .then(newData => sendData(newData))
            .catch(error => console.log(error))
    }

    const sendData = (data) => {
        const xhr = new XMLHttpRequest()

        const body = JSON.stringify(data)

        xhr.open("POST", 'https://jsonplaceholder.typicode.com/posts')
        xhr.setRequestHeader('Content-Type', 'application/json')

        xhr.send(body);
    }

    getData()

}

hard()