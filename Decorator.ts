// Decorator (или Декоратор) — это структурный паттерн проектирования, 
// который позволяет добавлять новые поведения 
// объектам во время выполнения, оборачивая их в объекты-обёртки.

// Пример реализации и использования Decorator паттерна в TypeScript без сторонних пакетов:

// Базовый класс, который будет декорироваться
class Car {
    getPrice(): number {
      return 10000;
    }
  
    getDescription(): string {
      return 'Basic car';
    }
}
  
// Базовый декоратор, который может оборачивать Car и добавлять новое поведение
class CarDecorator extends Car {
    decoratedCar: Car;
  
    constructor(decoratedCar: Car) {
      super();
      this.decoratedCar = decoratedCar;
    }
  
    getPrice(): number {
      return this.decoratedCar.getPrice();
    }
  
    getDescription(): string {
      return this.decoratedCar.getDescription();
    }
}
  
  // Конкретный декоратор, который добавляет новое поведение к Car
class ElectricCarDecorator extends CarDecorator {
    constructor(decoratedCar: Car) {
      super(decoratedCar);
    }
  
    getPrice(): number {
      return super.getPrice() + 5000;
    }
  
    getDescription(): string {
      return super.getDescription() + ', electric car';
    }
}
  
// Использование
const basicCar = new Car();
console.log(basicCar.getPrice()); // Output: 10000
console.log(basicCar.getDescription()); // Output: Basic car

const electricCar = new ElectricCarDecorator(basicCar);
console.log(electricCar.getPrice()); // Output: 15000
console.log(electricCar.getDescription()); // Output: Basic car, electric car

// PS

// В данном примере у нас есть базовый класс Car, который будем декорировать. 
// У него есть два метода `getPrice()` и `getDescription()`. 
// Затем у нас есть базовый декоратор CarDecorator, который также имеет методы `getPrice()` и `getDescription()`, 
// но он также имеет поле decoratedCar, в которое помещается объект класса 
// Car, который будет оборачиваться. Затем у нас есть конкретный декоратор 
// ElectricCarDecorator, который расширяет CarDecorator и добавляет новое поведение. 
// В данном случае, он увеличивает цену на 5000 и добавляет к описанию "electric car".

// В использовании мы создаем объект базового Car и выводим его цену и описание. 
// Затем мы создаем экземпляр ElectricCarDecorator, оборачивая в него базовый 
// Car, и снова выводим его цену и описание. В результате мы получаем измененную 
// цену и описание благодаря использованию Decorator паттерна.