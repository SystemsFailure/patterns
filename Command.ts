// Command – это поведенческий паттерн проектирования, 
// который инкапсулирует запросы в объекты, 
// позволяя обращаться с ними как с аргументами методов, 
// ставить запросы в очередь, логировать их, а также поддерживать отмену операций.

// Пример реализации Command паттерна на TypeScript:

interface Command {
    execute(): void;
    undo(): void;
  }
  
  class Light {
    turnOn(): void {
      console.log("Light is on");
    }
    turnOff(): void {
      console.log("Light is off");
    }
  }
  
  class LightOnCommand implements Command {
    private light: Light;
  
    constructor(light: Light) {
      this.light = light;
    }
  
    execute(): void {
      this.light.turnOn();
    }
  
    undo(): void {
      this.light.turnOff();
    }
  }
  
  class RemoteControl {
    private commands: Command[] = [];
    private undoCommand: Command | null | undefined;
  
    setCommand(command: Command): void {
      this.commands.push(command);
    }
  
    pressButton(): void {
      if (this.commands.length > 0) {
        const command = this.commands.pop();
        command?.execute();
        this.undoCommand = command;
      }
    }
  
    undoButton(): void {
      if (this.undoCommand) {
        this.undoCommand.undo();
        this.undoCommand = null;
      }
    }
  }
  
  // Использование
  
  const light = new Light();
  const lightOnCommand = new LightOnCommand(light);
  
  const remoteControl = new RemoteControl();
  remoteControl.setCommand(lightOnCommand);
  remoteControl.pressButton(); // Light is on
  remoteControl.undoButton(); // Light is off


// PS


// В данном примере есть классы Light, LightOnCommand и RemoteControl. 
// Класс Light представляет устройство (например, лампочку), 
// у которого есть методы включения и выключения. 
// Класс LightOnCommand инкапсулирует запросы на включение света в объект-команду, реализуя интерфейс 
// Command. Класс RemoteControl управляет набором команд, организует их выполнение и отмену. 

// Вызов pressButton() на экземпляре RemoteControl вызывает метод execute() 
// у последней добавленной команды и сохраняет ссылку на нее в undoCommand. 
// Вызов undoButton() отменяет последнюю выполненную команду, вызывая ее метод undo().