/*
Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:

Свойство name (имя) - строка, имя сотрудника.
Метод displayInfo() - выводит информацию о сотруднике (имя).
Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:

Свойство department (отдел) - строка, отдел, в котором работает менеджер.
Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).
// Пример использования классов
const employee = new Employee(""John Smith"");
employee.displayInfo();
// Вывод:
// Name: John Smith

const manager = new Manager(""Jane Doe"", ""Sales"");
manager.displayInfo();
// Вывод:
// Name: Jane Doe
// Department: Sales*/


// Определение класса Employee (сотрудник)
class Employee {
    // Конструктор класса Employee принимает имя сотрудника
    constructor(name) {
        this.name = name; // Устанавливаем свойство name (имя)
    }

    // Метод displayInfo() выводит информацию о сотруднике
    displayInfo() {
        console.log(`Name: ${this.name}`); // Выводим имя сотрудника
    }
}

// Определение класса Manager (менеджер), который наследует класс Employee
class Manager extends Employee {
    // Конструктор класса Manager принимает имя и отдел менеджера
    constructor(name, department) {
        super(name); // Вызываем конструктор родительского класса и передаем имя
        this.department = department; // Устанавливаем свойство department (отдел)
    }

    // Переопределяем метод displayInfo() для вывода информации о менеджере
    displayInfo() {
        // Выводим имя и отдел менеджера
        console.log(`Name: ${this.name}\nDepartment: ${this.department}`);
    }
}

const employee = new Employee("John Smith");
employee.displayInfo();
// Вывод:
// Name: John Smith

const manager = new Manager("Jane Doe", "Sales");
manager.displayInfo();
// Вывод:
// Name: Jane Doe
// Department: Sales