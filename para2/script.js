// else if (){
// 
// }
// true
// 1

// false
// 0
// 0n
// "" ''
// null
// undefined
// NaN

// let a = 10, b = "10";
// // console.log(a == b);
// console.log(a === b);
// // console.log(a != b);
// // console.log(a !== b);
// // > < >= <=

// let a = +prompt("Введи число: ");
// let b = +prompt("Введи число: ");
// let c;

// if (a > b) {
//     c = 'a > b';
// } else if (a < b) {
//     c = 'a < b';
// } else {
//     c = 'a == b';
// }

// alert(c);

// if (a > b) c = 'a > b';
// else if (a < b) c = 'a < b';
// else c = 'a == b';

// alert(c);


// let course = prompt("What is the name of the course?"), tittle;
// switch (course) {
//     case 'figma':
//         tittle = 'Figma';
//         break;

//     case 'WEB':
//         tittle = 'HTML + CSS';
//         break;

//     case 'Javascript':
//         tittle = 'Javascript основи програмування';
//         break;
// }
// alert(tittle);

// let a = true;
// console.log(!a);

// let a = 10, b = 12, c = 5;
// if (a > b && a > c) {
//     console.log(a);
// } else if (b > a || a > c) {}

//---------------------------------------------------------------------

// 1. запитати у користувача який товар він хоче купити, запитати вартість, кількість, якщо сума покупки більше 5000 застосувати знижку якщо меньше просто виставити

// let product = prompt("Який товар ви хочете купити?");
// let price = +prompt("Яка вартість товару?");
// let num = +prompt("Яка кількість товару?");
// let totalPrice = price * num;

// if (totalPrice > 5000) {
//     totalPrice *= 0.9;
//     alert(`Вартість товару ${product} зі знижкою становить ${totalPrice}`);
// } else {
//     alert(`Вартість товару ${product} без знижки становить ${totalPrice}`);
// }

// 2. три способи доставки (кур'єр, пошта, самовивіз) через свіч, потрібно визначити який тип доставки та вартість (300, 100, 20)

// let delivery = +prompt("виберіть як ви хочете отримати товар:\n 1. кур'єр \n 2. пошта \n 3. самовивіз"), result;

// switch(delivery) {
//     case(1):
//         result = "300";
//         break
//     case(2):
//         result = "100";
//         break
//     case(3):
//         result = "20";
//         break
// }

// alert(`ціна доставки: ${result}`)
    