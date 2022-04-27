//let firstCard = getRandom();
//let secondCard = getRandom();
let cards = [];
//cards.push(firstCard,secondCard);
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageElement = document.getElementById('message-el');
let sumElement = document.getElementById('sum-el');
let cardsElement = document.getElementById('cards-el');

function startGame(){
    let firstCard = getRandom();
    let secondCard = getRandom();
    isAlive = true;
    cards.push(firstCard,secondCard);
    sum += (firstCard + secondCard);
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
    let randomNum = Math.floor(Math.random()*13)+1;
    if(randomNum == 1){
        return 11;
    }else if(randomNum > 10){
        return 10;
    }else{
        return randomNum;
    }
}

function newCard(){
    if(isAlive || hasBlackJack){
        let cardPicked = getRandom();
        sum += cardPicked;
        cards.push(cardPicked);
        renderGame();
    }
}