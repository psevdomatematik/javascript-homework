// Сколько секунд осталось до завтра?

"use strict";

function getSecondsToTomorrow() {
    let now = new Date();
    return 60 * 60 * 24 - now.getSeconds() - now.getHours() * 60 * 60 - now.getMinutes() * 60;
}

console.log(getSecondsToTomorrow());