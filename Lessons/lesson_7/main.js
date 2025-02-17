console.log('______Funtion factory______');

function userFactoryFunction(id, name) {
    return{
        id, name
    }
}

let user = userFactoryFunction(33, 'tim');
console.log(user);

console.log('______Function Constructor______');

function User(id, name) {
    this.id = id;
    this.name = name;
}

let user1 = new User(1, 'bob');
console.log(user1);
console.log(user1 instanceof User);

console.log('___кількість аргументів___');
function User1(id, name) {
    this.id = id;
    this.name = name;
    this.greeting = function (msg) {
        console.log(msg + ' Hello my name is ' + this.name);
    };
}

let user2 = new User1(1, 'bob');
console.log(user2);
console.log(user2 instanceof User1);

console.log('___Розширення конструкторів___');
User.prototype.asdqwe = 100500;
User.prototype.foobar = function () {
    console.log('foobar');
};

let user3 = new User(2, 'tom');
console.log(user3);

console.log('___Додавання до класу будь чого___');
console.log([] instanceof Array);
// Array.isArray() --- те саме, що і instanceof Array

let numbers = [11, 22, 33];
Array.prototype.xxx = function () {
    console.log(this);
};
numbers.xxx();

let usersArray = [
    {id:1, name: 'Vasya', age: 31},
    {id:2, name: 'Petya', age: 30},
    {id:3, name: 'Kolya', age: 29},
    {id:4, name: 'Olya', age: 28},
    {id:5, name: 'Max', age: 30},
    {id:6, name: 'Anya', age: 31},
    {id:7, name: 'Oleg', age: 28},
    {id:8, name: 'Andrey', age: 29},
    {id:9, name: 'Masha', age: 30},
    {id:10, name: 'Olya', age: 31},
    {id:11, name: 'Max', age: 31}
];
usersArray.xxx();

console.log('______Підміна this через call/apply/bind з наслідуванням______');

let userFactory = userFactoryFunction(33, 'tim');
console.log(userFactory);
let user2Constructor = new User1(1, 'bob');
console.log(user2Constructor);

user2Constructor.greeting.call(userFactory, 'Olla');
user2Constructor.greeting.apply(userFactory, ['Aloha']);

let greetingClone = user2Constructor.greeting.bind(userFactory);
console.log(greetingClone('Sveta'));
console.log(greetingClone);

user2Constructor.greeting('Kola');

console.log('______Підміна this/контексту без наслідуванням______');
console.log('______Підміна/наслідування без використання класової конструкції______')

function SuperUser(id, name, password, login) {
    User1.apply(this,[id, name]);
    this.password = password;
    this.login = login;
}

let superUser = new SuperUser(12, 'Nina', 'asdasd', 'qweqweqwe');
console.log(superUser);


console.log('_______Class______');
class UserClass{
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    greeting(msg) {
        console.log(msg, 'Hello my name is', this.name);
    }
}

let userClass = new UserClass(24, 'roma');
console.log(userClass);
console.log(userClass.greeting('Tolya'));

console.log('___Розширення Class___');

class SuperUser2 extends UserClass {
    constructor(id, name, login, password) {
        super(id, name);
        this.login = login;
        this.password = password;
    }

    foobar() {}
}

let superUser2 = new SuperUser2(45, 'Petya', 'qwerew', 'asdasd');
superUser2.greeting('Lola');
console.log(superUser2);

console.log('______Classes: Date, Set, Map______ ');
console.log('___Date___');
let date = new Date();
console.log(date);
console.log(date.getTime());
console.log(date.getUTCDay());

console.log('___Set___');
let set = new Set();
set.add('asd');
set.add('qwe');
set.add('zxc');
set.add('zxc');
set.add({});
set.add({});
set.add([]);
set.add([]);

let value = {};
set.add(value);

console.log(set);
console.log({} === {});
console.log(set.has({}));
console.log(set.has(value));

console.log('___Map___');
let map = new Map();
map.set('doctor', {name: 'Roman'});
map.set('petya', {name:'Sasha'});
map.set('borya', {name:'Sasha'});
map.set('borya', {name:'Masha'});
console.log(map);

let entries = map.entries();
console.log(entries.next());
console.log(entries.next());
console.log(entries.next());
console.log(entries.next());

console.log(map.get('borya'));
console.log(map.values());
console.log(map.delete('doctor'));
console.log(map);

