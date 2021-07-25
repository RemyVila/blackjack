// SHUFFLE FUNCTION !!
const shuffle = (deck) => {
  var currentIndex = deck.length,
    temporaryValue,
    randomIndex;

  let reshuffledDeck = deck;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = reshuffledDeck[currentIndex];
    reshuffledDeck[currentIndex] = reshuffledDeck[randomIndex];
    reshuffledDeck[randomIndex] = temporaryValue;
  }
  deckInUse = reshuffledDeck;
  return deckInUse;
};
// END OF SHUFFLE FUNCTION

module.exports = {
  shuffle,
};
