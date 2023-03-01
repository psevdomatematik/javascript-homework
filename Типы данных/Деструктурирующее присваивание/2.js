// Максимальная зарплата

"use strict";

function topSalary(salaries) {
    let maxName;
    let maxSalary = 0;
    for (let [name, salary] of Object.entries(salaries)) {
        if (salary > maxSalary) {
            maxName = name;
            maxSalary = salary;
        }
    }

    return maxName;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log(topSalary(salaries));