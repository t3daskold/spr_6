// Базовий клас для напоїв
class Beverage {
    cost() {
        return 0;
    }
}

// Клас конкретного напою: кава
class Coffee extends Beverage {
    cost() {
        return 5;
    }
}

class Milk extends Beverage {
    constructor(beverage) {
        super();
        this.beverage = beverage;
    }

    cost() {
        return this.beverage.cost() + 2;
    }
}

class Sugar extends Beverage {
    constructor(beverage) {
        super();
        this.beverage = beverage;
    }

    cost() {
        return this.beverage.cost() + 1;
    }
}

function main() {
    // Створюємо базовий напій - каву
    const coffee = new Coffee();

    // Додаємо молоко до кави
    const coffeeWithMilk = new Milk(coffee);

    // Додаємо цукор до кави з молоком
    const coffeeWithMilkAndSugar = new Sugar(coffeeWithMilk);

    console.log("Cost of Coffee: $" + coffee.cost());
    console.log("Cost of Coffee with Milk: $" + coffeeWithMilk.cost());
    console.log("Cost of Coffee with Milk and Sugar: $" + coffeeWithMilkAndSugar.cost());
}

main();
