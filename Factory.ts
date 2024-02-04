// "Фабричный метод (Factory Method) - это паттерн проектирования, который предоставляет интерфейс 
// для создания объектов, но позволяет подклассам решать, какие классы инстанцировать. 
// Фабричный метод делегирует создание объектов подклассам.

// Пример реализации и использования Factory паттерна без сторонних пакетов на языке TypeScript:

//  интерфейс `Product` определяет метод `doSomething()`, который будет реализован в конкретных продуктах.
interface Product {
    doSomething(): void;
}

// `ConcreteProductA` и `ConcreteProductB` - это конкретные продукты, которые реализуют интерфейс `Product`.
class ConcreteProductA implements Product {
    doSomething(): void {
      console.log("Product A is doing something.");
    }
}
class ConcreteProductB implements Product {
    doSomething(): void {
      console.log("Product B is doing something.");
    }
}

// `Creator` - это абстрактный класс, который определяет метод `createProduct()`, 
// который должны реализовать конкретные создатели. Метод `someOperation()` использует 
// возвращаемый продукт `createProduct()` для выполнения определенных операций.
abstract class Creator {
    abstract createProduct(): Product;
  
    someOperation(): void {
      const product = this.createProduct();
      product.doSomething();
    }
}

// `ConcreteCreatorA` и `ConcreteCreatorB` - это конкретные создатели, которые реализуют метод 
// `createProduct()`, чтобы создать экземпляры конкретных продуктов.
class ConcreteCreatorA extends Creator {
    createProduct(): Product {
      return new ConcreteProductA();
    }
}
class ConcreteCreatorB extends Creator {
    createProduct(): Product {
      return new ConcreteProductB();
    }
}
  
// Использование

const creatorA = new ConcreteCreatorA();
creatorA.someOperation(); // Создаст и использовать ConcreteProductA

const creatorB = new ConcreteCreatorB();
creatorB.someOperation(); // Создаст и использовать ConcreteProductB
  