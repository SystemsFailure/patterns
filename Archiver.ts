// Archiver (Архиватор) - это паттерн проектирования, 
// используемый для упаковки и сжатия данных в архивы. 
// Этот паттерн позволяет добавлять в систему различные методы сжатия и упаковки, не меняя структуры клиентского кода.

// Пример реализации Archiver паттерна в TypeScript:

interface Compressor {
  compress(data: string): string;
}

class ZipCompressor implements Compressor {
  compress(data: string): string {
    // Здесь реализуется сжатие данных в формате ZIP
    return `ZIP compressed data: ${data}`;
  }
}

class TarCompressor implements Compressor {
  compress(data: string): string {
    // Здесь реализуется сжатие данных в формате TAR
    return `TAR compressed data: ${data}`;
  }
}

class Archiver {
  private compressor: Compressor;

  constructor(compressor: Compressor) {
    this.compressor = compressor;
  }

  compressData(data: string): string {
    return this.compressor.compress(data);
  }
}

// Пример использования
const zipCompressor = new ZipCompressor();
const tarCompressor = new TarCompressor();

const zipArchiver = new Archiver(zipCompressor);
const tarArchiver = new Archiver(tarCompressor);

const data = "Some data to compress";

console.log(zipArchiver.compressData(data)); // Вывод: "ZIP compressed data: Some data to compress"
console.log(tarArchiver.compressData(data)); // Вывод: "TAR compressed data: Some data to compress"

// PS


// В приведенном примере определены два класса сжатия: 
// ZipCompressor и TarCompressor. 
// Оба класса реализуют интерфейс Compressor и имеют свои собственные 
// способы сжатия данных в различные форматы.

// Класс Archiver использует один из этих компрессоров для сжатия данных. 
// При создании экземпляра Archiver передается компрессор, а затем метод 
// compressData вызывает метод compress на выбранном компрессоре.

// Таким образом, Archiver позволяет легко добавлять новые методы сжатия 
// в систему, просто создавая новые классы-компрессоры, не меняя код клиента.