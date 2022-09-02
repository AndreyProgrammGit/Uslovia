"use strict";

// if (4 == 9) {
//     console.log('ok!');
// } else {
//     console.log('error');
// }

// const num = 50;

// if (num < 49) {
//     console.log('error');
// }else if (num > 100){
//     console.log('Много');
// }else {
//     console.log("Верно");
// }

// (num === 50) ?  console.log("Верно") : console.log('Много');

// const num = 50;

// switch (num) {
//     case 49:
//         console.log("false");
//         break;
//     case 50:
//         console.log("true");
//         break;
//     default:
//         console.log("Не в этот раз =)");
//         break;
// }

// const humburger = 5;
// const fries = null;

// if (humburger && fries){
//     console.log("Я сыт");
// } else{
//     console.log("Я не сыт");
// }

// const humburger = 3;
// const fries = 1;
// const cola = 0;

// console.log(humburger === 3 && cola && fries);

// console.log(1 && 5);
// console.log(1 && 0);
// console.log(null && 5);
// console.log(0 && 'asdasdasd');

// if (humburger === 3 && cola === 1 && fries) {
//     console.log("Все сыты");
// }else {
//     console.log("Мы уходим");
// }


const humburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (humburger === 3 && cola === 3 || fries === 3 && nuggets) {
    console.log("Все довольны");
}else {
    console.log("Мы уходим");
}

console.log(humburger === 3 && cola === 3 || fries === 3 && nuggets);


let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport);

console.log(!1 && 2 && 3);