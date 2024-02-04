// "Proxy паттерн (прокси) является одним из структурных паттернов проектирования, который предоставляет объект-заместитель или обертку для другого объекта, контролируя доступ к нему и позволяя выполнять дополнительные операции до или после вызова методов на основном объекте.
// Прокси-объект может использоваться для различных целей, таких как: ограничение доступа, кеширование результатов, ленивая загрузка, логирование, аутентификация и др.

// Пример реализации и использования Proxy паттерна без сторонних пакетов на языке TypeScript:

interface Image {
    display(): void;
}

class RealImage implements Image {
    private readonly filename: string;
  
    constructor(filename: string) {
      this.filename = filename;
      this.loadImageFromDisk();
    }
  
    private loadImageFromDisk(): void {
      console.log(`Loading image from disk: ${this.filename}`);
    }
  
    display(): void {
      console.log(`Displaying image: ${this.filename}`);
    }
}

// Здесь мы оборачиваем объект realImage в proxy  
class ImageProxy implements Image {
    private realImage: RealImage | null = null;
    private readonly filename: string;
  
    constructor(filename: string) {
      this.filename = filename;
    }
  
    display(): void {
      if (this.realImage === null) {
        this.realImage = new RealImage(this.filename);
      }
      this.realImage.display();
    }
  }

// Использование

function main() : void {
    const image1 = new ImageProxy('image1.jpg');
    image1.display(); // RealImage будет загружен и отображен
    image1.display(); // RealImage уже загружен, будет только отображен
    
    const image2 = new ImageProxy('image2.jpg');
    image2.display(); // RealImage будет загружен и отображен
}

// Таким образом, Proxy паттерн позволяет контролировать доступ к объектам и 
// добавлять дополнительную логику до или после вызовов методов на основном объекте