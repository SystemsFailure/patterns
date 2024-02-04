// Adapter (адаптер) - это структурный паттерн проектирования, 
// который позволяет объединить несовместимые интерфейсы 
// двух классов. Он позволяет объектам с несовместимыми интерфейсами работать вместе.

// Пример реализации и использования паттерна Adapter в TypeScript:

// Интерфейс внешней библиотеки
interface ThirdPartyLibrary {
    request(data: string): void;
  }
  
  // Класс внешней библиотеки
  class LegacyLibrary implements ThirdPartyLibrary {
    request(data: string): void {
      console.log(`Requesting data: ${data}`);
    }
  }
  
  // Целевой интерфейс
  interface Target {
    sendRequest(data: string): void;
  }
  
  // Адаптер, реализующий целевой интерфейс и использующий внешнюю библиотеку
  class Adapter implements Target {
    private thirdPartyLibrary: ThirdPartyLibrary;
  
    constructor() {
      this.thirdPartyLibrary = new LegacyLibrary();
    }
  
    sendRequest(data: string): void {
      // Адаптер преобразует вызов целевого метода в вызов соответствующего метода внешней библиотеки
      this.thirdPartyLibrary.request(data);
    }
  }
  
  // Клиентский код
  function clientCode(target: Target): void {
    target.sendRequest('Hello from client');
  }
  
  // Использование паттерна Adapter
  const adapter = new Adapter();
  clientCode(adapter);

// PS

// В данном примере адаптер (`Adapter`) реализует целевой 
// интерфейс (`Target`) и использует внешнюю библиотеку 
// (`ThirdPartyLibrary`), которая имеет свой собственный 
// интерфейс. Адаптер оборачивает вызов метода `sendRequest` и 
// преобразует его в вызов метода `request` внешней библиотеки (`LegacyLibrary`). 
// Благодаря использованию паттерна Adapter, объекты, работающие с интерфейсом `Target`, 
// могут использовать функциональность внешней библиотеки.