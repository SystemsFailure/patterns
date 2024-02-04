// Mediator (Посредник) — это поведенческий паттерн проектирования, 
// который позволяет уменьшить взаимосвязанность множества объектов между собой, 
// исключая прямые обращения друг к другу и 
// позволяет независимо взаимодействовать множеству классов с помощью специального объекта-посредника.

// Пример реализации и использования паттерна Mediator в TypeScript:

class Mediator {
    private component1: Component1;
  
    private component2: Component2;
  
    constructor(component1: Component1, component2: Component2) {
      this.component1 = component1;
      this.component1.setMediator(this);
      this.component2 = component2;
      this.component2.setMediator(this);
    }
  
    public notify(sender: object, event: string): void {
      if (event === 'A') {
        console.log('Mediator reacts on A and triggers following operations:');
        this.component2.doC();
      }
  
      if (event === 'D') {
        console.log('Mediator reacts on D and triggers following operations:');
        this.component1.doB();
        this.component2.doC();
      }
    }
  }
  
  class BaseComponent {
    protected mediator: Mediator | null;
  
    constructor(mediator: Mediator | null = null) {
      this.mediator = mediator;
    }
  
    public setMediator(mediator: Mediator): void {
      this.mediator = mediator;
    }
  }
  
  class Component1 extends BaseComponent {
    public doA(): void {
      console.log('Component 1 does A.');
      this.mediator!.notify(this, 'A');
    }
  
    public doB(): void {
      console.log('Component 1 does B.');
      this.mediator!.notify(this, 'B');
    }
  }
  
  class Component2 extends BaseComponent {
    public doC(): void {
      console.log('Component 2 does C.');
      this.mediator!.notify(this, 'C');
    }
  
    public doD(): void {
      console.log('Component 2 does D.');
      this.mediator!.notify(this, 'D');
    }
  }
  
  // Пример использования паттерна Mediator
  
  // Создаем компоненты
  const component1 = new Component1();
  const component2 = new Component2();
  
  // Создаем посредника и связываем его с компонентами
  const mediator = new Mediator(component1, component2);
  
  // Вызываем методы компонентов
  component1.doA(); // Медиатор реагирует на A и запускает следующие операции: Component 2 does C.
  component2.doD(); // Медиатор реагирует на D и запускает следующие операции: Component 1 does B. Component 2 does C.


// PS

// В данном примере `Mediator` является посредником между `Component1` и `Component2`. 
// Каждый компонент знает о посреднике и может вызывать его метод `notify()`, 
// чтобы уведомить о каком-то событии. Посредник может реагировать 
// на различные события и запускать определенные операции, взаимодействуя с компонентами.