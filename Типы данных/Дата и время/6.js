// Сколько сегодня прошло секунд?

"use strict";

function getSecondsToday() {
    let now = new Date;
    let startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    return Math.floor((now - startDate) / 1000);
}

console.log(getSecondsToday());