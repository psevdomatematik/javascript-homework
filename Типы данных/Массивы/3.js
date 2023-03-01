// Подмассив наибольшей суммы

"use strict";

function getMaxSubSum(arr) {
    let max = 0;
    let currSum = 0;

    for (const el of arr) {
        currSum += el;
        max = Math.max(max, currSum);
        if (currSum< 0) {
            currSum = 0;
        }
    }

    return max;
}

console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([2, -1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-2, -1, 1, 2]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
console.log(getMaxSubSum([1, 2, 3]));