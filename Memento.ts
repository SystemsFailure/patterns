// Паттерн Memento (Снимок) позволяет сохранять и 
// восстанавливать состояние объекта без нарушения инкапсуляции.
// Он представляет собой шаблон проектирования, который позволяет зафиксировать внутреннее 
// состояние объекта, чтобы позднее можно было его восстановить.

// Пример реализации и использования паттерна Memento в TypeScript:

// Оригинальный класс, состояние которого необходимо сохранять и восстанавливать
class Originator {
  private state: string;

  getState(): string {
    return this.state;
  }

  setState(state: string): void {
    this.state = state;
  }

  // Метод для создания снимка состояния
  createMemento(): Memento {
    return new Memento(this.state);
  }

  // Метод для восстановления состояния из снимка
  restoreMemento(memento: Memento): void {
    this.state = memento.getState();
  }
}

// Класс, представляющий снимок состояния объекта
class Memento {
  private state: string;

  constructor(state: string) {
    this.state = state;
  }

  getState(): string {
    return this.state;
  }
}

// Хранитель (хранит снимок состояния)
class Caretaker {
  private mementos: Memento[] = [];

  addMemento(memento: Memento): void {
    this.mementos.push(memento);
  }

  getMemento(index: number): Memento {
    return this.mementos[index];
  }
}

// Пример использования
const originator = new Originator();
const caretaker = new Caretaker();

originator.setState("State 1");
caretaker.addMemento(originator.createMemento()); // Сохраняем состояние в снимке

originator.setState("State 2"); // Изменяем состояние

originator.restoreMemento(caretaker.getMemento(0)); // Восстанавливаем состояние из снимка

console.log(originator.getState()); // Output: State 1


// PS


// В данном примере класс `Originator` представляет объект, 
// состояние которого нужно сохранять и восстанавливать. 
// Метод `createMemento()` создает новый объект класса `Memento`, 
// а метод `restoreMemento()` восстанавливает состояние объекта из переданного снимка.

// Класс `Memento` представляет снимок состояния объекта, 
// а класс `Caretaker` представляет хранитель, который хранит снимки состояния объекта.

// В примере создается объект `Originator`, устанавливается 
// его состояние, создается снимок состояния и сохраняется в 
// хранителе `Caretaker`. После изменения состояния объекта, 
// состояние восстанавливается из снимка, и выводится результат на экран.

// Паттерн Memento позволяет более гибко управлять состоянием 
// объекта и восстанавливать его по необходимости.