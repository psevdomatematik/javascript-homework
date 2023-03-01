// Переведите текст вида border-left-width в borderLeftWidth

"use strict";

function camelize(str) {
    const words = str.split("-");
    for (let i = 1; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    }
    return words.join("")
}

console.log(camelize("background-color"))
console.log(camelize("list-style-image"))
console.log(camelize("-webkit-transition"))