console.log('____________Task 1____________');
// #8Nmt60ZT
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let div = document.createElement('div');
document.body.appendChild(div);
div.innerText = 'Task 1';
div.classList.add('wrap', 'collapse', 'alpha', 'beta');

let div2CloneNode = div.cloneNode(true);
console.log(div === div2CloneNode);
document.body.appendChild(div2CloneNode);

console.log('____________Task 2____________');
document.write('____________Task 2____________');
//  #OPLI89c9G
// - Є масив: ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let arrayMenu = ['Main', 'Products', 'About us', 'Contacts'];
let ul = document.createElement('ul');
document.body.appendChild(ul);

let li1 = document.createElement('li');
li1.innerText = 'Main';

let li2 = document.createElement('li');
li2.innerText = 'Products';

let li3 = document.createElement('li');
li3.innerText = 'About us';

let li4 = document.createElement('li');
li4.innerText = 'Contacts';

document.body.append(li1, li2, li3, li4);

console.log('____________Task 3____________');
document.write('____________Task 3____________');
// #jeBqHV525U5
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// =========================
for (const course of coursesAndDurationArray) {
    // console.log(course);
    let div = document.createElement('div');
    div.innerText = `${course.title} ${course.monthDuration}`;
    document.body.appendChild(div);
}

console.log('____________Task 4____________');
//     #Kx1xgoKy8
//     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу,
// та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.

for (const course of coursesAndDurationArray) {
    let divCourse = document.createElement('div');
    divCourse.classList.add('item');

    let h1 = document.createElement('h1');
    h1.classList.add('heading');
    let p = document.createElement('p');
    p.classList.add('description');

    h1.innerText = course.title;
    p.innerText = course.monthDuration;
    divCourse.append(h1, p);

    document.body.appendChild(divCourse);
}


















