// Форматирование относительной даты

"use strict";

function formatDate(date) {
    let diff = Date.now() -  date.getTime();
    if (diff < 1000) {
        return "прямо сейчас";
    } else if (diff < 1000 * 60) {
        return `${Math.floor(diff / 1000)} сек назад`;
    } else if (diff < 1000 * 60 * 60) {
        return `${Math.floor(diff / 1000 / 60)} мин назад`;
    } else  {
        let year = date.getFullYear();
        let day = date.getDate() + 1;
        let month = date.getMonth() + 1;
        let hours = date.getHours();
        let minutes = date.getMinutes();
        return `${'0'.repeat(day< 10)}${day}.${'0'.repeat(month < 10)}${month}.${year} ` +
            `${'0'.repeat(hours < 10)}${hours}:${'0'.repeat(minutes < 10)}${minutes}`;
    }
}

console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );
