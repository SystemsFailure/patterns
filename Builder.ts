// Builder паттерн — это порождающий паттерн проектирования, 
// который используется для пошагового создания сложных объектов. 
// Он позволяет разделить процесс создания объекта от его представления, 
// так что один и тот же процесс создания может быть использован для создания разных представлений.

// Пример реализации Builder паттерна в TypeScript:

class Product {
    private name: string;
    private type: string;
    private price: number;
  
    constructor(builder: ProductBuilder) {
      this.name = builder.getName();
      this.type = builder.getType();
      this.price = builder.getPrice();
    }
  
    public getName(): string {
      return this.name;
    }
  
    public getType(): string {
      return this.type;
    }
  
    public getPrice(): number {
      return this.price;
    }
  }
  
  class ProductBuilder {
    private name: string;
    private type: string;
    private price: number;
  
    public setName(name: string): void {
      this.name = name;
    }
  
    public setType(type: string): void {
      this.type = type;
    }
  
    public setPrice(price: number): void {
      this.price = price;
    }
  
    public build(): Product {
      return new Product(this);
    }
  
    public getName(): string {
      return this.name;
    }
  
    public getType(): string {
      return this.type;
    }
  
    public getPrice(): number {
      return this.price;
    }
  }
  
// Пример использования Builder паттерна
const productBuilder = new ProductBuilder();

productBuilder.setName("Ноутбук");
productBuilder.setType("Электроника");
productBuilder.setPrice(1000);

const product = productBuilder.build();
console.log(product.getName()); // Ноутбук
console.log(product.getType()); // Электроника
console.log(product.getPrice()); // 1000

// PS

// В данном примере класс `Product` является сложным объектом, 
// который создается с помощью Builder класса 
// `ProductBuilder`. `ProductBuilder` позволяет пошагово устанавливать значения 
// свойств объекта `Product`. Метод `build()` возвращает готовый объект `Product`.

// Этот подход позволяет создавать объекты `Product` в декларативном 
// стиле и легко добавлять или изменять шаги создания объекта. 
// Также, благодаря Builder паттерну, мы можем создавать разные 
// представления объекта `Product`, не изменяя его класс.