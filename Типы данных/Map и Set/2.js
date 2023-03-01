// Отфильтруйте анаграммы

"use strict";

function forSort(a, b) {
    return a > b ? 1 : -1;
}

function aclean(arr) {
    let set = new Set();
    let result = [];
    arr.forEach(item => {
        let letters = item.toLowerCase().split("").sort().join("");
        if (!set.has(letters)) {
            set.add(letters);
            result.push(item);
        }
    });
    return result;
}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"
