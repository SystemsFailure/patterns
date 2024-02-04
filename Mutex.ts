// Mutex (мьютекс) - это шаблон проектирования, 
// который используется для синхронизации доступа к общему ресурсу. 
// Он обеспечивает эксклюзивное владение ресурсом только одним потоком или процессом, 
// и остальным потокам или процессам необходимо ожидать, пока ресурс не будет освобожден.

// Пример реализации Mutex в TypeScript без сторонних пакетов:

class Mutex {
  private locked: boolean;

  constructor() {
    this.locked = false;
  }

  public lock(): Promise<void> {
    return new Promise<void>((resolve) => {
      const checkLock = () => {
        if (!this.locked) {
          this.locked = true;
          resolve();
        } else {
          setTimeout(checkLock, 10); // Ожидаем освобождения ресурса
        }
      };

      checkLock();
    });
  }

  public unlock(): void {
    this.locked = false;
  }
}

// Пример использования Mutex:

const mutex = new Mutex();

async function runCriticalSection() {
  await mutex.lock();

  try {
    // Критическая секция кода, защищенная мьютексом
    console.log('Enter critical section');
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Имитация работы с общим ресурсом
    console.log('Leave critical section');
  } finally {
    mutex.unlock();
  }
}

runCriticalSection();
runCriticalSection();
runCriticalSection();

// PS


// В данном примере создается объект Mutex, после чего три вызова 
// функции `runCriticalSection` создают три асинхронных таска, 
// которые будут конкурентно пытаться получить блокировку мьютекса. 
// Эксклюзивная блокировка будет предоставлена только одному таску, 
// остальные будут ожидать освобождения ресурса.