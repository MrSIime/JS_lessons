let savedLogin = "";
let savedPassword = "";
let hasUser = false;
 
function register() {
  let login = prompt("Логін:");
	let password = prompt("Пароль:");
	savedLogin = login;
	savedPassword = password;
	hasUser = true;
	alert("Зарегався");
}
 
function signIn() {
	if (hasUser == false) {
		alert("Зарегайся");
		return;
	}
	let tryies = 3;
	while (tryies > 0) {
		let login = prompt("Логін:");
		let password = prompt("Пароль:");
		if (login == savedLogin && password == savedPassword) {
			alert("Ввійшов");
			return;
		}
		tryies = tryies - 1;
		if (tryies > 0) {
			alert(`капут, залишилось ${tryies} спроб`);
		}
	}
	alert("спроби капут, заблоковано");
}
 
function menu() {
	let choice;
    choice = +prompt("Меню\n1 - регестрація\n2 - ввійти\n0 - вийти");
    if (choice == 1) {
        register();
    }
    else if (choice == 2) {
        signIn();
    }
    else if (choice == 0 || choice === null) {
        alert("пака");
        choice = "0";
    }
    else {
        alert("шось не то, заново");
    }
    while (choice != "0");
}
 
menu();