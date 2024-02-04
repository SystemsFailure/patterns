// Interpreter (Интерпретатор) - это поведенческий 
// паттерн проектирования, который определяет 
// способ интерпретации предложенного языка 
// или грамматики, представляя её в виде предметно-ориентированного объекта.

// Пример реализации паттерна Interpreter в TypeScript:


interface Expression {
    interpret(): number;
  }
  
  class NumberExpression implements Expression {
    private num: number;
  
    constructor(num: number) {
      this.num = num;
    }
  
    interpret(): number {
      return this.num;
    }
  }
  
  class AddExpression implements Expression {
    private leftExpression: Expression;
    private rightExpression: Expression;
  
    constructor(leftExpression: Expression, rightExpression: Expression) {
      this.leftExpression = leftExpression;
      this.rightExpression = rightExpression;
    }
  
    interpret(): number {
      return this.leftExpression.interpret() + this.rightExpression.interpret();
    }
  }
  
  class SubtractExpression implements Expression {
    private leftExpression: Expression;
    private rightExpression: Expression;
  
    constructor(leftExpression: Expression, rightExpression: Expression) {
      this.leftExpression = leftExpression;
      this.rightExpression = rightExpression;
    }
  
    interpret(): number {
      return this.leftExpression.interpret() - this.rightExpression.interpret();
    }
  }
  
// Пример использования паттерна Interpreter
const expression: Expression = new SubtractExpression(
new AddExpression(new NumberExpression(10), new NumberExpression(5)),
new NumberExpression(2)
);

const result: number = expression.interpret();
console.log(result); // Output: 13

// PS

// В данном примере мы создаем интерфейс `Expression`, 
// представляющий выражение, которое может быть интерпретировано. 
// Затем создаем конкретные классы, представляющие числа и операции над числами.

// Для выражения "10 + 5 - 2" мы создаем объекты классов 
// `NumberExpression` и `AddExpression`, затем передаем их в конструктор класса 
// `SubtractExpression`. Вызов метода `interpret()` на объекте класса `SubtractExpression` 
// производит интерпретацию выражения и возвращает результат.

// Результат интерпретации выражения равен 13, что и выводится в консоль.