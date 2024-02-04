// Flyweight — это структурный паттерн проектирования, 
// который позволяет эффективно использовать общие ресурсы, 
// разделяя их между множеством объектов. Он позволяет снизить 
// затраты на память и улучшить производительность, 
// путем использования разделяемых объектов для представления схожих или одинаковых данных.

// Пример реализации Flyweight в TypeScript:

interface Flyweight {
    operation(state: string): void;
  }
  
  class ConcreteFlyweight implements Flyweight {
    private sharedState: string;
  
    constructor(sharedState: string) {
      this.sharedState = sharedState;
    }
  
    operation(state: string): void {
      console.log(`Shared state: ${this.sharedState}, Unshared state: ${state}`);
    }
  }
  
  class FlyweightFactory {
    private flyweights: { [key: string]: Flyweight } = {};
  
    getFlyweight(key: string): Flyweight {
      if (!this.flyweights[key]) {
        this.flyweights[key] = new ConcreteFlyweight(key);
      }
      return this.flyweights[key];
    }
  }
  
// Пример использования Flyweight

const factory = new FlyweightFactory();

const flyweight1 = factory.getFlyweight('key1');
flyweight1.operation('state1');

const flyweight2 = factory.getFlyweight('key1');
flyweight2.operation('state2');

const flyweight3 = factory.getFlyweight('key2');
flyweight3.operation('state3');

// PS

// В данном примере создается интерфейс `Flyweight`, 
// который определяет метод `operation`. 
// Затем создается класс `ConcreteFlyweight`, 
// реализующий интерфейс `Flyweight` и содержащий внутреннее состояние 
// `sharedState`. Класс `FlyweightFactory` отвечает за создание или 
// возврат разделяемых объектов `ConcretFlyweight` по ключу.

// В примере создается фабрика `factory`, которая создает и возвращает 
// объекты `ConcreteFlyweight` по ключу. Затем создаются три 
// объекта `flyweight1`, `flyweight2` и `flyweight3`, которые 
// вляются разделяемыми объектами. Каждый из них вызывает метод `operation`, передавая уникальное состояние.

// В результате выполнения кода будет выведено:

// Shared state: key1, Unshared state: state1
// Shared state: key1, Unshared state: state2
// Shared state: key2, Unshared state: state3

// Таким образом, Flyweight позволяет эффективно 
// использовать общие ресурсы за счет разделения их между множеством объектов.