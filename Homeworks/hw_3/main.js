console.log('_______Task 1_______');
document.write('___Task 1___');
// #y7crMeFwHcS
// - За допомогою циклу for і document.write() вивести 10 блоків div
// c довільним текстом всередині
for (let i = 0; i<10; i++) {
    document.write(`<div><h3>Hello!</h3></div>`);
}

console.log('_______Task 2_______');
document.write('___Task 2___');
// #TYj7ncx
// - За допомогою циклу for і document.write() вивести 10 блоків div
// c довільним текстом і індексом всередині
let arr = []
for (let i = 0; i<10; i++) {
    document.write(`<div>
                       <h3>${i} Hello!</h3>
                       </div>`);
}
console.log(arr);


console.log('_______Task 3_______');
document.write('___Task 3___');
// #uzkt71dp
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 0;
while (i < 20) {
    document.write(`<div>
                        <h1>OKTEN</h1>
                    </div>`);
    i++;
}

console.log('_______Task 4_______');
document.write('___Task 4___');
//     #OeT7t3uUMFi
// - За допомогою циклу while вивести в документ 20 блоків h1
// c довільним текстом і індексом всередині.
let i1 = 0;
while (i1 < 20) {
    document.write(`<div>
                        <h1>${i1} Good Day!</h1>
                    </div>`);
    i1++;
}

console.log('_______Task 5_______');
document.write('___Task 5___');
//     #vLSZKMlO
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву
// щоб получився цілий список з даними з масиву
// -----------------------------------------------
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
for (const item of listOfItems) {
    document.write(`<div>
                        <ul>
                            <li>${item}</li>
                        </ul>
                   </div>`)
}


console.log('_______Task 6_______');
document.write('___Task 6___');
// #Hdjws7E
// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
//
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
//
// --------------------

for (const product of products) {
    document.write(`<div class="product-card">
                        <h3 class="product-title">${product.title}. Price - ${product.price}</h3>
                        <img src="${product.image}" alt="" class="product-image">
                    </div>`)
}
console.log('_______Task 7_______');
document.write('___Task 7___');
// #4WrHwFTEop0
// є масив
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
// за допомоги циклу вивести:
// - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років

console.log('користувачі зі статусом true');
for (const user of users) {
    if (user.status) {
        console.log(user);
    }
}

console.log('користувачі зі статусом false');
for (const user of users) {
    if (user.status === false) {
        console.log(user);
    }
}

console.log('користувачі, які старші за 30 років');
for (const user of users) {
    if (user.age > 30) {
        console.log(user);
    }
}
