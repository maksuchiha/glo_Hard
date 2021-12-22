'use strict'

let func1 = function() {
    console.log('жирафу,');
};

let func2 = function() {
    func1();

    setTimeout(function() {
        console.log('сшил');
    }, 1000);
}

let func3 = function() {
    setTimeout(function() {
        func2();
        console.log('зайке');
    }, 250);
    console.log('овце,');
}

setTimeout(function() {
    console.log('голубые');
    setTimeout(function() {
        console.log('фуфайки');
    }, 750);
}, 500);

console.log('Крот');

func3();