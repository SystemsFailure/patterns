// Object Pool (объектный пул) - это паттерн 
// проектирования, который используется для управления 
// пулом заранее созданных объектов и предоставления 
// их повторного использования. Вместо создания и уничтожения 
// объектов при каждом запросе, объектный пул хранит заранее созданные 
// объекты и предоставляет их при необходимости.

// Ниже представлен пример реализации Object Pool в TypeScript:


class ObjectPool {
  private pool: any[];
  private size: number;

  constructor(size: number) {
    this.pool = [];
    this.size = size;

    // Заполняем пул объектами
    for (let i = 0; i < size; i++) {
      this.pool.push(this.createInstance());
    }
  }

  private createInstance() {
    // Создаем новый объект
    return {
      id: Math.random(),
    };
  }

  public acquire(): any {
    if (this.pool.length > 0) {
      // Если в пуле есть свободный объект, возвращаем его
      return this.pool.pop();
    } else {
      // Если пул пуст, создаем новый объект
      return this.createInstance();
    }
  }

  public release(instance: any) {
    // Возвращаем объект в пул
    this.pool.push(instance);
  }
}

// Пример использования

const pool = new ObjectPool(5);

const obj1 = pool.acquire();
console.log(obj1); // { id: 0.12345 }

const obj2 = pool.acquire();
console.log(obj2); // { id: 0.54321 }

// Возвращаем объекты в пул
pool.release(obj1);
pool.release(obj2);

const obj3 = pool.acquire();
console.log(obj3); // { id: 0.54321 } - объект obj2 был повторно использован из пула

// PS


// В данном примере создается пул объектов (`ObjectPool`), в 
// котором хранится заранее созданное количество объектов (`size`). 
// При запросе объекта методом `acquire()` проверяется наличие свободных объектов в пуле. 
// Если такие имеются, то один из них извлекается из пула и возвращается. 
// Если пул пуст, создается новый объект с помощью метода `createInstance()`. 
// При использовании объекта его необходимо вернуть в пул с помощью метода `release()`.