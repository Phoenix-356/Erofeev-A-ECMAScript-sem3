/*Реализуйте класс Order (заказ), который имеет следующие свойства и методы:

Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
Свойство products (продукты) - массив, содержащий список продуктов в заказе.
Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

// Пример использования класса
class Product {
constructor(name, price) {
this.name = name;
this.price = price;
}
}

const order = new Order(12345);

const product1 = new Product(""Phone"", 500);
order.addProduct(product1);

const product2 = new Product(""Headphones"", 100);
order.addProduct(product2);

console.log(order.getTotalPrice()); // Вывод: 600 */




// Определение класса Order (заказ)
class Order {
    // Конструктор класса Order принимает номер заказа
    constructor(orderNumber) {
        this.orderNumber = orderNumber; // Устанавливаем свойство orderNumber (номер заказа)
        this.products = []; // Инициализируем массив для хранения продуктов заказа
    }

    // Метод addProduct добавляет продукт в список продуктов заказа
    addProduct(product) {
        this.products.push(product); // Добавляем переданный продукт в массив продуктов
    }

    // Метод getTotalPrice возвращает общую стоимость заказа
    getTotalPrice() {
        // Вычисляем общую стоимость заказа на основе цен всех продуктов
        const totalPrice = this.products.reduce((acc, product) => acc + product.price, 0);
        return totalPrice; // Возвращаем общую стоимость заказа
    }

    displayContents() {
        console.log(`Order #${this.orderNumber} contents:`);
        this.products.forEach(product => {
          console.log(`${product.name}: $${product.price}`);
        });
    }
}

// Определение класса Product (продукт)
class Product {
    // Конструктор класса Product принимает имя и цену продукта
    constructor(name, price) {
        this.name = name; // Устанавливаем свойство name (название продукта)
        this.price = price; // Устанавливаем свойство price (цена продукта)
    }
}
// Пример использования класса Order
const order = new Order(12345); // Создаем новый заказ с номером 12345

const product1 = new Product("Phone", 500); // Создаем продукт "Телефон" с ценой 500
order.addProduct(product1); // Добавляем продукт "Телефон" в заказ

const product2 = new Product("Headphones", 100); // Создаем продукт "Наушники" с ценой 100
order.addProduct(product2); // Добавляем продукт "Наушники" в заказ

order.displayContents();
console.log("Total price:$", order.getTotalPrice()); // Выводим общую стоимость заказа: 600
