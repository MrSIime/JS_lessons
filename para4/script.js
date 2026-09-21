// for (let i = 1; i<=5; i++){
//     console.log("number " + i);
// }



// for (let i = 0; i<=100; i+=6){
//     if (i>=20){
//         console.log(i);
//         break;
//     }
// }

// for (let i = 1; i<=100; i++){
//     if (i%5 === 0){
//         continue;
//     }
//     console.log(i);
// }


let sum = 0;
let min = 12;
let max = 0;
let high;
let other;
let ave;
let scount = +prompt("кількість учнів - ");

pupils = "";

for (let i = 1; i <= scount; i++){
    let num = +prompt("оцінка учня "+i);
    if (!(num>=1 && num<=12)) {
        alert("введіть правильно");
        i--
        continue
    }

    pupils+= `Учень ${i} - ${num}\n`

    sum+=num;

    if (num>=10){
        high++
    }
    else {
        other++
    }

    if (num<min){
        min=num
    }
    if (num>max){
        max=num
    }
}

ave = sum/scount;

alert(`Кіслькість учнів - ${scount}\nсума оцінок - ${sum}\nсереднє значення - ${ave}\nмаксимальна оцінка - ${max}\nмінімальна оцінка - ${min}\n\nОцінки кожного учня:\n\n${pupils}`)