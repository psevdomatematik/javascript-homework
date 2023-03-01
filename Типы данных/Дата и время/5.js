// Последнее число месяца?

"use strict";

function getLastDayOfMonth(year, month) {
    if (month === 11) {
        month = 0;
        year += 1;
    } else {
        month += 1;
    }

    let date = new Date(year, month);
    date.setDate(date.getDate() - 1);
    return date.getDate();
}

console.log(getLastDayOfMonth(2024, 1));