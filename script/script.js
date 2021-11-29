'use strict'

const hard = () => {
    const lesson02 = (item) => {
        const num = item,
            output = [],
            sNumber = num.toString();
        for (let i = 0, len = sNumber.length; i < len; i++) {
            output.push(+sNumber.charAt(i));
        }
        const multiple = output.reduce((acc, rec) => acc * rec) ** 3;
        return  String(multiple).slice(0,2);
    }

    console.log(lesson02(266219));


    const lesson03 = () => {
        const lang = prompt('Введите либо "ru" либо "en"');
        const days = new Map([
            ['en', ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] ],
            ['ru', ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'] ]
        ]) ;

        if (lang === 'en') {
            console.log(days.get('en'));
        }   else if (lang === 'ru') {
            console.log(days.get('ru'));
        }   else {
            console.log('ошибка');
        }

        switch(lang) {
            case 'en':
                console.log(days.get('en'));
                break;

            case 'ru':
                console.log(days.get('ru'));
                break;

            default:
                console.log('ошибка');
        }

        console.log(days.get('en'));

        let namePerson = prompt('Введите имя');

        namePerson === 'Артём' ?
            console.log('директор') :
            namePerson === 'Александр' ?
                console.log('преподаватель') :
                console.log('студент');
    }

    lesson03()
}

hard()