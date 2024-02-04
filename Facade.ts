// Паттерн Facade (или Фасад) является структурным 
// паттерном проектирования, который предоставляет 
// унифицированный интерфейс для набора интерфейсов в подсистеме. 
// Facade позволяет скрыть сложность системы, предоставляя простой интерфейс 
// для взаимодействия с ней.

// Пример реализации Facade паттерна в TypeScript:

// Подсистема компонентов

class Subsystem1 {
  public operation1(): void {
    console.log('Subsystem1: выполнение операции 1');
  }

  public operation2(): void {
    console.log('Subsystem1: выполнение операции 2');
  }
}

class Subsystem2 {
  public operation1(): void {
    console.log('Subsystem2: выполнение операции 1');
  }

  public operation2(): void {
    console.log('Subsystem2: выполнение операции 2');
  }
}

// Фасад

class Facade {
  private subsystem1: Subsystem1;
  private subsystem2: Subsystem2;

  constructor(subsystem1: Subsystem1 = new Subsystem1(), subsystem2: Subsystem2 = new Subsystem2()) {
      this.subsystem1 = subsystem1;
      this.subsystem2 = subsystem2;
  }

  public operation(): void {
    console.log('Фасад: выполнение операций');
    this.subsystem1.operation1();
    this.subsystem1.operation2();
    this.subsystem2.operation1();
    this.subsystem2.operation2();
  }
}

// Использование

const facade = new Facade();
facade.operation();

// PS


// В данном примере мы имеем подсистему компонентов, представленную 
// классами Subsystem1 и Subsystem2. 
// Фасад (Facade) скрывает сложность подсистемы и предоставляет простой интерфейс для взаимодействия с ней. 
// Класс Facade оборачивает вызовы методов подсистемы и предоставляет метод operation(), 
// который выполняет серию операций на подсистеме.

// При использовании Facade паттерна мы получаем простой и 
// понятный интерфейс для работы с сложной подсистемой, не вдаваясь в детали ее реализации.