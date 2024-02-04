// Template Method (шаблонный метод) - это поведенческий паттерн проектирования, 
// который определяет скелет алгоритма в базовом классе, оставляя реализацию некоторых шагов подклассам. 
// Шаблонный метод позволяет классам-наследникам переопределять определенные шаги алгоритма, не изменяя 
// его общей структуры.

// Пример реализации и использования шаблонного метода в TypeScript:

abstract class AbstractClass {
    // Шаблонный метод, который определяет общую структуру алгоритма
    public templateMethod(): void {
        this.stepOne();
        this.stepTwo();
        this.stepThree();
    }

    // Абстрактные методы, которые должны быть реализованы в подклассах
    protected abstract stepOne(): void;
    protected abstract stepTwo(): void;
    protected abstract stepThree(): void;
}

class ConcreteClass extends AbstractClass {
    // Реализация абстрактных методов
    protected stepOne(): void {
        console.log("Шаг 1");
    }

    protected stepTwo(): void {
        console.log("Шаг 2");
    }

    protected stepThree(): void {
        console.log("Шаг 3");
    }
}

// Использование
const concreteClass = new ConcreteClass();
concreteClass.templateMethod();

// PS



// В данном примере `AbstractClass` - это базовый класс с шаблонным методом `templateMethod()`, 
// который определяет общую структуру алгоритма и вызывает абстрактные методы 
// `stepOne()`, `stepTwo()` и `stepThree()`. Класс `ConcreteClass` наследуется от 
// `AbstractClass` и реализует эти абстрактные методы в соответствии с конкретными 

// Шаг 1
// Шаг 2
// Шаг 3

// Таким образом, шаблонный метод позволяет определить общую структуру алгоритма в базовом классе, 
// а конкретные шаги делегировать подклассам, что упрощает расширение и изменение функциональности алгоритма.