// "Visitor (посетитель) - это поведенческий паттерн проектирования, 
// который позволяет добавлять новые операции к объектам без изменения их классов. 
// Он представляет собой способ разделения алгоритма от структуры объекта, 
// на котором он оперирует.

// Пример реализации и использования паттерна Visitor в TypeScript:


// Абстрактный класс элемента
abstract class Element_ {
    abstract accept(visitor: Visitor): void;
  }
  
  // Класс конкретного элемента A
  class ConcreteElementA extends Element_ {
    accept(visitor: Visitor): void {
      visitor.visitConcreteElementA(this);
    }
  
    operationA(): void {
      console.log("Operation A of Concrete Element A");
    }
  }
  
  // Класс конкретного элемента B
  class ConcreteElementB extends Element_ {
    accept(visitor: Visitor): void {
      visitor.visitConcreteElementB(this);
    }
  
    operationB(): void {
      console.log("Operation B of Concrete Element B");
    }
  }
  
  // Абстрактный класс посетителя
  abstract class Visitor {
    abstract visitConcreteElementA(elementA: ConcreteElementA): void;
    abstract visitConcreteElementB(elementB: ConcreteElementB): void;
  }
  
  // Конкретный посетитель
  class ConcreteVisitor implements Visitor {
    visitConcreteElementA(elementA: ConcreteElementA): void {
      console.log("Visitor is operating on Concrete Element A");
      elementA.operationA();
    }
  
    visitConcreteElementB(elementB: ConcreteElementB): void {
      console.log("Visitor is operating on Concrete Element B");
      elementB.operationB();
    }
  }
  
  // Клиентский код
  const elements: Element_[] = [
    new ConcreteElementA(),
    new ConcreteElementB()
  ];
  
  const visitor: Visitor = new ConcreteVisitor();
  
  // Использование паттерна Visitor
  elements.forEach((element) => {
    element.accept(visitor);
  });

// PS

// В данном примере паттерн Visitor позволяет добавлять новые операции 
// (методы) к объектам (элементам) без изменения их классов. 
// Абстрактный класс Element объявляет метод accept, который принимает посетителя (Visitor). 
// Классы ConcreteElementA и ConcreteElementB реализуют этот метод и вызывают соответствующий метод посетителя, чтобы передать управление ему. 
// Класс Visitor объявляет методы visitConcreteElementA и visitConcreteElementB, 
// представляющие операции, которые могут быть выполнены над элементами. 
// Класс ConcreteVisitor реализует эти методы и выполняет необходимые действия над элементами.

// Благодаря использованию паттерна Visitor, новые операции могут 
// быть добавлены в посетитель без изменения классов элементов. 
// Клиентский код создает набор элементов и посетителя, и затем применяет посетителя ко всем элементам. 
// Каждый элемент принимает посетителя и передает управление в соответствующий метод посетителя для выполнения операции.