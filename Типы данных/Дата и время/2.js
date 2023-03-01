// Покажите день недели

"use strict";

function getWeekDay(date) {
    let names = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
    return names[date.getDay()]
}

let date = new Date(2012, 0, 3);  // 3 января 2012 года
console.log( getWeekDay(date) );