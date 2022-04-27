let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messageElement = document.getElementById('message-el');
let sumElement = document.getElementById('sum-el');
let cardsElement = document.getElementById('cards-el');
function startGame(){
    sumElement.textContent = `Sum: ${sum}`;
    cardsElement.textContent = `Cards: ${firstCard} ${secondCard}`;
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageElement.textContent = message;
}

function newCard(){
    
}