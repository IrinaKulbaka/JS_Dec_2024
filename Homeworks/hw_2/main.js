console.log('Task 1____________');
// Масиви та об'єкти
// #67kfznmiMl
// - Створити масив, наповнити його 10 елементами будь-якого типу,
// вивести кожен елемент в консоль
let arr = [12, 23, 34, 'qwe', 'asd', 'zxc', true, false, 123, 'hello!'];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

console.log('Task 2____________');
// #LARqoUj5I
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let boock1={
    title: 'qwe',
    pageCount: 123,
    genre: "qwert",
}
console.log(boock1);

let boock2 = {
    title: "asd",
    pageCount: 345,
    genre: 'asdfgh',
}
console.log(boock2);

let boock3 = {
    title: 'zxc',
    pageCount: 567,
    genre: 'zxcvbn',
}
console.log(boock3);

console.log('Task 3____________');
//     #sA3Gg1sCp
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let boock11={
    title: 'qwe',
    pageCount: 123,
    genre: "qwert",
    autors: [
        [
            autor1 = {
                name: 'poiuyt',
                age: 54,
            },
        ],
        [
            autor2 = {
                name: 'lkjhg',
                age: 56,
            }
        ]
    ]
}
console.log(boock11);

let boock22 = {
    title: "asd",
    pageCount: 345,
    genre: 'asdfgh',
    autors: [
        [
            autor2 = {
                name: 'asdert',
                age: 67,
            },
        ],
        [
            autor3 = {
                name: 'boob',
                age: 76,
            }
        ]
    ]
}
console.log(boock22);

let boock33 = {
    title: 'zxc',
    pageCount: 567,
    genre: 'zxcvbn',
    autors: [
        [
            autor1 = {
                name: 'tom',
                age: 78,
            },
        ],
        [
            autor2 = {
                name: 'petro',
                age: 87,
            }
        ]
    ]
}
console.log(boock33);

console.log('Task 4____________');
//     #jCHFnEbdmFd
// - Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users= [
    {
        name: 'oly1',
        userName: 'olyOly',
        password: 123,
    },
    {
        name: 'oly2',
        userName: 'olyOly',
        password: 1234,
    },
    {
        name: 'oly3',
        userName: 'olyOly',
        password: 12345,
    },
    {
        name: 'oly4',
        userName: 'olyOly',
        password: 123456,
    },
    {
        name: 'oly5',
        userName: 'olyOly',
        password: 12356,
    },
    {
        name: 'oly6',
        userName: 'olyOly',
        password: 12367,
    },
    {
        name: 'oly7',
        userName: 'olyOly',
        password: 12378,
    },
    {
        name: 'oly8',
        userName: 'olyOly',
        password: 123897,
    },
    {
        name: 'oly9',
        userName: 'olyOly',
        password: 123567,
    },
    {
        name: 'oly10',
        userName: 'olyOly',
        password: 123987,
    }
]
console.log(users[0]);
console.log(users[1]);
console.log(users[2]);
console.log(users[3]);
console.log(users[4]);
console.log(users[5]);
console.log(users[6]);
console.log(users[7]);
console.log(users[8]);
console.log(users[9]);

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

console.log('Task 5____________');
// #coYydZuaeEB
// - описати масив,
// в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// Як зробити цей масив - вам потрібно подумати.
// Нормальних варіантів опису - 2.
// Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
let week = [
    [monday={morning: 3,noon: 6, evening: 3}],
    [tuesday={morning: 2,noon: 7, evening: 1}],
    [wednesday={morning:1,noon: 4, evening: 2}],
    [thursday={morning: 4,noon: 5, evening: 4}],
    [friday={morning: 3,noon: 6, evening: 3}],
    [suturday={morning: 2,noon: 5, evening: 2}],
    [sunday={morning: 1,noon: 4, evening: 3}]
]
console.log(week[0],monday.noon);
console.log(week[1]);
console.log(week[2],wednesday.morning);
console.log(week[3]);
console.log(week[4],friday.evening);
console.log(week[5]);
console.log(week[6]);

// Логічні розгалуження:
console.log(' Логічні розгалуження:');
console.log('Task 6____________');
//     #bAUsaq6LI
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно',
//     інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let a = 1;
// let a = 0;
let a = -3;
if(a !== 0){
    console.log('Вірно');
}else if (a === 0) {
    console.log('Невірно');
}
console.log(a);

console.log('Task 7____________');
// #3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = +prompt('enter a number');

if (time >= 0 && time <= 15) {
    console.log('1/4');
}else if(time >= 16 && time <= 30){
    console.log('2/4');
}else if(time >= 31 && time <= 45){
    console.log('3/4');
}else if (time >= 46 && time <= 59) {
    console.log('4/4');
}else{
    console.log('???');
}
console.log(time);


console.log('Task 8____________');
// #UMoNq4biWGe
// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = +prompt('Enter the number of the month');
if (day >= 1 && day <= 10) {
    console.log('1/3');
}else if (day >= 11 && day <= 20) {
    console.log('2/3');
}else if (day >= 21 && day <= 31) {
    console.log('3/3');
}else{
    console.log('???');
}
console.log(day);

console.log('Task 9____________');
// #KzrtqyQ
// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа
// що заплановано на цей день (можна замість плану на день, назву дня англійською).
let week2 = prompt('Enter the day of the week number');
switch (week2) {
    case '1':
        console.log('Monday');
        break;
    case '2':
        console.log('Tuesday');
        break;
    case '3':
        console.log('Wednesday');
        break;
    case '4':
        console.log('Thursday');
        break;
    case '5':
        console.log('Friday');
        break;
    case '6':
        console.log('Saturday');
        break;
    case '7':
        console.log('Sunday');
        break;
    default:
        console.log('???');
}
console.log(week2);

console.log('Task 10____________');
// #uwsz1RnTQJ1
// Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let number1 = 3;
let number2 = 6;
if (number1 > number2){
    console.log(number1);
} else if(number1 === number2){
    console.log(number2);
} else if(number2 > number1){
    console.log(number2);
} else {
    console.log('???')
}

console.log('Task 11____________');
// #iBvqtjEm
// є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// Напишіть код який,
// буде присвоювати змінній х значення "default"
// якщо ви намагаєтесь присвоїти в неї falsy-значення
// (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
// let x = 0;
// let x = '0';
// let x = null;
// let x;
// let x = 'JavaScript';
let x = 12;

switch (x) {
    case 0:
        console.log('default');
        break;
    case null:
        console.log('default');
        break;
    case undefined:
        console.log('default');
        break;
    case '':
        console.log('default');
        break;
    case false:
        console.log('default');
        break;
    default:
        console.log('Ok');
}


console.log('Task 12____________');
//#awLXL6TBzg
//з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Супер');
}if (coursesAndDurationArray[1].monthDuration > 5){
    console.log('Супер');
}if (coursesAndDurationArray[2].monthDuration > 5){
    console.log('Супер');
}if (coursesAndDurationArray[3].monthDuration > 5){
    console.log('Супер');
} if (coursesAndDurationArray[4].monthDuration > 5){
    console.log('Супер');
}if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Супер');
}
