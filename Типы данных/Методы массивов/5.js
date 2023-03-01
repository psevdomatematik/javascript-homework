// Скопировать и отсортировать массив

"use strict";

function copySorted(arr) {
    let copy = arr.slice();
    copy.sort((a, b) => a > b ? 1 : - 1);
    return copy;
}

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);

console.log(sorted);
console.log(arr);
