'use strict'

const lesson05 = () => {
    const part1 = (item) => {
        const isNumber = (num) => {
            return !isNaN(parseFloat(num)) && isFinite(num)
        }

        do {
            item = prompt('Введите число')
        } while (!isNumber(item))

        item = +item.split(' ').join('');

        return item
    }

    console.log(part1())

    const part2 = () => {
        let arr = [ '15', '24', '56', '42', '87', '31', '55' ]
        arr.forEach((item) => {
            if (item.startsWith('2') || item.startsWith('4')) {
                console.log(item);
            }
        })

        const isPrime = (num) => {
            for (let i = 2; num > i; i++) {
                if (num % i === 0) {
                    return false;
                }
            }
            return num > 1;
        }
        console.log(arr.filter(isPrime));
    }

    part2()
}

lesson05()