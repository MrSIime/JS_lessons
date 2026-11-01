let games = [
    { id: 1, title: "Minecraft", genre: "Пісочниця", price: 600, rating: 9, available: true },
    { id: 2, title: "The Witcher 3", genre: "RPG", price: 800, rating: 10, available: true },
    { id: 3, title: "Mimesis", genre: "хорор", price: 1500, rating: 6, available: false },
    { id: 4, title: "Neon abbys", genre: "Рогалик", price: 400, rating: 9, available: true },
    { id: 5, title: "Cyberpunk 2077", genre: "RPG", price: 1200, rating: 8, available: true },
    { id: 6, title: "the goat simulater", genre: "Симулятор", price: 300, rating: 9, available: true },
    { id: 7, title: "Among Us", genre: "Вечірка", price: 100, rating: 7, available: false }
];

function makeText(list) {
    let text = "";
    for (let game of list) {
        text = `${text}${game.id}. ${game.title} - ${game.genre}, ціна: ${game.price}, рейтинг: ${game.rating}, в наявності: ${game.available}\n`;
    }
    return text;
}

alert(`Усі ігри:\n${makeText(games)}`);

alert(`Кількість ігор: ${games.length}`);

let newTitle = prompt("Введіть назву гри:");

let newGenre = prompt("Введіть жанр гри:");

let newPrice = prompt("Введіть ціну гри:");

let newRating = prompt("Введіть рейтинг гри (1-10):");

games.push({
    id: games.length + 1,
    title: newTitle,
    genre: newGenre,
    price: Number(newPrice),
    rating: Number(newRating),
    available: true
});
alert(`Гру додано. Кількість ігор: ${games.length}`);

games.pop();
alert(`Останню гру видалено. Кількість ігор: ${games.length}`);

let searchTitle = prompt("Введіть назву гри для пошуку:");
while (searchTitle === null || searchTitle === "") {
    searchTitle = prompt("Введіть назву гри для пошуку:");
}

let foundGame = games.find(game => game.title.toLowerCase() === searchTitle.toLowerCase());
if (foundGame === undefined) {
    alert("Гру не знайдено.");
}
else {
    alert(`Знайдена гра:\n${makeText([foundGame])}`);
}

let maxPrice = prompt("Введіть максимальну ціну:");
while (maxPrice === null || maxPrice === "" || isNaN(maxPrice) || maxPrice < 0) {
    maxPrice = prompt("Введіть максимальну ціну:");
}

let cheapGames = games.filter(game => game.price <= Number(maxPrice));
if (cheapGames.length === 0) {
    alert("Немає ігор з такою ціною.");
}
else {
    alert(`Ігри з ціною до ${maxPrice}:\n${makeText(cheapGames)}`);
}

let goodGames = games.filter(game => game.rating >= 8);
alert(`Ігри з рейтингом від 8:\n${makeText(goodGames)}`);

let titles = games.map(game => game.title);
alert(`Назви ігор:\n${titles.join("\n")}`);

let saleGames = games.map(game => {
    return {
        id: game.id,
        title: game.title,
        genre: game.genre,
        price: Number((game.price * 0.85).toFixed(2)),
        rating: game.rating,
        available: game.available
    };
});
alert(`Ігри зі знижкою 15%:\n${makeText(saleGames)}`);

games.sort((first, second) => first.price - second.price);
alert(`Ігри від найдешевшої до найдорожчої:\n${makeText(games)}`);