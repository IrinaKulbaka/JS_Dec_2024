// Тут ті самі завдання, що і в занятті про базові функції,
// але зробити їх потрібно за допомоги стрілочних функцій

console.log('______Task 1______');
// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let square = (a, b) =>{
    return a * b;
}
console.log(square(5, 5));

console.log('______Task 2______');
// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let circle = (radius) => {
    return Math.PI * radius * 2;
}
let c = circle(12);
console.log(c);

console.log('______Task 3______');
// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylinder = (radius, height) => {
    return 2 * Math.PI * radius * (height + radius);
}
console.log(cylinder(4, 6));

console.log('______Task 4______');
// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
let addArray = (arr) => {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}
let array = [11, 22, 33, 44, 55, 66, 77];
addArray(array);

console.log('______Task 5______');
document.write(`______Task 5______`);
// #59g0IsA
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let write = (msg) => {
    document.write(`<div><p>${msg}</p></div>`);
}
write('Task 5');

console.log('______Task 6______');
document.write(`______Task 6______`);
// #hOL6126
// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий
let write2 = (msg) =>{
    document.write(`<ul>
                        <li>${msg}</li>
                        <li>${msg}</li>
                        <li>${msg}</li>
                    </ul>
    `)
}
write2('Task 6');

console.log('______Task 7______');
document.write(`______Task 7______`);
// #0Kxco1edSN
// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let list = (msg, counter) => {
    document.write(`<ul>`);
    for (let i = 0; i < counter; i++) {
        const iElement = i[counter];
        document.write(`<li>${msg}</li>`);
    }
    document.write(`</ul>`);

}
list('Task 7', '3');

console.log('______Task 8______');
document.write(`______Task 8______`);
// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список
let foobar = (arr) => {
    document.write(`<ul>`);
    for (const item of arr) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}

let array2 = [123, 'okten', true, 987, false, 'well'];
foobar(array2);

console.log('______Task 9______');
document.write(`______Task 9______`);
// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age,
// та виводить їх в документ. Для кожного об'єкту окремий блок.
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

let printerArray = (array) => {
    for (const user of array) {
        document.write(`<div class="box">
                             id:${user.id}  name:${user.name}  age:${user.age}
                        </div>`)
    }
}
printerArray(usersArray);

console.log('______Task 10______');
// #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
let minNumbers = (numbers) => {
    let min = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        if (number < min) {
            min = number
        }
    }
    return min;
}

console.log(minNumbers([12, 43, 3, 56, 77, 99]));
console.log(minNumbers([-45, 0, 23, 54, 11, 90, 2]));


console.log('______Task 11______');
// #EKRNVPM
// - створити функцію sum(arr)яка приймає масив чисел,
// сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sum = (arr) => {
    let s = 0 ;
        for (const number of arr) {
            s = s + number;
        }
    return s;
}
console.log(sum([1, 2, 10]));

console.log('______Task 12______');
// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2).
// Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap = (arr, index1, index2) => {
    let time = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = time;

    return arr;
}
console.log(swap([11, 22, 33, 44], 0, 1));

console.log('______Task 13______');
// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад
// exchange(10000,
// [{currency:'USD',value:40},{currency:'EUR',value:42}],
// 'USD') // => 250
let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    let chosenCurrency;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            chosenCurrency = item;
        }
    }
        let result = sumUAH/chosenCurrency.value;
        return result;
}
console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));
console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'EUR'));



