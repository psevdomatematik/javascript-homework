// Сумма свойств объекта
"use strict";

function getSalary(salaries) {
    let sum = 0;
    for (const surname in salaries) {
        sum += salaries[surname];
    }
    return sum;
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

console.log(getSalary(salaries));

salaries = {};

console.log(getSalary(salaries));