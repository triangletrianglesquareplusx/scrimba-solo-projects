let firstCard = 10;
let secondCard = 4;
let cards = [];
cards.push(firstCard,secondCard);
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageElement = document.getElementById('message-el');
let sumElement = document.getElementById('sum-el');
let cardsElement = document.getElementById('cards-el');

function startGame(){
    renderGame();
}

function renderGame(){
    sumElement.textContent = `Sum: ${sum}`;
    cardsElement.textContent = 'Cards: ';
    for(let i = 0;i<cards.length;i++){
        cardsElement.textContent += cards[i] + ' ';
    }

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageElement.textContent = message;
}
function getRandom(){

}

function newCard(){
    let cardPicked = 2;
    sum += cardPicked;
    cards.push(cardPicked);
    renderGame();
}