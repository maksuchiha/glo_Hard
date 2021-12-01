'use strict'

const lesson05 = () => {
    const part2 = () => {
        let arr = [ '15', '24', '56', '42', '87', '31', '55' ]
        arr.forEach((item) => {
            if (item.startsWith('2') || item.startsWith('4')) {
                console.log(item)
            }
        })

        let num = 100
        nPrime:
            for (let i = 2; i <= num; i++) {
                for (let j = 2; j < i; j++) {
                    if (i % j === 0) continue nPrime
                }
                console.log(i)
            }
    }

    part2()
}

lesson05()