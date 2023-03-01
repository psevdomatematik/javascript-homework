// Вывести простые числа

let num = 25;
outer:
for (let i = 2; i <= num; i++) {
    for (let j = 2; j <= i / 2; j++) {
        if (!(i % j)) continue outer;
    }
    console.log(i);
}