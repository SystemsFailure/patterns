// Prototype (Прототип) - это паттерн проектирования, 
// который позволяет создавать объекты путем клонирования существующего объекта-прототипа. 
// Это позволяет избежать создания объектов, требующих сложной инициализации, 
// и тем самым увеличивает производительность и упрощает создание новых объектов.

// Пример реализации и использования Prototype паттерна в 
// TypeScript:Prototype (Прототип) - это паттерн проектирования, 
// который позволяет создавать объекты путем клонирования существующего объекта-прототипа. 
// Это позволяет избежать создания объектов, требующих сложной инициализации, и тем самым 
// увеличивает производительность и упрощает создание новых объектов.

// Пример реализации и использования Prototype паттерна в TypeScript:

// Базовый класс/прототип
class Shape {
    type: string;
  
    constructor() {
      this.type = "";
    }
  
    // Метод клонирования
    clone(): any {
      const clone:ObjectConstructor = Object.create(this);
      // Так как наследование в TypeScript не клонирует свойства, мы присваиваем их с помощью Object.assign
      return Object.assign(clone, this);
    }
  }
  
  interface newCircle {
    radius: number,
    type: string
  }
  // Конкретный класс, наследующий прототип
  class Circle extends Shape {
    radius: number;
  
    constructor(radius: number) {
      super();
      this.type = "Circle";
      this.radius = radius;
    }
  }
  
  // Использование
  const circlePrototype: Circle = new Circle(5); // Создаем объект-прототип (круг)
  const circleClone: newCircle = circlePrototype.clone(); // Клонируем объект-прототип
  console.log(circleClone.type); // Выводит "Circle"
  console.log(circleClone.radius); // Выводит "5"

// PS

// В данном примере класс `Shape` является базовым классом-прототипом, 
// а класс `Circle` наследует этот прототип и добавляет свое уникальное свойство 
// `radius`. Класс `Circle` реализует метод `clone()`, который создает копию объекта-прототипа с 
// помощью `Object.create()` и копирует его свойства с помощью `Object.assign()`. 

// Затем мы создаем объект-прототип `circlePrototype` и клонируем его в переменную `circleClone`, 
// получив таким образом новый объект `Circle` с теми же свойствами. В консоли выводим тип и радиус 
// клонированного объекта, которые должны быть идентичными копии исходного прототипа.
