console.log('____________Task 1____________');
// #HmvAfRQM
// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини.
// Відобразити всі поля кожної корзини.

let nextButton = document.getElementsByTagName('button')[0];

let counter = 0;
nextButton.onclick = function () {
const cartsDiv = document.getElementById('carts');
fetch(`https://dummyjson.com/carts?skip=${counter}&limit=10`)
    .then(value => value.json())
    .then(cartsObject => {
        const {carts} = cartsObject;
        console.log(carts);

        for (const cart of carts) {
            const div= document.createElement('div');
            div.classList.add('cart-container');
            const divWithInfo = document.createElement('div');
            divWithInfo.innerText = `
             "total": ${cart.total},
             "discountedTotal": ${cart.discountedTotal},
             "userId": ${cart.userId},
             " totalProducts:": ${cart.totalProducts},
              "totalQuantity:": ${cart.totalQuantity}
            `;
            const ol = document.createElement('ol');
            for (const product of cart.products) {
                const li = document.createElement('li');
                const info = document.createElement('p');
                info.innerText = `
                   "id"": ${product.id},
                   "title": ${product.title},
                   "price": ${product.price},
                   "quantity": ${product.quantity},
                   "total": ${product.total},
                   "discountPercentage": ${product.discountPercentage},
                   "discountedTotal": ${product.discountedTotal},
                   "thumbnail": ${product.thumbnail}
                `

                const img = document.createElement('img');
                img.src = product.thumbnail;
                li.append(img, info);

                ol.appendChild(li);

            }

            div.append(divWithInfo, ol);
            cartsDiv.appendChild(div);
        }
    });
    counter += 10;

};


// let cartsArray= document.getElementById('cartsDiv');
// let nextButton = document.getElementsByTagName('button')[0];
//
// let counter = 0;
// nextButton.onclick = function () {
//     cartsArray.innerText = '';
//     fetch(`https://dummyjson.com/carts?skip=${counter}&limit=10`)
//         .then(response => response.json())
//         .then(value => {
//             let {carts} = value;
//             for (const cart of carts) {
//                 let singleCartDiv = document.createElement('div');
//                 singleCartDiv.innerText=`${cart.id} ${cart.products}`
//                 // singleCartDiv.innerText=`${cart.id} ${cart.title} ${cart.price} ${cart.quantity} ${cart.total} ${cart.discountPercentage} ${cart.discountedTotal} ${cart.thumbnail}`
//
//                 cartsArray.appendChild(singleCartDiv);
//             }
//
//             console.log(value);
//         });
//
//     counter += 10;
//
// };


console.log('____________Task 2____________');
// #whXxOBlYS0H
// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
// Інгредієнти повинні бути список під час відображення.
const url = new URL('https://dummyjson.com/recipes');
url.searchParams.set('limit', '2');

const target = document.getElementsByClassName('target')[0];
fetch(url)
    .then(value=>value.json())
    .then(recipesObject=>{
        const {recipes} = recipesObject;
        for (const recipe of recipes) {
            console.log(recipe);
            const recipeDiv = document.createElement('div');
            for (const recipeKey in recipe) {
                // console.log(recipeKey, recipe[recipeKey]);
                if (Array.isArray(recipe[recipeKey])) {
                    const arrayAndTitleDiv = document.createElement('div');
                    const h3 = document.createElement('h3');
                    h3.innerText = `${recipeKey}:`;
                    const ol = document.createElement('ol');
                    const array = recipe[recipeKey];
                    for (const item of array) {
                        const li = document.createElement('li');
                        li.innerText = item;
                        ol.appendChild(li);
                    }
                    arrayAndTitleDiv.append(h3, ol);
                    recipeDiv.appendChild(arrayAndTitleDiv);
                } else {
                    if (recipeKey !== 'image') {
                    const keyDiv = document.createElement('div');
                    keyDiv.innerText = `${recipeDiv}: ${recipe[recipeKey]}`;

                    recipeDiv.appendChild(keyDiv);
                    }

                }

            }
            const img = document.createElement('img');
            img.src = recipe.image;
            recipeDiv.appendChild(img);


            target.appendChild(recipeDiv);
        }
    });
