// "Singleton (Одиночка) - это паттерн проектирования, 
// который обеспечивает существование только одного 
// экземпляра класса во время выполнения программы.
// Он гарантирует, что для определенного класса всегда будет 
// существовать только один объект, и предоставляет глобальную 
// точку доступа к этому объекту.

// Пример реализации Singleton в TypeScript без сторонних пакетов:

class Singleton {
    private static instance: Singleton;
    private data: number;
  
    private constructor() {
      this.data = Math.random();
    }
  
    public static getInstance(): Singleton {
      if (!Singleton.instance) {
        Singleton.instance = new Singleton();
      }
      return Singleton.instance;
    }
  
    public getData(): number {
      return this.data;
    }
  }
  
// Пример использования Singleton
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1.getData()); // Выводит случайное число
console.log(instance2.getData()); // Выводит то же самое число

console.log(instance1 === instance2); // Выводит true, потому что это один и тот же объект