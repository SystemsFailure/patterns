// Event Handler (обработчик событий) - это паттерн 
// проектирования, который позволяет реализовать 
// механизм обработки событий и управления подписчиками 
// на эти события. Он позволяет связать производителя событий 
// (эмиттер) с его потребителями (обработчиками) и обеспечивает 
// независимость эмиттера от конкретных обработчиков.

// Вот пример реализации Event Handler паттерна на TypeScript:

// Определение типа события и его обработчика
type EventHandler<T> = (data: T) => void;

// Класс для управления подписчиками на событие
class EventEmitter<T> {
  private subscribers: EventHandler<T>[] = [];

  // Метод для подписки на событие
  public subscribe(handler: EventHandler<T>): void {
    this.subscribers.push(handler);
  }
  
  // Метод для отписки от события
  public unsubscribe(handler: EventHandler<T>): void {
    const index = this.subscribers.indexOf(handler);
    if (index !== -1) {
      this.subscribers.splice(index, 1);
    }
  }

  // Метод для эмитирования события
  public emit(data: T): void {
    this.subscribers.forEach((handler) => handler(data));
  }
}

// Пример использования Event Handler

// Определение типа данных для события
type LogEventData = {
  message: string;
  timestamp: Date;
};

// Создание экземпляра EventEmitter
const logEventEmitter = new EventEmitter<LogEventData>();

// Обработчик события
const logEventHandler: EventHandler<LogEventData> = (data) => {
  console.log(`[${data.timestamp.toISOString()}] ${data.message}`);
};

// Подписка на событие
logEventEmitter.subscribe(logEventHandler);

// Эмитирование события
logEventEmitter.emit({
  message: 'Hello, world!',
  timestamp: new Date(),
});

// Отписка от события
logEventEmitter.unsubscribe(logEventHandler);


// В этом примере определен тип данных `LogEventData` для события, 
// создан класс `EventEmitter` для управления подписчиками и 
// эмитирования событий, а также объявлен обработчик `logEventHandler` 
// для события. После подписки на событие и эмитирования его, 
// обработчик будет вызываться и выводить сообщение в консоль. 
// Также в примере приведен способ отписки от события.