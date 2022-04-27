//let firstCard = getRandom();
//let secondCard = getRandom();
let cards = [];
//cards.push(firstCard,secondCard);
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let player = {
    name: 'ivan',
    chips: 0
};

let messageElement = document.getElementById('message-el');
let sumElement = document.getElementById('sum-el');
let cardsElement = document.getElementById('cards-el');
let playerElement = document.getElementById('player-el');

function startGame(){
    let firstCard = getRandom();
    let secondCard = getRandom();
    cards = [];
    sum = 0;
    hasBlackJack = false;
    isAlive = true;
    cards.push(firstCard,secondCard);
    sum += (firstCard + secondCard);
    renderGame();
}

function renderGame(){
    playerElement.textContent = `${player.name}: ${player.chips}$`;
    sumElement.textContent = `Sum: ${sum}`;
    cardsElement.textContent = 'Cards: ';
    for(let i = 0;i<cards.length;i++){
        cardsElement.textContent += cards[i] + ' ';
    }

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        player.chips += 100;
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
    if(isAlive && !hasBlackJack){
        let cardPicked = getRandom();
        sum += cardPicked;
        cards.push(cardPicked);
        renderGame();
    }
}