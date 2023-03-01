// Создать расширяемый калькулятор

"use strict";

function Calculator() {
    this["+"] = function (a, b) {
        return a + b;
    }

    this["-"] = function (a, b) {
        return a - b;
    }

    this.calculate = function (str) {
        const arr = str.split(" ");
        const a = +arr[0];
        const b = +arr[2];
        const operation = arr[1];
        if (!this[operation] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        return this[operation](a, b);
    }

    this.addMethod = function (name, func) {
        this[name] = func;
    }


}

let calc = new Calculator();

console.log( calc.calculate("3 + 7") );
console.log( calc.calculate("3 - 7") );

calc.addMethod("*", (a, b) => a * b);
calc.addMethod("/", (a, b) => a / b);
calc.addMethod("**", (a, b) => a ** b);

console.log( calc.calculate("3 * 7") );
console.log( calc.calculate("3 / 7") );
console.log( calc.calculate("3 ** 7") );
console.log( calc.calculate("3 *** 7") );
console.log( calc.calculate("a ** 7") );