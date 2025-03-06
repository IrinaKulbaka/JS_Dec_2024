console.log('____________Task 1____________');
// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.
// Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

const buttons= document.getElementsByTagName('button');
const button = buttons[0];

button.onclick = function () {
    // document.getElementById('text').remove();
    // document.getElementById('text').style.height = 0;
    document.getElementById('text').style.display = 'none';
};

console.log('____________Task 2____________');
// #j693ca8
// - створити інпут, який приймає вік людини та кнопку, яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача
console.log(document.getElementsByTagName('input'));

let form1 = document.forms.form1;
let result = document.getElementById('result');
form1.addEventListener('submit', function (eventObject) {
    eventObject.preventDefault();
    let value = form1.age.value;
    if (value > 18) {
        result.innerText = 'Adult - Entry is allowed';
    } else {
        result.innerText = 'Child - Entry is NOT allowed!!!';
    }
});

console.log('____________Task 3____________');
// #ymAmN2xJ
// Стоврити форму з трьома полями для name, surname, age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
let form2 = document.forms.form2;

let textResult = document.getElementById('text-result');
form2.addEventListener('submit', function (evObj){
    evObj.preventDefault();
    let valueName = form2.name2.value;
    let valueSurname = form2.surname2.value;
    let valueAge = +form2.age2.value;

    let obj = {valueName, valueSurname, valueAge};
    console.log(obj);
    textResult.innerText=`Name: ${obj.valueName} Surname: ${obj.valueSurname} Age: ${obj.valueAge}`
});

console.log('____________Task 4____________');
// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиьтся цифра.
// написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
let currentNumber = +localStorage.getItem('number');
currentNumber += 1;
localStorage.setItem('number', currentNumber);

document.getElementsByClassName('block')[0].innerText = currentNumber;


console.log('____________Task 5____________');
// #LhSfdhM3
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
// в масив sessionsList зберігається інформація про дату та час відвідування сторінки.
// Є  сторінка sessionsListPage.html (назва довільна),
// при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а малювати в DOM
// let sessionsList;
// if (localStorage.getItem('sessionsList')) {
//     sessionsList = JSON.parse(localStorage.getItem('sessionsList'));
// } else {
//     sessionsList = [];
// }
// sessionsList.push(new Date());
// localStorage.setItem('sessionsList', JSON.stringify(sessionsList));

let sessionsList = JSON.parse(localStorage.getItem('sessionsList')) || [];
sessionsList.push(new Date());
localStorage.setItem('sessionsList', JSON.stringify(sessionsList));

console.log('____________Task 6____________');
// #Jg0gPO00
// створити конвертор ваги з кг в фунти.
// данні заповнюються через інпут.
// При введенні даних обрахунок стається миттєво,
// без натискань додаткових кнопок
const input = document.getElementById('xxx');
let divResult =  document.getElementById('result2');
input.oninput = function () {
    // const kilos = +this.value;
    divResult.innerText =  +this.value * 2.2;
};

console.log('____________Task 7____________');
// #RbQGnH5DuC
// В localStorage зберігаються масиви.
// Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void


function addToLocalStorage(arrayName, objToAdd) {
    const lsItem = localStorage.getItem(arrayName);
    if (!lsItem) {
        throw new Error('these is no such array');
    }
    const array = JSON.parse(lsItem);
    if (typeof objToAdd === 'object') {
        array.push(objToAdd);
    }
    localStorage.setItem(arrayName, JSON.stringify(array));
}
addToLocalStorage('sessionsList', {});

console.log('____________Task 8____________');
// #kUSgFqWY
// Створити 3 інпута та кнопку.
// Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

const table = document.getElementById('table');
const tableGeneratorForm = document.forms['tableGeneratorForm'];

tableGeneratorForm.onsubmit = function (e) {
    table.innerText='';
    e.preventDefault();
    const linesValue = +tableGeneratorForm.lines.value;
    const cellsValue = +tableGeneratorForm.cells.value;
    const dataValue = tableGeneratorForm.data.value;
    console.log(linesValue, cellsValue, dataValue);

    for (let i = 0; i < linesValue; i++) {
        const tr = document.createElement('tr');
        table.appendChild(tr);
        for (let j = 0; j < cellsValue; j++) {
            const td = document.createElement('td');
            td.innerText = dataValue;
            tr.appendChild(td);
        }
    }
};


// console.log('____________Task 9____________');
//#bq1zkx7WP
// *** (подібне було вище, але...будьте уважні в другій частині)
// створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
// зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
// При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається


// console.log('____________Task 10____________');
// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів