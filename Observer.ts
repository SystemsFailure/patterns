// Observer паттерн (наблюдатель) является одним из поведенческих паттернов проектирования, который позволяет объектам оповещать другие объекты о изменениях в своем состоянии. 

// В данном паттерне есть две главные роли:
// 1. Subject (издатель) - объект, который содержит информацию о состоянии и имеет возможность прикреплять, откреплять и оповещать наблюдателей.
// 2. Observer (наблюдатель) - объект, который желает получать оповещения об изменениях в состоянии Subject.

// Пример реализации и использования Observer паттерна без сторонних пакетов на языке TypeScript:

interface Observer {
    update(data: any): void;
}

interface Subject {
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notify(data: any): void;
}

class ConcreteSubject implements Subject {
    private observers: Observer[] = []

    // Прикрепляем наблюдателя
    attach(observer: Observer): void {
        this.observers.push(observer)
    }

    // Открепляем наблюдателя
    detach(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if(index !== -1) {
            // Вырезаем его
            this.observers.splice(index, 1);
        }
    }
    
    notify(data: any): void {
        for(const observer of this.observers) {
            observer.update(data);
        }
    }
}

class ConcreteObserver implements Observer {
    update(data: any): void {
        console.log(`Recived data: ${data}`);
    }
}

// Useing

function main(): void {
    const subject = new ConcreteSubject();

    const observer1 = new ConcreteObserver();
    subject.attach(observer1);

    const observer2 = new ConcreteObserver();
    subject.attach(observer2);

    subject.notify("Hello, observers!"); // Все наблюдатели будут оповещены

    subject.detach(observer1);

    subject.notify("Goodbye, observer 1!"); // Только observer2 будет оповещен
}