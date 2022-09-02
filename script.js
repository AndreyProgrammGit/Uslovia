"use strict";

if (4 == 9) {
    console.log('ok!');
} else {
    console.log('error');
}

// const num = 50;

// if (num < 49) {
//     console.log('error');
// }else if (num > 100){
//     console.log('Много');
// }else {
//     console.log("Верно");
// }

// (num === 50) ?  console.log("Верно") : console.log('Много');

const num = 50;

switch (num) {
    case 49:
        console.log("false");
        break;
    case 50:
        console.log("true");
        break;
    default:
        console.log("Не в этот раз =)");
        break;
}