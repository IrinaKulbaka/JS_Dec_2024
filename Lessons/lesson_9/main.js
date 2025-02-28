// // console.log(document);
// // console.log(document.head);
// // console.log(document.head.innerHTML);
// // console.log(document.head.children);
// // console.log(document.body);
// // console.log(document.body.innerHTML);
//
// console.log('____________Пошук за певними ідентифікаторами,' +
//     ' класами і т.д./найбільш швидкий спосіб, але не той, що полююбляють програмисти____________');
// // id
// let ul1 = document.getElementById('list-1');
// console.log(ul1);
//
// // class
// let menuCollection = document.getElementsByClassName('menu');
// console.log(menuCollection);
// for (const menuCollectionElement of menuCollection) {
//     console.log(menuCollectionElement);
// }
//
// // tag
// let ulList = document.getElementsByTagName('ul');
// console.log(ulList);
//
// // всі  li, які знаходяться в документі
// let liList = document.getElementsByTagName('li');
// console.log(liList);
//
// // тільки ті  li, які знаходяться в list-1
// let list1 = document.getElementById('list-1');
// console.log(list1);
// let list1LiCollection = list1.getElementsByTagName('li');
// console.log(list1LiCollection);
//
//
// console.log('____________Пошук за певними ідентифікаторами,' +
//     ' класами і т.д./не такий швидкий спосіб, але він більш цікавіший ' +
//     'з точки зору синтаксичної конструкції____________');
// // tag
// console.log(document.querySelector('ul'));
// console.log(document.querySelectorAll('ul'));
// // class
// console.log(document.querySelector('.menu'));
// console.log(document.querySelectorAll('.menu'));
// // CSS-селектори
// console.log(document.querySelector('body .menu'));
// console.log(document.querySelectorAll('body .menu'));
//
// // тільки ті  li, які знаходяться в list-2
// console.log(document.querySelectorAll('.menu:nth-child(2)>li'));
// console.log(document.querySelectorAll('#list-2>li'));
//
// let nodeListOf=document.querySelectorAll('#list-2>li');
// console.log(nodeListOf);
// for (const node of nodeListOf) {
//     console.log(node);
// }
//
//
// console.log('____________Маніпуляція DOM - елементами____________');
// let target = document.getElementById('target');
// console.log(target);
// // доступитися до тексту div-a
// console.log(target.innerText);
//
// // заміна тексту
// // target.innerText = 'OKTEN';
// // console.log(target.innerText);
//
// // доступитись до характеристик об'єкта style
// target.style.backgroundColor = 'silver';
//
// // характеристика, яка повертає список всіх класів
// console.log(target.classList);
// // в нас класів немає в данному прикладі
//
// // додавання класів
// target.classList.add('foo');
// target.classList.add('bar');
//
// // витягування певного класу за певним індексом
// console.log(target.classList.item(0));
//
// // перевірити чи існує такий клас, чи не існує/ булеве значення воно поверне
// console.log(target.classList.contains('bar'));
//
// // перемикач --- якщо існує в перелику, то його видаляє, а якщо не існує, то тоді додасть
// console.log(target.classList.toggle('asd'));
// console.log(target.classList.toggle('bar'));
//
// // витягування з будь-якого об'єкту значення атрибута, який тут присутній,
// // навіть, якщо атрибут створений безпосередньо вами
// console.log(target.getAttribute('xxx'));
// console.log(target.getAttribute('id'));
// console.log(target.getAttribute('class'));
// console.log(target.getAttribute('style'));
//
// // зворотня характеристика до getAttribute(), яка може сетнути якийсь атрибут
// // (наприклад, поміняє значення  id, яке потім унеможливлює пощук по значеннню id,
// // так як його ми перебили)
// // target.setAttribute('id', '123');
//
// // знаходження елемента, який стоїть перед тим елементом, з яким ми працюємо
// console.log(target.previousElementSibling);
//
// // дозволить повернути наступний елемент, який стоїть після того елемента, з яким ми працюємо
// console.log(target.nextElementSibling);
//
// // достати колекцію всіх внутрішніх елементів
// // (в нашому випадку треба закоментувати:  target.innerText = 'OKTEN';  - щоб не було конфлікту)
// // повертають HTML - об'єкти
// console.log(target.children);
//
// // достати колекцію всіх внутрішніх елементів
// // повертають вузли
// console.log(target.childNodes);
//
// // .innerHTML
// console.log(target.innerText = '<b>сприймає як є/ з тегами/ сприймає, як символи</b>');
// console.log(target.innerHTML = '<span>сприймає саме як HTML</span>');
//
// // повертає обгортку того, як елемент виглядає ззовні/ HTML - репрезинтація ззовні/
// // для того, щоб побачити батьківський елемент, з яким працюєте
// console.log(target.outerHTML);
//
// // як знайти елементи, якщо нема можливості знайти по id
// let colectionsDiv = (document.getElementsByClassName('point'));
// console.log(colectionsDiv);
// for (const divElement of colectionsDiv) {
//     divElement.innerText = 'qweqwe';
//     divElement.classList.add('box');
// }
//
// console.log('____________Forms API____________');
// // пошук форми за допомогою Forms API/ всі форми, які є на сторінці
// console.log(document.forms);
// console.log(document.forms.f1);
// console.log(document.forms['f2']);
// console.log(document.forms['f1'].userName);
// console.log(document.forms['f2']['userEmail']);
// console.log(document.forms.f2.userEmail);
//
//
// console.log('____________Створення елементів за допомогою JS____________');
// let h2 = document.createElement('h2');
// document.body.appendChild(h2);
// h2.innerText = 'Some text';


let allUsersDiv = document.getElementsByClassName('users')[0];
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
for (const user of users) {
    let div = document.createElement('div');
    div.classList.add('user');
    allUsersDiv.appendChild(div);
    div.innerText = user.name;
}


let allUsersLi = document.getElementsByClassName('users2')[0];

for (const user of users) {
    let li = document.createElement('li');
    li.classList.add('user');
    allUsersLi.appendChild(li);
    li.innerText = user.name;
}

let users2 = [
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
for (const user of users2) {
    let userInfoDiv = document.createElement('div');

    let h2 = document.createElement('h2');
    h2.innerText = user.name;

    let p = document.createElement('p');
    p.innerText = user.age + ' ' + user.status;

    // userInfoDiv.appendChild(h2);
    // userInfoDiv.appendChild(p);
    userInfoDiv.append(h2, p);

    document.body.appendChild(userInfoDiv);
}




