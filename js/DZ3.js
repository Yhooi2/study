// 1
let minutes = 24;
let quarter;

if (minutes <= 15) {
	quarter = 'Первая';
} else if (15 < minutes <= 30) {
	quarter = 'Вторая';
} else if (30 < minutes <= 45) {
	quarter = 'Третья';
} else {
	quarter = 'Четвертая';
}
console.log(quarter + " четверть")

// 2
let numberMonth = 2;
let season;

if (numberMonth > 11 || numberMonth < 3) {
	season = 'Зима';
} else if (3 <= numberMonth < 6) {
	season = 'Весна';
} else if (6 <= numberMonth <  9) {
	season = 'Лето';
} else {
	season = 'Осень';
}
console.log(season)

// 3
let num = 3;
if (num % 2) {
	num **= 3
} else {
	num **= 2
}
console.log(num)