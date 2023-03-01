// Перемешайте массив

"use strict";

function shuffle(array) {
    for (let i = 0; i < array.length; i++) {
        let ind = Math.floor(Math.random() * array.length);
        let temp = array[ind];
        array[ind] = array[i];
        array[i] = temp;
    }
}
let arr = [1, 2, 3];

shuffle(arr);
console.log(arr);

shuffle(arr);
console.log(arr);

shuffle(arr);
console.log(arr);

/* попробую проверить, действительно ли получилось равномерное распределение
воспользуюсь методом проверки, предоставленном в решении
P.S.: ну почти получилось
*/

let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
};

for (let i = 0; i < 10000000; i++) {
    let array = [1, 2, 3];
    shuffle(array);
    count[array.join('')]++;
}

// показать количество всех возможных вариантов
for (let key in count) {
    console.log(`${key}: ${count[key]}`);
}