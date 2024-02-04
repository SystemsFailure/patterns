// "Bridge (мост) - это структурный паттерн проектирования, 
// который отделяет абстракцию от её реализации, позволяя 
// изменять их независимо друг от друга. Он используется, 
// когда есть несколько параллельных иерархий классов, и 
// каждая иерархия может быть изменена независимо от другой.

// Пример реализации и использования паттерна Bridge в TypeScript:

// Абстракция
abstract class Abstraction {
    protected implementation: Implementation;
  
    constructor(implementation: Implementation) {
      this.implementation = implementation;
    }
  
    abstract operation(): void;
  }
  
  // Реализация
  interface Implementation {
    operationImplementation(): void;
  }
  
  // Конкретная реализация 1
  class ConcreteImplementation1 implements Implementation {
    operationImplementation(): void {
      console.log('ConcreteImplementation1 operation');
    }
  }
  
  // Конкретная реализация 2
  class ConcreteImplementation2 implements Implementation {
    operationImplementation(): void {
      console.log('ConcreteImplementation2 operation');
    }
  }
  
  // Конкретная абстракция 1
  class ConcreteAbstraction1 extends Abstraction {
    operation(): void {
      console.log('ConcreteAbstraction1 operation');
      this.implementation.operationImplementation();
    }
  }
  
  // Конкретная абстракция 2
  class ConcreteAbstraction2 extends Abstraction {
    operation(): void {
      console.log('ConcreteAbstraction2 operation');
      this.implementation.operationImplementation();
    }
  }
  
  // Клиентский код
  const implementation1: Implementation = new ConcreteImplementation1();
  const abstraction1: Abstraction = new ConcreteAbstraction1(implementation1);
  abstraction1.operation();
  
  const implementation2: Implementation = new ConcreteImplementation2();
  const abstraction2: Abstraction = new ConcreteAbstraction2(implementation2);
  abstraction2.operation();

//   PS


// В данном примере паттерн Bridge используется для разделения
// абстракции (Abstraction) и реализации (Implementation). 
// У абстракции есть ссылка на реализацию, и она делегирует 
// вызовы реализации. Конкретные реализации (ConcreteImplementation1 и ConcreteImplementation2) предоставляют различную функциональность, 
// а конкретные абстракции (ConcreteAbstraction1 и ConcreteAbstraction2) 
// используют эту функциональность, расширяя или изменяя её по своему усмотрению. 
// Благодаря использованию паттерна Bridge, абстракция и 
// реализация могут изменяться независимо друг от друга."