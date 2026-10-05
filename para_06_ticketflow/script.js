let eventT = 0;
let basePrice = 0;

while (Number.isNaN(eventT) || eventT < 1 || eventT > 3) {
    eventT = +prompt("Оберіть тип події:\n1 - Кіно 150 грн\n2 - Театр 220 грн\n3 - Концерт 350 грн");
    switch (eventT) {
        case 1:
            basePrice = 150;
            break;
        case 2:
            basePrice = 220;
            break;
        case 3:
            basePrice = 350;
            break;
        default:
            alert("Спробуйте знову");
            continue;
    }
    break;
}

let dayType = 0;
while (dayType !== 1 && dayType !== 2) {
    dayType = +prompt("Оберіть день:\n1 - Будній\n2 - Вихідний (15% знижки)");
    if (dayType !== 1 && dayType !== 2) {
        alert("Спробуйте знову. Виберіть 1-будній або 2-вихідний.");
    }
}
if (dayType === 2) {
    basePrice*=1.15;
}

let ticketsCount = 0;
while (Number.isNaN(ticketsCount) || ticketsCount < 1 || ticketsCount > 6) {
    ticketsCount = +prompt("Введіть кількість квитків від 1 до 6 ");
    if (Number.isNaN(ticketsCount) ||ticketsCount < 1 || ticketsCount > 6) {
        alert("Спробуйте знову");
    }
}

let processedTickets = 0;
let freeTicketsCount = 0;
let discountedTicketsCount = 0;
let fullPriceTicketsCount = 0;
let totalSum = 0;
let age;

for (let i = 1; i <= ticketsCount; i++) {
    let input = prompt(`Квиток #${i}, ведіть вік відвідувача:`);
    if (input === null) {
        break;
    }
    age = +input;


    while (Number.isNaN(age) || age < 0 || age > 120) {
        alert("Спробуйте знову");
        input = prompt(`Квиток ${i}. Введіть вік відвідувача:`);

        if (input === null) break;
        age = +input;
    }

    processedTickets++;

    let discountPercent = 0;

    if (age >= 0 && age <= 5) {
        freeTicketsCount++;
        alert(`Квиток #${i} безкоштовний (вік: ${age})`);
        continue;

    }
    else if (age >= 6 && age <= 12) {
        discountPercent = 50;
        discountedTicketsCount++;

    }
    else if (age >= 13 && age <= 17) {
        discountPercent = 20;
        discountedTicketsCount++;

    }
    else if (age >= 18 && age <= 59) {
        if (age <= 25) {
            let studentCard = +prompt(`Квиток #${i}: Чи є студентський квиток?\n1 - Є\n2 - Немає`);
            if (studentCard==1) {
                discountPercent = 10;
                discountedTicketsCount++;
            }
            else{
                fullPriceTicketsCount++;
            }
        }
        else{
            fullPriceTicketsCount++;
        }
    }
    else if (age >= 60) {
        discountPercent = 25;
        discountedTicketsCount++;
    }

    let currentTicketPrice = basePrice * (1 - discountPercent / 100);
    totalSum += currentTicketPrice;

    alert(`Квиток #${i}: ${currentTicketPrice.toFixed(2)} грн (знижка ${discountPercent}%)`);
}
let finalSum = totalSum;
if (finalSum > 1000) {
    finalSum = finalSum * 0.95;
    alert("Додаткова знижка 5%.");
}

alert(
    `TicketFlow:\n` +
    `Оброблено квитків: ${processedTickets}\n` +
    `Безкоштовних: ${freeTicketsCount}\n` +
    `Зі знижкою: ${discountedTicketsCount}\n` +
    `Повна ціна: ${fullPriceTicketsCount}\n` +
    `Загальна вартість: ${finalSum} грн`
);