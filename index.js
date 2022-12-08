// const age = 22;
// let name = 'Isa';

// const age = 22; // * number
// const name = 'Isa'; // * string
// const isHungry = true; // * boolean - true/false
// const nothing = null; // * null - nothing
// const notFound = undefined; // * not found
// const arr = [1, 2, 3, 4]; // * array on numbers

// const person = {
//     name: 'Isa',
//     age: 22,
//     cityName: 'Almaty'
// } // * object


// const animals = ['cat', 'dog', 'bird', 'mouse', 'human'];

// * Чуть чуть про функции 
// function showInConsole() {
//     alert('message + number')
// }

// showInConsole();

// const x = 5;
// const y = 10;


// // * математические операторы
// console.log(x + y); // * plus
// console.log(x / y); // * divaid
// console.log(x * y); // * multiply
// console.log(x - y); // * minus

// const some = 1 + 1 + 3 + '2';
// console.log(some);

// * || или
// * && и

// * > больше
// * < меьше

// * == не строгое сравнение
// * === строгое сравнение
// * != не равно
// * 




// const x = 2;
// const y = 5;



// if (x > 3) {
//     console.log('x is more than 3: ', x);
// } else {
//     console.log('x is less than 3: ', x);
// }


// const name = 'Isa';

// if (name == 'Isa') {
//     console.log('name is Isa')
// } else {
//     console.log('not Isa')
// }

// const banana = 'banana';
// const apple = 'banana';

// const x = 5;


// if (banana == apple) {

//     console.log('is banan');

// } else {
//     console.log('not banan');
// }

// const x = 5;
// const y = 1;

// if (x != y) {
//     console.log('x != y');
// } else {
//     console.log('x == y');
// }

// const personOne = {
//     name: 'Max',
//     age: 22
// }

// const personTwo = {
//     name: 'Jack',
//     age: 22
// }

// if (personOne.age == personTwo.age) {
//     console.log('Они ровестники');
// } else {
//     console.log('Они не ровестники');
//     console.log(personOne.name + ': ' + personOne.age);
//     console.log(personTwo.name + ': ' + personTwo.age);
// }

// const fruit = 'apple';
// const fruitTwo = 'apple';

// const numOne = 1; // number
// const numTwo = '1'; // string

// if (numOne === numTwo) {
//     console.log('Равен');
// }

const button = document.querySelector('button');

function changeButtonColor() {
    button.style.backgroundColor = '#000';
}

button.addEventListener('click', function () {
    changeButtonColor();
})