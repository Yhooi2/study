
// Задание 2: Создайте класс улучшенной плиты, сделав наследование от класса
// который вы создали в задании 1.
// Создайте два метода включения и выключения. Метод включения в первую
// очередь выводит в консоль уведомление о начале работы, затем запускает
// нагрев печи, температура должна повышаться на 1 единицу раз в 500мс. При
// достижении максимальной температуры выводить в консоль уведомление о
// полном нагреве печи и запускать метод выключения.
// Метод выключения в первую очередь выводит в консоль уведомление о том что
// печь выключена, затем снижает температуру печи на 1 единицу раз в 500мс.
// При снижении температуры до 0, выводит уведомление в консоль о том что
// печь остыла и прекращает работу.
// Создайте новый экземпляр класса улучшенной печи, выведите в консоль
// значение его максимальной температуры и вызовите метод включения.


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

class EnhancedOven extends Oven {
    #isOn;
    #currentTemperature;

    constructor(maxTemperature) {
        super(maxTemperature);
        this.#isOn = false;
        this.#currentTemperature = 0;
    }

    turnOn() {
        if (!this.#isOn) {
            this.#isOn = true;
            console.log("Печь включена. Начинается нагрев.");
            this.#heatUp();
        }
    }

    turnOff() {
        if (this.#isOn) {
            this.#isOn = false;
            console.log("Печь выключена. Начинается охлаждение.");
            this.#coolDown();
        }
    }

    #heatUp() {
        const heatInterval = setInterval(() => {
            if (this.#currentTemperature < this.maxTemperature) {
                this.#currentTemperature++;
                console.log(`Текущая температура: ${this.#currentTemperature}`);
            } else {
                console.log("Печь полностью нагрелась до максимальной температуры.");
                clearInterval(heatInterval);
                this.turnOff();
            }
        }, 500);
    }

    #coolDown() {
        const coolInterval = setInterval(() => {
            if (this.#currentTemperature > 0) {
                this.#currentTemperature--;
                console.log(`Текущая температура: ${this.#currentTemperature}`);
            } else {
                console.log("Печь остыла.");
                clearInterval(coolInterval);
            }
        }, 500);
    }
}


const enhancedOven = new EnhancedOven(20);
console.log(enhancedOven.maxTemperature); // 15
enhancedOven.turnOn();
