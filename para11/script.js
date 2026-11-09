let enrollBtn = document.querySelector('#enrollBtn');
let statuss = document.querySelector('#status');

enrollBtn.addEventListener('click', function () {
    statuss.textContent = "Ви успішно записані на курс!";
    enrollBtn.textContent = "Запис оформлено";
    statuss.classList.add('success');
})

let studentName = document.querySelector('#studentName');
let welcome = document.querySelector('#welcome');

studentName.addEventListener('input', function(){
    let name = studentName.value.trim();
    if (name === ""){
        welcome.textContent = "Вітаємо, гостю!";
    }
    else{
        welcome.textContent = "Вітаємо "+name+" !";
    }
})

let format = document.querySelector('#format');
let cost = document.querySelector('#cost');
let strong = document.querySelector('#strong');

format.addEventListener('change', function(){
    let selectPrice = Number(format.value);
    strong.textContent = selectPrice + "грн";
})

let detailsBtn = document.querySelector('#detailsBtn');
let details = document.querySelector('#details');

detailsBtn.addEventListener('click', function(){
    details.classList.toggle('hidden');
    if (details.classList.contains('hidden')){
        detailsBtn.textContent = "Показати опис";
    } else{
        detailsBtn.textContent = "Приховати опис";
    }
})

let card = document.querySelector('#card');
let themeBtn = document.querySelector('#themeBtn');

themeBtn.addEventListener('click', function(){
    card.classList.toggle("dark");
    if (card.classList.contains('dark')){
        themeBtn.textContent = "Світла тема";
    } else{
        themeBtn.textContent = "Темна тема";
    }
})