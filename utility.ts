// Паттерн Utility (или Утилитарный) используется 
// для создания коллекции вспомогательных функций, 
// которые могут использоваться в разных частях программы.

// Пример реализации и использования Utility паттерна в TypeScript:

// Utility класс, содержащий вспомогательные функции
class MathUtils {
  static add(a: number, b: number): number {
    return a + b;
  }

  static subtract(a: number, b: number): number {
    return a - b;
  }

  static multiply(a: number, b: number): number {
    return a * b;
  }

  static divide(a: number, b: number): number {
    return a / b;
  }
}

// Использование Utility функций
const result1 = MathUtils.add(2, 3);
console.log(result1); // Вывод: 5

const result2 = MathUtils.subtract(5, 2);
console.log(result2); // Вывод: 3

const result3 = MathUtils.multiply(4, 2);
console.log(result3); // Вывод: 8

const result4 = MathUtils.divide(10, 2);
console.log(result4); // Вывод: 5


// PS


// В этом примере мы создали класс `MathUtils`, 
// содержащий вспомогательные функции для выполнения 
// математических операций. Функции `add`, `subtract`, `multiply` и `divide` 
// принимают два числа в качестве аргументов и возвращают результат операции.

// Затем мы использовали эти функции для выполнения различных математических 
// операций и вывели результаты в консоль.

// Таким образом, паттерн Utility позволяет создавать и использовать коллекцию 
// спомогательных функций, чтобы облегчить повторяющиеся операции и улучшить переиспользуемость кода.