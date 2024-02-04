// Dependency Injection (DI) - это паттерн программирования, который позволяет 
// классу получать объекты, не создавая их самостоятельно,
// а вместо этого получая их из внешнего источника. 
// Это делает классы более гибкими, модульными и легко тестируемыми.

// Пример реализации и использования Dependency Injection в TypeScript:


class Logger {
  log(message: string) {
    console.log(`[INFO] ${message}`);
  }
}

class Database {
  save(data: object) {
    console.log(`Data saved: ${JSON.stringify(data)}`);
  }
}

class UserService {
  private logger: Logger;
  private database: Database;

  constructor(logger: Logger, database: Database) {
    this.logger = logger;
    this.database = database;
  }

  createUser(name: string) {
    this.logger.log(`Creating user: ${name}`);

    const user = { name };
    this.database.save(user);

    this.logger.log(`User created: ${name}`);
  }
}

// Создаем экземпляры зависимостей
const logger = new Logger();
const database = new Database();

// Создаем экземпляр UserService и передаем зависимости
const userService = new UserService(logger, database);

// Используем UserService
userService.createUser("John");


// PS

// В данном примере у нас есть классы 
// `Logger`, `Database` и `UserService`. `UserService` 
// зависит от `Logger` и `Database`, и эти зависимости передаются через конструктор 
// при создании экземпляра `UserService`. Таким образом, мы реализовали Dependency Injection.

// Этот подход имеет ряд преимуществ:
// - Более гибкая архитектура: зависимости могут быть заменены или изменены без изменения кода, который их использует.
// - Легко тестируемый код: зависимости могут быть заменены фиктивными 
// (mock) объектами во время тестирования, что позволяет более эффективно 
// тестировать классы, не требуя наличия реальных зависимостей (например, базы данных).
// - Упрощение тестирования в изоляции: классы могут быть протестированы 
// по отдельности без реальных зависимостей, что позволяет выявить и устранить ошибки более точно.

// Однако, при использовании Dependency Injection необходимо обеспечить 
// доступность всех необходимых зависимостей, что может потребовать 
// дополнительных усилий для настройки и управления внедрением зависимостей.