export const createDeck = () => {
    var suits = ["S", "H", "D", "C"];
    var values = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "X",
      "J",
      "Q",
      "K",
      "A",
    ];
    var deck = [];
  
    for (var suitCounter = 0; suitCounter < 4; suitCounter++) {
      for (var valCounter = 0; valCounter < 13; valCounter++) {
        deck.push(suits[suitCounter] + values[valCounter]);
      }
    }
    return deck;
  }
  
  export const shuffleDeck = (deck) => {
    for (var i = 0; i < 52; i++) {
      var tempCard = deck[i];
      var randomIndex = Math.floor(Math.random() * 52);
      deck[i] = deck[randomIndex];
      deck[randomIndex] = tempCard;
    }
    return deck;
  }
  

  
