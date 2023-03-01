// День недели в европейской нумерации

"use strict";

function getLocalDay(date) {
    if (!date.getDay()) {
        return 7;
    }
    return date.getDay();
}

let date = new Date(2012, 0, 9);  // 3 января 2012 года
console.log( getLocalDay(date) );