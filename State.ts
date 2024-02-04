// State паттерн — это поведенческий паттерн, 
// который позволяет объектам менять своё поведение в зависимости от своего состояния. 
// Паттерн позволяет избежать создания громоздких условных операторов при изменении 
// состояний и делает код более читаемым и расширяемым.

// Пример реализации State паттерна в TypeScript без сторонних пакетов:

// Абстрактный класс состояния
abstract class State {
    protected context: Context;
  
    constructor(context: Context) {
      this.context = context;
    }
  
    public abstract handle(): void;
  }
  
  // Классы конкретных состояний
  class ConcreteStateA extends State {
    public handle(): void {
      console.log('Работа в режиме A');
      this.context.setState(new ConcreteStateB(this.context));
    }
  }
  
  class ConcreteStateB extends State {
    public handle(): void {
      console.log('Работа в режиме B');
      this.context.setState(new ConcreteStateA(this.context));
    }
  }
  
  // Класс контекста
  class Context {
    private state: State;
  
    constructor() {
      this.state = new ConcreteStateA(this);
    }
  
    public setState(state: State): void {
      this.state = state;
    }
  
    public request(): void {
      this.state.handle();
    }
  }
  
  // Пример использования
  const context = new Context();
  
  context.request(); // Работа в режиме A
  context.request(); // Работа в режиме B
  context.request(); // Работа в режиме A

// PS

// В данном примере мы имеем абстрактный класс `State` и два конкретных класса состояний 
// `ConcreteStateA` и `ConcreteStateB`. Класс `Context` является контекстом 
// работы и имеет в себе возможность установить состояние. При вызове метода 
// `request` текущее состояние контекста обрабатывается внутри класса состояния.