// Abstract Factory (Абстрактная Фабрика) - это паттерн проектирования, 
// который обеспечивает создание семейств связанных или зависимых объектов 
// без указания их конкретных классов. Он использует интерфейсы и абстрактные 
// классы для создания объектов, а не их конкретные реализации. 
// Это помогает создать гибкую и расширяемую архитектуру, которая легко может 
// меняться и добавлять новые вариации объектов.

// Пример реализации Abstract Factory в TypeScript без сторонних пакетов:


// Абстрактный класс фабрики
abstract class AbstractFactory {
    public abstract createProductA(): AbstractProductA;
    public abstract createProductB(): AbstractProductB;
  }
  
  // Абстрактный класс для продукта A
  abstract class AbstractProductA {
    public abstract display(): void;
  }
  
  // Абстрактный класс для продукта B
  abstract class AbstractProductB {
    public abstract display(): void;
  }
  
  // Конкретная фабрика, реализующая AbstractFactory
  class ConcreteFactory1 extends AbstractFactory {
    public createProductA(): AbstractProductA {
      return new ConcreteProductA1();
    }
  
    public createProductB(): AbstractProductB {
      return new ConcreteProductB1();
    }
  }
  
  // Конкретная фабрика, реализующая AbstractFactory
  class ConcreteFactory2 extends AbstractFactory {
    public createProductA(): AbstractProductA {
      return new ConcreteProductA2();
    }
  
    public createProductB(): AbstractProductB {
      return new ConcreteProductB2();
    }
  }
  
  // Конкретный продукт A1
  class ConcreteProductA1 extends AbstractProductA {
    public display(): void {
      console.log("ConcreteProductA1");
    }
  }
  
  // Конкретный продукт A2
  class ConcreteProductA2 extends AbstractProductA {
    public display(): void {
      console.log("ConcreteProductA2");
    }
  }
  
  // Конкретный продукт B1
  class ConcreteProductB1 extends AbstractProductB {
    public display(): void {
      console.log("ConcreteProductB1");
    }
  }
  
  // Конкретный продукт B2
  class ConcreteProductB2 extends AbstractProductB {
    public display(): void {
      console.log("ConcreteProductB2");
    }
  }
  
  // Пример использования Abstract Factory
  function clientCode(factory: AbstractFactory) {
    const productA = factory.createProductA();
    const productB = factory.createProductB();
    
    productA.display(); // Выводит: ConcreteProductA1 или ConcreteProductA2
    productB.display(); // Выводит: ConcreteProductB1 или ConcreteProductB2
  }
  
  // Использование первой конкретной фабрики
  const factory1 = new ConcreteFactory1();
  clientCode(factory1);
  
  // Использование второй конкретной фабрики
  const factory2 = new ConcreteFactory2();
  clientCode(factory2);