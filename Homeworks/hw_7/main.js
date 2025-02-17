console.log('______Task 1______');
// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let usersArray = [];
let user1 = new User(1, 'olya', 'olyaolya', 'qwe@123', 1234567890);
let user2 = new User(2, 'kolya', 'kolyakolya', 'asd@321', 1234567891);
let user3 = new User(3, 'olya', 'olyaolya', 'qwe@123', 1234567890);
let user4 = new User(4, 'kolya', 'kolyakolya', 'asd@321', 1234567891);
let user5 = new User(5, 'olya', 'olyaolya', 'qwe@123', 1234567890);
let user6 = new User(6, 'kolya', 'kolyakolya', 'asd@321', 1234567891);
let user7 = new User(7, 'olya', 'olyaolya', 'qwe@123', 1234567890);
let user8 = new User(8, 'kolya', 'kolyakolya', 'asd@321', 1234567891);
let user9 = new User(9, 'olya', 'olyaolya', 'qwe@123', 1234567890);
let user10 = new User(10, 'kolya', 'kolyakolya', 'asd@321', 1234567891);
usersArray.push(user1, user2, user3, user4, user5, user6, user7, user8,user9,user10);
console.log(usersArray);

console.log('______Task 2______');
// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
// залишивши тільки об'єкти з парними id (filter)
// let filterUser = usersArray.filter(function (user) {
//     return user.id % 2 === 0;
// });
let filterUser = usersArray.filter((user) => user.id % 2 === 0);
console.log(filterUser);

console.log('______Task 3______');
// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortUser = usersArray.toSorted(function (user1, user2) {
    return user2.id - user1.id;
});
console.log(sortUser);

console.log('______Task 4______');
// #nkMXISv
// - створити конструктор для об'єктів Client
// з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
function Client(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

let clientArray = [];
let client1 = new Client(1, 'ivan', 'ivanov', 'ivan@123', '0661231231',
    [{title:'milk'},{title:'meat'}, {title:'fish'}, {title:'tomato'}]);
let client2 = new Client(2, 'ivan', 'ivanov', 'ivan@123', '0661231231',
    [{title:'milk'},{title:'meat'}, {title:'fish'}]);
let client3 = new Client(3, 'ivan', 'ivanov', 'ivan@123', '0661231231',
    [{title:'milk'},{title:'meat'}, {title:'fish'}, {title:'cucumber'}, {title:'potato'}, {title:'beet'}]);
let client4 = new Client(4, 'ivan', 'ivanov', 'ivan@123', '0661231231',
    [{title:'milk'},{title:'meat'}, {title:'orange'}, {title:'banana'},{title:'plum'}]);
let client5 = new Client(5, 'ivan', 'ivanov', 'ivan@123', '0661231231',
    [{title:'table'},{title:'chair'}, {title:'vase'}]);
let client6 = new Client(6, 'ivan', 'ivanov', 'ivan@123', '0661231231',
    [{title:'lamp'},{title:'TV set'}]);
let client7 = new Client(7, 'ivan', 'ivanov', 'ivan@123', '0661231231',
    [{title:'cupboard'},{title:'carpet'}, {title:'bed'}]);
let client8 = new Client(8, 'ivan', 'ivanov', 'ivan@123', '0661231231',
    [{title:'pencil'},{title:'pen'}, {title:'book'}, {title:'ruler'}]);
let client9 = new Client(9, 'ivan', 'ivanov', 'ivan@123', '0661231231',
    [{title:'pencil-case'},{title:'pencil'}]);
let client10 = new Client(10, 'ivan', 'ivanov', 'ivan@123', '0661231231',
    [{title:'ball'},{title:'top'}, {title:'doll'}, {title:'drum'}, {title:'hoop'}]);

clientArray.push(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10);
console.log(clientArray);

console.log('______Task 5______');
// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).
// Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortedClientArray = clientArray.toSorted((client1, client2)=>{
    return client1.order.length - client2.order.length;
});
console.log(sortedClientArray);
console.log('______Task 6______');
// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car,
// з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів,
// і додає його в поточний об'єкт car

function Car(model, producer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    this.info = function () {
        for (const key in this) {
            console.log(key, this[key]);
        }
    };
    this.increaseMaxSpeed = function (speedToAdd) {
        if (maxSpeed > 0) {
            this.maxSpeed = this.maxSpeed + speedToAdd;
        }
    };
    this.changeYear = function (year) {
        if (year>1815) this.year = year;
    };
    this.addDriver = function (driverObject) {
        if (driverObject) this.driver = driverObject;
    };
}

let car = new Car('asd', 'qwe', 2025, 150, 3);
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(30);
console.log(car);
car.changeYear(2000);
console.log(car);
car.addDriver({name: 'Vasya'});
console.log(car);

console.log('______Task 7______');
// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car,
// з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів,
// і додає його в поточний об'єкт car

class Car2 {
    constructor(model, producer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
        this.drive = function () {
            console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
        };
        this.info = function () {
            for (const key in this) {
                console.log(key, this[key]);
            }
        };
        this.increaseMaxSpeed = function (speedToAdd) {
            if (maxSpeed > 0) {
                this.maxSpeed = this.maxSpeed + speedToAdd;
            }
        };
        this.changeYear = function (year) {
            if (year > 1815) this.year = year;
        };
        this.addDriver = function (driverObject) {
            if (driverObject) this.driver = driverObject;
        };
    }
}

let car2 = new Car2('asd', 'qwe', 2025, 150, 3);
console.log(car2);
car2.drive();
car2.info();
car2.increaseMaxSpeed(60);
console.log(car2);
car2.changeYear(2022);
console.log(car2);
car2.addDriver({name: 'Petya'});
console.log(car2);

console.log('______Task 8______');
// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги.
// Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, footSze) {
        this.name = name;
        this.age = age;
        this.footSize = footSze;
    }
}

class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

const cinderellases = [
    new Cinderella('Anna', 18, 35),
    new Cinderella('Anna', 19, 36),
    new Cinderella('Anna', 20, 37),
    new Cinderella('Anna', 21, 38),
    new Cinderella('Anna', 22, 39),
    new Cinderella('Anna', 23, 40),
    new Cinderella('Anna', 24, 41),
    new Cinderella('Anna', 25, 42),
    new Cinderella('Anna', 26, 43),
    new Cinderella('Anna', 27, 44)
];

const prince = new Prince('Vasya', 30, 36);

for (const cinderella of cinderellases) {
    if (cinderella.footSize === prince.shoe) {
        prince.wife = cinderella;
    }
}
console.log(prince.wife);

const cinderellaWife = cinderellases.find(cinderella => cinderella.footSize === prince.shoe);
prince.wife = cinderellaWife;
console.log(cinderellaWife);


console.log('______Task 9______');
// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter
Array.prototype.myForEach = function (callback) {
    const yourArray = this;
    for (const item of yourArray) {
        callback(item);
    }
};
[11, 22, 33].myForEach((x) => console.log(x));

Array.prototype.myFilter = function (predicate) {
    const array = [];
    for (const item of this) {
        if (predicate(item)) {
            array.push(item);
        }
    }
    return array;
};
const cinderellases2 = [
    new Cinderella('Anna', 18, 35),
    new Cinderella('Anna', 19, 36),
    new Cinderella('Anna', 20, 37),
    new Cinderella('Anna', 21, 38),
    new Cinderella('Anna', 22, 39),
    new Cinderella('Anna', 23, 40),
    new Cinderella('Anna', 24, 41),
    new Cinderella('Anna', 25, 42),
    new Cinderella('Anna', 26, 43),
    new Cinderella('Anna', 27, 44)
];

let result = cinderellases2.myFilter((cinderella) => cinderella.age >= 18 && cinderella.age <= 21);
console.log(result);
