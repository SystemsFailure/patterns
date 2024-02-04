// Chain of Responsibility (цепочка обязанностей) - это поведенческий 
// паттерн проектирования, который позволяет передавать запрос по цепочке 
// потенциальных обработчиков, пока один из них не обработает запрос.

// В данном паттерне каждый обработчик содержит ссылку на следующий обработчик. 
// Когда запрос приходит, он передается первому обработчику, и если текущий обработчик 
// не способен обработать запрос, он передает его следующему обработчику из цепочки. 
// Этот процесс продолжается до тех пор, пока запрос не будет обработан или пока не 
// достигнут конец цепочки.

// Пример реализации и использования паттерна "Chain of Responsibility" в TypeScript:

abstract class Handler {
  private nextHandler: Handler | null = null;

  setNext(handler: Handler): void {
    this.nextHandler = handler;
  }

  handleRequest(request: string): void {
    if (this.canHandle(request)) {
      this.handle(request);
    } else if (this.nextHandler) {
      this.nextHandler.handleRequest(request);
    } else {
      console.log(`Request cannot be handled.`);
    }
  }

  abstract canHandle(request: string): boolean;
  abstract handle(request: string): void;
}

class ConcreteHandlerA extends Handler {
  canHandle(request: string): boolean {
    return request === "A";
  }

  handle(request: string): void {
    console.log(`ConcreteHandlerA handles request: ${request}`);
  }
}

class ConcreteHandlerB extends Handler {
  canHandle(request: string): boolean {
    return request === "B";
  }
  
  handle(request: string): void {
    console.log(`ConcreteHandlerB handles request: ${request}`);
  }
}

class ConcreteHandlerC extends Handler {
  canHandle(request: string): boolean {
    return request === "C";
  }
  
  handle(request: string): void {
    console.log(`ConcreteHandlerC handles request: ${request}`);
  }
}

// Пример использования

const handlerA = new ConcreteHandlerA();
const handlerB = new ConcreteHandlerB();
const handlerC = new ConcreteHandlerC();

handlerA.setNext(handlerB);
handlerB.setNext(handlerC);

handlerA.handleRequest("B");
handlerA.handleRequest("C");
handlerA.handleRequest("D");

// Результат выполнения:

// ConcreteHandlerB handles request: B
// ConcreteHandlerC handles request: C
// Request cannot be handled.

// PS


// В данном примере есть три конкретных обработчика: ConcreteHandlerA, 
// ConcreteHandlerB и ConcreteHandlerC. Они наследуются от абстрактного 
// класса Handler, который реализует метод handleRequest для передачи 
// запросов по цепочке.

// Мы создаем экземпляры обработчиков и устанавливаем связи между ними 
// с помощью метода setNext. Затем мы вызываем метод handleRequest у 
// первого обработчика, передавая ему запрос. Request проходит по цепочке, 
// пока не будет обработан или пока не достигнут конец цепочки