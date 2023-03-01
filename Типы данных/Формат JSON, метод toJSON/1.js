// Преобразуйте объект в JSON, а затем обратно в обычный объект

"use strict";

let user = {
    name: "Василий Иванович",
    age: 35
};

let userJSON = JSON.stringify(user);
console.log(userJSON);
user = JSON.parse(userJSON);
console.log(user);