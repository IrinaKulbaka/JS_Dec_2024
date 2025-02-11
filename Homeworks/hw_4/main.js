console.log('______Task 1______');
// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function square(a, b) {
    return a * b;
}
let s = square(3, 4);
console.log(s);

console.log('______Task 2______');
// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circle(radius){
    return Math.PI * radius * 2;
}

let c = circle(45);
console.log(c);

console.log('______Task 3______');
// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinder(radius, height){
    return 2 * Math.PI * radius * (height + radius);
}
console.log(cylinder(3, 6));

console.log('______Task 4______');
document.write('______Task 4______');
// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
function printToDocument(array){
    for (const item of array) {
        document.write(`<div>${item.name} ${item.age} ${item.status}</div>`);
        console.log(item);
    }
}

printToDocument(users);

console.log('______Task 5______');
document.write('______Task 5______');
// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write.
// Текст задати через аргумент
function writer(msg) {
    document.write(`<p>${msg}</p>`)
}

writer('Good moning!');
writer('Good day!');
writer('Good evening!');

console.log('______Task 6______');
document.write('______Task 6______');
// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
// Текст li задати через аргумент всім однаковий
function list(msg) {
    document.write(`<ul>
                       <li>${msg}</li>
                       <li>${msg}</li>
                       <li>${msg}</li>
                    </ul>`)
}

list( 'Hello!');

console.log('______Task 7______');
document.write('______Task 7______');
// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// та виводить його через document.write
function listTwo(msg, counter) {
    document.write(`<ul>`);
    for (let i = 0; i < counter; i++) {
        const iElement = i[counter];
        document.write(`<li>${msg}</li>`);
    }
    document.write(`</ul>`);
}

listTwo( 'Hi!','6');

console.log('______Task 8______');
document.write('______Task 8______');
// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список (ul li) та виводить його через document.write
function foobar(array) {
    document.write(`<ul>`);
    for (const item of array) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}

let array = [123, 'okten', true, 987, false, 'well'];
foobar(array);

console.log('______Task 9______');
document.write('______Task 9______');
// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.

function usersArray(users) {
    for (const user of users) {
        document.write(`<div class="block">id: ${user.id};  name: ${user.name};  age: ${user. age} </div>`)
    }

}

usersArray ( [
    {id:1, name: 'vasya', age: 31},
    {id:2, name: 'petya', age: 30},
    {id:3, name: 'kolya', age: 29},
    {id:4, name: 'olya', age: 28},
    {id:5, name: 'max', age: 30},
    {id:6, name: 'anya', age: 31},
    {id:7, name: 'oleg', age: 28},
    {id:8, name: 'andrey', age: 29},
    {id:9, name: 'masha', age: 30},
    {id:10, name: 'olya', age: 31},
    {id:11, name: 'max', age: 31}
]);

console.log('______Task 10______');
// #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
function minNumbers(numbers) {
    let min = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
         let number = numbers[i];
        if (number < min) {
            min = number
        }

    }
    return min;
}

console.log(minNumbers([12, 34, 65, 3, 78, 7]));
console.log(minNumbers([34, 65, -8, 99, 32, 54, -9, 0]));


console.log('______Task 11______');
// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел,
// сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {
    let basket = 0;
    for (const item of arr) {
        basket = basket + item;
    }
    return basket;
}

console.log(sum([1, 2, 10]));


console.log('______Task 12______');
// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2).
// Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr,index1,index2){
    if (index1 < arr.length && index2 < arr.length) {
        let time = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = time;

        return arr;
    }
    return '???';
}

console.log(swap([11, 22, 33, 44],0,1));


console.log('______Task 13______');
// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,
// [{currency:'USD',value:25},{currency:'EUR',value:42}],
// 'USD') // => 400
function exchange(sumUAH,currencyValues,exchangeCurrency){
    let chosenCurrency;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            chosenCurrency = item;
        }
    }
    let result = sumUAH/chosenCurrency.value;
    return result;
}

console.log(exchange(10000, [{currency: 'USD', value: 25},{currency: 'EUR', value: 42}], 'USD'));
console.log(exchange(10000, [{currency: 'USD', value: 25},{currency: 'EUR', value: 42}], 'EUR'));

