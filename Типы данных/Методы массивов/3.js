// Фильтрация по диапазону "на месте"

"use strict";

function filterRangeInPlace(arr, a, b) {
    for (let i = arr.length; i > -1; i--) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
        }
    }
}

let arr = [2, 9, 4, 6, 5, 8, 8, 3];

filterRangeInPlace(arr, 1, 4);

console.log( arr );