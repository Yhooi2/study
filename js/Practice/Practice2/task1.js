// Задание 1: Создайте класс описывающий духовую печь. В качестве начального
// значения при создании экземпляра класса в него нужно передать
// максимальную температуру до которой может нагреться печь.
// Создайте геттер и сеттер для максимальной температуры. Сделайте
// ограничение максимальной температуры в 15 единиц. Создайте экземпляр
// класса передав допустимую температуру. Выведите в консоль значение
// максимальной температуры данного экземпляра класса.

class Oven {
    #maxTemperature;

    constructor(maxTemperature) {
        this.#maxTemperature = Math.min(maxTemperature, 15);
    }

    get maxTemperature() {
        return this.#maxTemperature;
    }

    set maxTemperature(value) {
        this.#maxTemperature = Math.min(value, 15);
    }
}

const oven = new Oven(10);
console.log(oven.maxTemperature); // 10

oven.maxTemperature = 20;  
console.log(oven.maxTemperature); // 15
