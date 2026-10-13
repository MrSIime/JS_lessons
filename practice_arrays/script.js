// Завдання 1
let topics = ["JavaScript", "HTML", "CSS", "Git", "WebStorm", "Vue"];
let seats = [12, 8, 15, 0, 6, 10];

let myName = prompt("Введіть своє ім'я:");
while (myName === null || myName === "") {
    myName = prompt("Введіть своє ім'я:");
}

let day = Number(prompt("Введіть день народження (1-31):"));
while (isNaN(day) || day < 1 || day > 31) {
    day = Number(prompt("Введіть день народження (1-31):"));
}

let month = Number(prompt("Введіть місяць народження (1-12):"));
while (isNaN(month) || month < 1 || month > 12) {
    month = Number(prompt("Введіть місяць народження (1-12):"));
}

let personalNumber = (myName.length + day + month) % topics.length;
alert(`Вам рекомендований вебінар: ${topics[personalNumber]}`);

let catalog = "Каталог вебінарів:\n";
for (let i = 0; i < topics.length; i++) {
    let status = "Місць немає";
    if (seats[i] > 0) {
        status = "Набір відкрито";
    }
    catalog = `${catalog}${i + 1}. ${topics[i]} - місць: ${seats[i]} - ${status}\n`;
}
alert(catalog);

let minSeats = prompt("Введіть мінімальну кількість місць:");
while (minSeats === null || minSeats === "" || isNaN(minSeats) || minSeats < 0) {
    minSeats = prompt("Введіть мінімальну кількість місць:");
}

let filterText = `Вебінари, де місць не менше ${minSeats}:\n`;
let foundCount = 0;
for (let i = 0; i < topics.length; i++) {
    if (seats[i] >= minSeats) {
        filterText = `${filterText}${i + 1}. ${topics[i]} - місць: ${seats[i]}\n`;
        foundCount++;
    }
}
if (foundCount === 0) {
    alert("Немає вебінарів з такою кількістю місць.");
}
else {
    alert(filterText);
}

// Завдання 2
let searchName = prompt("Введіть назву вебінару:");

if (searchName === null) {
    alert("Пошук скасовано.");
}
else {
    searchName = searchName.toLowerCase();
    let foundIndex = -1;
    for (let i = 0; i < topics.length; i++) {
        if (topics[i].toLowerCase() === searchName) {
            foundIndex = i;
            break;
        }
    }

    if (foundIndex === -1) {
        alert("Такої назви немає.");
    }
    else if (seats[foundIndex] <= 0) {
        alert("На цей вебінар місць немає.");
    }
    else {
        let isSignUp = confirm(`Записати вас на вебінар ${topics[foundIndex]}?`);
        if (isSignUp) {
            seats[foundIndex] = seats[foundIndex] - 1;
            alert(`Ви записані! Залишилось місць: ${seats[foundIndex]}`);
        }
        else {
            alert("Запис скасовано.");
        }
    }
}

// Завдання 3
let participants = [];
participants.push(myName);

let count = 1;
while (count < 5) {
    let answer = prompt(`Введіть ім'я учасника ${count + 1}:`);
    if (answer === null) {
        alert("Введення завершено.");
        break;
    }
    if (answer !== "") {
        participants.push(answer);
        count++;
    }
}

function showParticipants() {
    let text = "Список учасників:\n";
    for (let i = 0; i < participants.length; i++) {
        text = `${text}${i + 1}. ${participants[i]}\n`;
    }
    alert(text);
}

showParticipants();

let longCount = 0;
for (let i = 0; i < participants.length; i++) {
    if (participants[i].length > myName.length) {
        longCount++;
    }
}
alert(`Імен довших за ваше: ${longCount}\nВаш поріг: ${myName.length}`);

let wantChange = confirm("Хочете змінити ім'я?");
if (wantChange) {
    let number = prompt(`Введіть номер учасника (1-${participants.length}):`);
    if (number === null) {
        alert("Зміну скасовано.");
    }
    else {
        number = Number(number);
        if (isNaN(number) || number < 1 || number > participants.length || number % 1 !== 0) {
            alert("Неправильний номер.");
        }
        else {
            let newName = prompt("Введіть нове ім'я:");
            while (newName === "") {
                newName = prompt("Введіть нове ім'я:");
            }
            if (newName !== null) {
                participants[number - 1] = newName;
                showParticipants();
            }
            else {
                alert("Зміну скасовано.");
            }
        }
    }
}

// Завдання 4
let visits = [24, 18, 32, 0, 15, 27, 9, 21];
let bonus = (day + month) % 7;

let personalVisits = [];
for (let i = 0; i < visits.length; i++) {
    personalVisits.push(visits[i] + bonus);
}

function getVisitStats(values) {
    let sum = 0;
    let max = values[0];
    let min = values[0];
    for (let i = 0; i < values.length; i++) {
        sum = sum + values[i];
        if (values[i] > max) {
            max = values[i];
        }
        if (values[i] < min) {
            min = values[i];
        }
    }
    let average = sum / values.length;
    return [sum, average, max, min];
}

let stats = getVisitStats(personalVisits);

let limit = prompt("Введіть поріг відвідуваності:");
while (limit === null || limit === "" || isNaN(limit) || limit < 0) {
    limit = prompt("Введіть поріг відвідуваності:");
}

let overLimitCount = 0;
for (let i = 0; i < personalVisits.length; i++) {
    if (personalVisits[i] >= limit) {
        overLimitCount++;
    }
}

alert(`Бонус: ${bonus}\nСума: ${stats[0]}\nСереднє: ${stats[1]}\nМаксимум: ${stats[2]}\nМінімум: ${stats[3]}\nЗначень не менше порогу: ${overLimitCount}`);

let wantNumbers = confirm("Показати номери вебінарів, які досягли порогу?");
if (wantNumbers) {
    let numbersText = "";
    for (let i = 0; i < personalVisits.length; i++) {
        if (personalVisits[i] >= limit) {
            numbersText = `${numbersText}${i + 1} `;
        }
    }
    if (numbersText === "") {
        alert("Жоден вебінар не досяг порогу.");
    }
    else {
        alert(`Номери вебінарів: ${numbersText}`);
    }
}

// Завдання 5
function showTopics() {
    if (topics.length === 0) {
        alert("Список порожній.");
        return;
    }
    let text = "Вебінари:\n";
    for (let i = 0; i < topics.length; i++) {
        text = `${text}${i + 1}. ${topics[i]} (місць: ${seats[i]})\n`;
    }
    alert(text);
}

function findTopic() {
    let name = prompt("Введіть назву вебінару:");
    if (name === null) {
        alert("Пошук скасовано.");
        return;
    }
    name = name.toLowerCase();
    for (let i = 0; i < topics.length; i++) {
        if (topics[i].toLowerCase() === name) {
            alert(`Знайдено: ${topics[i]}\nНомер: ${i + 1}\nМісць: ${seats[i]}`);
            return;
        }
    }
    alert("Такого вебінару немає.");
}

let isExit = false;
do {
    let choice = prompt(`Меню:\n1 - показати вебінари\n2 - додати вебінар\n3 - перейменувати за номером\n4 - знайти вебінар\n5 - видалити останній вебінар\n0 - вихід`);

    if (choice === null) {
        choice = "0";
    }

    switch (choice) {
        case "1":
            showTopics();
            break;

        case "2":
            let newTopic = prompt("Введіть нову назву:");
            if (newTopic === null || newTopic === "") {
                alert("Назва не може бути порожньою.");
                break;
            }
            let newSeatsText = prompt("Введіть кількість місць:");
            if (newSeatsText === null || newSeatsText === "") {
                alert("Додавання скасовано.");
                break;
            }
            let newSeats = Number(newSeatsText);
            if (isNaN(newSeats) || newSeats < 0) {
                alert("Неправильна кількість місць.");
                break;
            }
            topics.push(newTopic);
            seats.push(newSeats);
            alert("Вебінар додано.");
            break;

        case "3":
            if (topics.length === 0) {
                alert("Список порожній.");
                break;
            }
            let renameNumber = prompt(`Введіть номер вебінару (1-${topics.length}):`);
            if (renameNumber === null) {
                alert("Скасовано.");
                break;
            }
            renameNumber = Number(renameNumber);
            if (isNaN(renameNumber) || renameNumber < 1 || renameNumber > topics.length || renameNumber % 1 !== 0) {
                alert("Неправильний номер.");
                break;
            }
            let renameName = prompt("Введіть нову назву:");
            if (renameName === null || renameName === "") {
                alert("Назва не може бути порожньою.");
                break;
            }
            topics[renameNumber - 1] = renameName;
            alert("Назву змінено.");
            break;

        case "4":
            findTopic();
            break;

        case "5":
            if (topics.length === 0) {
                alert("Список порожній.");
                break;
            }
            let isDelete = confirm(`Видалити вебінар ${topics[topics.length - 1]}?`);
            if (isDelete) {
                topics.pop();
                seats.pop();
                alert("Останній вебінар видалено.");
            }
            else {
                alert("Видалення скасовано.");
            }
            break;

        case "0":
            isExit = confirm("Ви справді хочете вийти?");
            break;

        default:
            alert("Такого пункту немає.");
    }
}
while (isExit === false);

// Завдання 6
let requestScores = [72, 95, 41, 86, 60, 100, 53, 88, 29];
let personalScore = (day * month + myName.length) % 101;
requestScores.push(personalScore);

function distributeRequests(scores) {
    let high = [];
    let medium = [];
    let low = [];
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] >= 85) {
            high.push(scores[i]);
        }
        else if (scores[i] >= 50) {
            medium.push(scores[i]);
        }
        else {
            low.push(scores[i]);
        }
    }
    return [high, medium, low];
}

function getAverage(list) {
    if (list.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
        sum = sum + list[i];
    }
    return sum / list.length;
}

let keepAdding = true;
while (keepAdding) {
    let answer = prompt("Введіть новий бал (0-100). Скасувати - зупинити:");
    if (answer === null) {
        break;
    }
    let score = Number(answer);
    if (answer === "" || isNaN(score) || score < 0 || score > 100) {
        alert("Неправильний бал. Введіть число від 0 до 100.");
    }
    else {
        requestScores.push(score);
        keepAdding = confirm("Бал додано. Продовжити?");
    }
}

let groups = distributeRequests(requestScores);
let high = groups[0];
let medium = groups[1];
let low = groups[2];

let biggest = high.length;
if (medium.length > biggest) {
    biggest = medium.length;
}
if (low.length > biggest) {
    biggest = low.length;
}

let biggestText = "";
if (high.length === biggest) {
    biggestText = `${biggestText}Високі `;
}
if (medium.length === biggest) {
    biggestText = `${biggestText}Середні `;
}
if (low.length === biggest) {
    biggestText = `${biggestText}Низькі `;
}

let personalGroup = "Низький";
if (personalScore >= 85) {
    personalGroup = "Високий";
}
else if (personalScore >= 50) {
    personalGroup = "Середній";
}

alert(`Високі: ${high.join(", ")}\nКількість: ${high.length}, середній бал: ${getAverage(high)}\n\nСередні: ${medium.join(", ")}\nКількість: ${medium.length}, середній бал: ${getAverage(medium)}\n\nНизькі: ${low.join(", ")}\nКількість: ${low.length}, середній бал: ${getAverage(low)}\n\nНайбільша група: ${biggestText}\n\nВаш бал: ${personalScore} (група: ${personalGroup})`);