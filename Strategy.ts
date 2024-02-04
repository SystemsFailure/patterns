// Стратегия (Strategy) - это поведенческий паттерн проектирования, 
// который позволяет определить семейство алгоритмов, инкапсулировать каждый из них и сделать их 
// взаимозаменяемыми. Таким образом, можно изменять алгоритмы независимо от клиента, который их использует.

// Пример реализации и использования паттерна Strategy на языке TypeScript:

// Интерфейс стратегии
interface SortingStrategy {
    sort(data: number[]): number[];
}
  
  // Первая стратегия сортировки - сортировка пузырьком
class BubbleSortStrategy implements SortingStrategy {
    sort(data: number[]): number[] {
      // Реализация сортировки пузырьком
      return sortedData;
    }
}
  
  // Вторая стратегия сортировки - быстрая сортировка
class QuickSortStrategy implements SortingStrategy {
    sort(data: number[]): number[] {
      // Реализация быстрой сортировки
      return sortedData;
    }
}
  
  // Клиентский класс, который использует стратегию сортировки
class Sorter {
    private sortingStrategy: SortingStrategy;
  
    constructor(sortingStrategy: SortingStrategy) {
      this.sortingStrategy = sortingStrategy;
    }
  
    sortData(data: number[]): number[] {
      return this.sortingStrategy.sort(data);
    }
}

// Использование паттерна Strategy
const dataToSort = [5, 2, 8, 1, 7];
const bubbleSort = new BubbleSortStrategy();
const sorter = new Sorter(bubbleSort);
const sortedData = sorter.sortData(dataToSort);
console.log(sortedData);