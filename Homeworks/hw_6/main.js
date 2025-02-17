console.log('______Task 1______');
// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';
function printLengthArray (array){
    for (const item of array) {
        console.log(item);
    }
}
printLengthArray(str1);
console.log('------------');
printLengthArray(str2);
console.log('------------');
printLengthArray(str3);

console.log('______Task 2______');
// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(str1.toUpperCase());
console.log(str2.toUpperCase());
console.log(str3.toUpperCase());

console.log('______Task 3______');
// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let str4 = 'HELLO WORLD';
let str5 = 'LOREM IPSUM';
let str6 = 'JAVASCRIPT IS COOL';

console.log(str4.toLowerCase());
console.log(str5.toLowerCase());
console.log(str6.toLowerCase());

console.log('______Task 4______');
// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
console.log(str.indexOf('d'));
console.log(str.indexOf('g'));
console.log(str.length);
console.log(str);

let removedItem = str.trim();
console.log(removedItem.length);
console.log(removedItem);

console.log('______Task 5______');
// #bfoJuse4ZzP
// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// let arr = stringToArray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str7 = 'Ревуть воли як ясла повні';
console.log(str7.split(' '));

console.log('______Task 6______');
// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] .
// за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let num = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
console.log(num);
console.log(num.map(number => number + ''));

console.log('______Task 7______');
// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел,
// та сортує його від більшого до меньшого, або навпаки
// в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11,21,3];
let sortedNums1 =nums.toSorted((number1, number2) =>
number1 - number2);
console.log(sortedNums1);

let sortedNums2 =nums.toSorted((number1, number2) =>
    number2 - number1);
console.log(sortedNums2);
// ==========================

console.log('______Task 8______');
// #yo06d74c1C
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// =========================

let sortedCourses1 = coursesAndDurationArray.toSorted((courses1, courses2) => {
    return courses2.monthDuration - courses1.monthDuration;
});
console.log(sortedCourses1);

let sortedCourses2 = coursesAndDurationArray.toSorted((courses1, courses2) => courses2.monthDuration - courses1.monthDuration);
console.log(sortedCourses2);
console.log(coursesAndDurationArray);

console.log('============');
let filterCourses1 = coursesAndDurationArray.filter(function (courses) {
    return courses.monthDuration > 5;
});
console.log(filterCourses1);

let filterCourses2 = coursesAndDurationArray.filter(courses => courses.monthDuration > 5);
console.log(filterCourses2);

console.log(coursesAndDurationArray);

console.log('============');
let mapedCourses1 = coursesAndDurationArray.map(function (courses, index) {
    let newCourses ={
        id: index + 1,
        title: courses.title,
        monthDuration: courses.monthDuration
    }
    return newCourses;
});

console.log(mapedCourses1);
console.log(coursesAndDurationArray);

// let mapedCourses2 = coursesAndDurationArray.map(function (courses, index) {
//     return {
//         id: index + 1,
//         title: courses.title,
//         monthDuration: courses.monthDuration
//     };
// });
//
// console.log(mapedCourses2);
// console.log(coursesAndDurationArray);

// let mapedCourses3 = coursesAndDurationArray.map(function (courses, index) {
//     return { id: index + 1, ...courses,};
// });
//
// console.log(mapedCourses3);
// console.log(coursesAndDurationArray);

let mapedCourses4 = coursesAndDurationArray.map((courses, index) => {
    return { id: index + 1, title: courses.title, monthDuration: courses.monthDuration};
});

console.log(mapedCourses4);
console.log(coursesAndDurationArray);


console.log('______Task 9______');
// #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
// =========================
let arrayCards=[
    {value: 6, cardSuit: 'spade', color: 'black'},
    {value: 7, cardSuit: 'spade', color: 'black'},
    {value: 8, cardSuit: 'spade', color: 'black'},
    {value: 9, cardSuit: 'spade', color: 'black'},
    {value: 10, cardSuit: 'spade', color: 'black'},
    {value: 'jack', cardSuit: 'spade', color: 'black'},
    {value: 'queen', cardSuit: 'spade', color: 'black'},
    {value: 'king', cardSuit: 'spade', color: 'black'},
    {value: 'ace', cardSuit: 'spade', color: 'black'},
    {value: 6, cardSuit: 'diamond', color: 'red'},
    {value: 7, cardSuit: 'diamond', color: 'red'},
    {value: 8, cardSuit: 'diamond', color: 'red'},
    {value: 9, cardSuit: 'diamond', color: 'red'},
    {value: 10, cardSuit: 'diamond', color: 'red'},
    {value: 'jack', cardSuit: 'diamond', color: 'red'},
    {value: 'queen', cardSuit: 'diamond', color: 'red'},
    {value: 'king', cardSuit: 'diamond', color: 'red'},
    {value: 'ace', cardSuit: 'diamond', color: 'red'},
    {value: 6, cardSuit: 'clubs', color: 'black'},
    {value: 7, cardSuit: 'clubs', color: 'black'},
    {value: 8, cardSuit: 'clubs', color: 'black'},
    {value: 9, cardSuit: 'clubs', color: 'black'},
    {value: 10, cardSuit: 'clubs', color: 'black'},
    {value: 'jack', cardSuit: 'clubs', color: 'black'},
    {value: 'queen', cardSuit: 'clubs', color: 'black'},
    {value: 'king', cardSuit: 'clubs', color: 'black'},
    {value: 'ace', cardSuit: 'clubs', color: 'black'},
    {value: 6, cardSuit: 'heart', color: 'red'},
    {value: 7, cardSuit: 'heart', color: 'red'},
    {value: 8, cardSuit: 'heart', color: 'red'},
    {value: 9, cardSuit: 'heart', color: 'red'},
    {value: 10, cardSuit: 'heart', color: 'red'},
    {value: 'jack', cardSuit: 'heart', color: 'red'},
    {value: 'queen', cardSuit: 'heart', color: 'red'},
    {value: 'king', cardSuit: 'heart', color: 'red'},
    {value: 'ace', cardSuit: 'heart', color: 'red'},
]

arrayCards.forEach(function (card){
    if(card.value === 'ace' && card.cardSuit === 'spade'){
        console.log(card);
    }
});
console.log('============');

arrayCards.forEach(function (card) {
    if (card.value === 6) {
        console.log(card);
    }
});
console.log('============');

arrayCards.forEach(function (card) {
    if (card.color === 'red') {
        console.log(card);
    }
});
console.log('============');

arrayCards.forEach(function (card) {
    if (card.cardSuit === 'diamond') {
        console.log(card);
    }
});
console.log('============');

arrayCards.forEach(function (card) {
    if (card.cardSuit === 'clubs' && card.value !==6 && card.value !== 7 && card.value !== 8) {
        console.log(card);
    }
});

console.log('______Task 10______');
// #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================
let reduce = arrayCards.reduce((accumulator, card) => {
    if (card.cardSuit === 'spade') {
        accumulator.spades.push(card);
    }else if (card.cardSuit === 'diamond') {
        accumulator.diamonds.push(card);
    }else if (card.cardSuit === 'heart') {
        accumulator.hearts.push(card);
    }else if (card.cardSuit === 'clubs') {
        accumulator.clubs.push(card);
    }    return accumulator;
    }, {spades:[], diamonds:[], hearts:[], clubs:[]});

console.log(reduce);

console.log('______Task 11______');
// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

console.log(coursesArray.filter(course => {
    return course.modules.includes('sass');
}));
console.log(coursesArray.filter(course => {
    return course.modules.includes('docker');
}));