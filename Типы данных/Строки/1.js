// Сделать первый символ заглавным
"use strict";

function ucFirst(str) {
    if (!str) return "";
    return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst("вася"));
console.log(ucFirst(""));