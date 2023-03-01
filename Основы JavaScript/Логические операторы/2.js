// Проверка значения вне диапазона

"use strict";

let age = 91;

if (age < 14 || age > 90) {
    console.log("не лежит");
}
if (!(age >= 14 && age <= 90)) {
    console.log("не лежит");
}
