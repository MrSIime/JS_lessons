let nameInput = document.querySelector('#nameInput');
let eventInput = document.querySelector('#eventInput');
let addBtn = document.querySelector('#addBtn');
let error = document.querySelector('#error');
let list = document.querySelector('#list');
let totalCount = document.querySelector('#totalCount');
let confirmedCount = document.querySelector('#confirmedCount');
let emptyText = document.querySelector('#emptyText');
let clearBtn = document.querySelector('#clearBtn');

function updateInfo() {
    let allCards = document.querySelectorAll('.card');
    let confirmedCards = document.querySelectorAll('.confirmed');
    totalCount.textContent = allCards.length;
    confirmedCount.textContent = confirmedCards.length;
    if (allCards.length === 0) {
        emptyText.classList.remove('hidden');
    }
    else {
        emptyText.classList.add('hidden');
    }
}

function addCard(name, eventName) {
    let card = document.createElement('div');
    card.classList.add('card');

    let info = document.createElement('div');
    let nameText = document.createElement('h3');
    let eventText = document.createElement('p');
    let status = document.createElement('span');
    let buttons = document.createElement('div');
    let confirmBtn = document.createElement('button');
    let deleteBtn = document.createElement('button');
    
    nameText.textContent = name;
    eventText.textContent = eventName;
    status.textContent = "Очікує";
    status.classList.add('status');
    info.appendChild(nameText);
    info.appendChild(eventText);
    info.appendChild(status);

    confirmBtn.textContent = "Підтвердити";
    confirmBtn.classList.add('confirmBtn');
    deleteBtn.textContent = "Видалити";
    deleteBtn.classList.add('deleteBtn');
    buttons.appendChild(confirmBtn);
    buttons.appendChild(deleteBtn);

    card.appendChild(info);
    card.appendChild(buttons);
    list.appendChild(card);

    confirmBtn.addEventListener('click', function() {
        card.classList.toggle('confirmed');
        if (card.classList.contains('confirmed')) {
            status.textContent = "Підтверджено";
            confirmBtn.textContent = "Скасувати";
        }
        else {
            status.textContent = "Очікує";
            confirmBtn.textContent = "Підтвердити";
        }
        updateInfo();
    })

    deleteBtn.addEventListener('click', function() {
        card.remove();
        updateInfo();
    })
}

addBtn.addEventListener('click', function() {
    if (nameInput.value === "" || eventInput.value === "") {
        error.textContent = "Заповніть обидва поля!";
        return;
    }
    error.textContent = "";
    addCard(nameInput.value, eventInput.value);
    nameInput.value = "";
    eventInput.value = "";
    updateInfo();
})

clearBtn.addEventListener('click', function() {
    if (confirm(`Ви точно хочете видалити всі заявки?`)) {
        list.innerHTML = "";
        updateInfo();
    }
})

updateInfo();
