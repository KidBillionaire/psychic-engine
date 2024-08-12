
export const applyAnte = (players, anteAmount) => {
    players.forEach(player => {
        player.chips -= anteAmount;
        player.pot += anteAmount;
    });
};

export const applyBlinds = (players, smallBlind, bigBlind) => {
    players[0].chips -= smallBlind;
    players[0].pot += smallBlind;

    players[1].chips -= bigBlind;
    players[1].pot += bigBlind;
};

export const getBetOrder = (players, startingIndex) => {
    let order = [];
    for (let i = 0; i < players.length; i++) {
        order.push(players[(startingIndex + i) % players.length]);
    }
    return order;
};

export const handleBet = (player, amount, currentBet) => {
    if (amount < currentBet) {
        throw new Error('Bet amount is less than the current bet.');
    }
    player.chips -= amount;
    player.pot += amount;
    return amount;
};

export const handleRaise = (player, amount, currentBet) => {
    const raiseAmount = amount - currentBet;
    player.chips -= amount;
    player.pot += amount;
    return raiseAmount;
};

export const handleCheck = (player) => {
    // Player checks, no chips are bet
};

export const handleFold = (player) => {
    player.isActive = false;
};

export const flipCards = (player) => {
    player.cards.forEach(card => {
        card.isFaceUp = true;
    });
};

export const determineWinner = (players) => {
    // Add logic to determine the best hand and return the winner
    // This would involve comparing poker hands
};
