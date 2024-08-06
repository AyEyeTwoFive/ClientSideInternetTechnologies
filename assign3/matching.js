const cards = [
    '1clubs', '1hearts', '2clubs', '2hearts', '3clubs', '3hearts'
];
let gameBoard = document.getElementById('game-board');
let flippedCards = [];
let matchedCards = [];

// Shuffle cards
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Initialize game
function initGame() {
    gameBoard.innerHTML = '';
    flippedCards = [];
    matchedCards = [];
    let selectedCards = cards.slice(0, 3);  // Only select 3 pairs
    let shuffledCards = [...selectedCards, ...selectedCards];
    shuffle(shuffledCards);
    shuffledCards.forEach(card => {
        let cardElement = document.createElement('img');
        cardElement.src = 'back.png';
        cardElement.dataset.card = card;
        cardElement.classList.add('card');
        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);
    });
}

// Flip card
function flipCard(event) {
    if (flippedCards.length < 2 && !event.target.classList.contains('flipped')) {
        let cardElement = event.target;
        cardElement.src = `${cardElement.dataset.card}.png`;
        cardElement.classList.add('flipped');
        flippedCards.push(cardElement);

        if (flippedCards.length === 2) {
            setTimeout(checkMatch, 1500);
        }
    }
}

// Check for match
function checkMatch() {
    let [card1, card2] = flippedCards;
    if (card1.dataset.card === card2.dataset.card) {
        card1.src = 'clear.png';
        card2.src = 'clear.png';
        matchedCards.push(card1, card2);
    } else {
        card1.src = 'back.png';
        card2.src = 'back.png';
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
    }
    flippedCards = [];
}

// Restart game
document.getElementById('restart-btn').addEventListener('click', initGame);

// Initialize the game on page load
initGame();
