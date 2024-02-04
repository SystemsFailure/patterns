// Null Object (Нулевой объект) - это поведенческий паттерн 
// проектирования, который предлагает использовать 
// специальный объект, чтобы предоставить замещающую реализацию в случаях, 
// когда объект ссылается на null/undefined. Он позволяет избежать проверок на наличие 
// null и упрощает обработку и использование объектов в таких случаях.

// Пример реализации Нулевого объекта в TypeScript:

// Интерфейс, определяющий общие методы для объектов
interface ILogger {
    log(message: string): void;
  }
  
  // Реализация обычного объекта
  class ConsoleLogger implements ILogger {
    log(message: string): void {
      console.log(message);
    }
  }
  
  // Реализация нулевого объекта
  class NullLogger implements ILogger {
    log(message: string): void {
      // Пустая реализация - ничего не делаем
    }
  }
  
// Пример использования

function processLogger(logger: ILogger | null): void {
// Вызываем метод log, не беспокоясь о наличии или отсутствии logger
logger?.log("Logging message");
}

const consoleLogger = new ConsoleLogger();
const nullLogger = new NullLogger();

processLogger(consoleLogger); // Выведет "Logging message" в консоль
processLogger(nullLogger); // Ничего не выведет

// Можно также использовать нулевой объект вместо null

let logger: ILogger = new ConsoleLogger();
logger.log("Logging message"); // Выведет "Logging message" в консоль

logger = nullLogger;
logger.log("Logging message"); // Ничего не выведет


// PS

// В данном примере создаются две реализации интерфейса ILogger: ConsoleLogger и NullLogger. 
// ConsoleLogger выполняет реальные действия, записывая сообщения в консоль, 
// а NullLogger предоставляет пустую реализацию метода log.

// В функции processLogger принимается объект типа ILogger или null. 
// С помощью опциональной цепочки вызовов (`logger?.log("Logging message")`) 
// мы вызываем метод log объекта logger, если он существует и не равен null.

// В результате, при передаче ConsoleLogger в processLogger будет выведено 
// ообщение в консоль, а при передаче NullLogger - ничего не произойдет, ошибка 
// null-reference не возникнет.

// Паттерн Нулевой объект полезен при работе с объектами, которые могут быть null/undefined, 
// таким образом избегая множественных проверок на наличие null и 
// делая код более надежным и легко поддерживаемым.