console.log('______Task 1______');
// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
// Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.

function cloner(obj) {
    if (obj) {
        let functions = [];
        for (const key in obj) {
            if (typeof obj[key] === 'function'){
                const functionClone = obj[key].bind({});
                functions.push({functionClone,key});
            }
        }

        // console.log(functions);
        const cloneObj = JSON.parse(JSON.stringify(obj));
        // console.log(cloneObj);
        for (const func of functions) {
            cloneObj[func.key]=func.functionClone;
        }

        // cloneObj[functions[0].key] = functions[0].functionClone;
        // cloneObj[functions[1].key] = functions[1].functionClone;

        console.log(cloneObj);
        return cloneObj;
    }
    throw new Error('!!!');
}

const clone = cloner({id:12, name: 'tom', greeting(){console.log('Hello!')}, foo(){console.log('New day!')}})
clone.foo();


console.log('______Task 2______');
// #iz6emEsP2BA
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
// Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції

console.log(coursesAndDurationArray.map((courses, index) => ({...courses, id: index + 1})));

let mapResult = coursesAndDurationArray.map((courses,index) =>{
    let obj={
        id: index + 1,
        title: courses.title,
        monthDuration: courses.monthDuration,
    }
    return obj;
});
console.log(mapResult);




