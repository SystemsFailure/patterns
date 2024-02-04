// Multiplexer — это паттерн проектирования, который позволяет выполнить множество задач 
// с помощью одного объекта или метода. Он обеспечивает возможность передачи 
// нескольких запросов одновременно и последовательного ответа на них.

// Пример реализации Multiplexer в TypeScript:


class Multiplexer {
    private tasks: (() => void)[] = []; // Очередь задач
  
    addTask(task: () => void) {
      this.tasks.push(task);
    }
  
    executeTasks() {
      this.tasks.forEach(task => task());
      this.tasks = []; // Обнуление очереди задач
    }
  }
  
  // Пример использования Multiplexer
  const multiplexer = new Multiplexer();
  
  multiplexer.addTask(() => {
    console.log("Задача 1");
  });
  
  multiplexer.addTask(() => {
    console.log("Задача 2");
  });
  
  multiplexer.addTask(() => {
    console.log("Задача 3");
  });
  
  multiplexer.executeTasks();

// PS

// В данном примере создается класс Multiplexer, 
// который имеет методы `addTask` для добавления задачи в очередь и 
// `executeTasks` для выполнения всех задач из очереди. 
// После добавления задач в очередь, вызывается `executeTasks`, 
// который последовательно вызывает каждую задачу из очереди.

// В результате выполнения кода, будет выведено:

// Таким образом, Multiplexer позволяет выполнить 
// несколько задач последовательно с использованием одного объекта.