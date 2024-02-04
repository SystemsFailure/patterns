// Iterator паттерн - это поведенческий паттерн, 
// который предоставляет способ последовательного доступа к 
// элементам составного объекта, без раскрытия его внутренней структуры. 
// Таким образом, позволяет работать с элементами составного объекта, 
// не зная его внутренней реализации.

// Пример реализации и использования Iterator паттерна в TypeScript без сторонних пакетов:

// Интерфейс итератора
interface Iterator<T> {
    next(): IteratorResult_<T>;
    return?(value?: any): IteratorResult_<T>;
    throw?(e?: any): IteratorResult_<T>;
  }
  
  interface IteratorResult_<T> {
    value: T;
    done: boolean;
  }
  
  
  // Интерфейс итератора
  interface Iterator<T> {
    next(): IteratorResult_<T>;
  }
  
  interface IteratorResult_<T> {
    value: T;
    done: boolean;
  }
  
  // Класс коллекции
  class Collection<T> {
    private items: T[];
  
    constructor(items: T[]) {
      this.items = items;
    }
  
    public createIterator(): Iterator<T> {
      return new CollectionIterator(this);
    }
  
    public getItems(): T[] {
      return this.items;
    }
  }
  
  // Класс итератора коллекции
  class CollectionIterator<T> implements Iterator<T> {
    private collection: Collection<T>;
    private index: number;
  
    constructor(collection: Collection<T>) {
      this.collection = collection;
      this.index = 0;
    }
  
    public next(): IteratorResult_<T> {
      const value = this.collection.getItems()[this.index];
      const done = this.index >= this.collection.getItems().length;
      this.index++;
      return { value, done };
    }
  }
  
  // Пример использования
  const collection = new Collection<number>([1, 2, 3, 4, 5]);
  const iterator = collection.createIterator();
  
  let result = iterator.next();
  while (!result.done) {
    console.log(result.value); // Последовательный вывод элементов коллекции
    result = iterator.next();
  }

// PS

// В данном примере у нас есть класс Collection, представляющий коллекцию элементов. 
// У этого класса есть метод createIterator(), который создает объект 
// CollectionIterator, реализующий интерфейс Iterator. CollectionIterator 
// последовательно обходит элементы коллекции при помощи методов hasNext() и next().

// В основной части кода мы создаем экземпляр коллекции и итератора, 
// а затем последовательно получаем и выводим элементы коллекции при помощи итератора.