exports.seed = function (knex) {
  // Deletes ALL existing entries
  return (
    knex("cards")
      .truncate() // truncate instead of delete will rd of all...
      //  ...entries in users db and resetting primary keys
      .then(function () {
        // Inserts seed entries
        return knex("cards").insert([
          {
            cardName: "Ace",
            suit: "Spades",
            value: 14,
            imgSrc: "Ace of Spades",
            color: "black",
          },
          {
            cardName: "2",
            suit: "Spades",
            value: 2,
            imgSrc: "2 of Spades",
            color: "black",
          },
          {
            cardName: "3",
            suit: "Spades",
            value: 3,
            imgSrc: "3 of Spades",
            color: "black",
          },
          {
            cardName: "4",
            suit: "Spades",
            value: 4,
            imgSrc: "4 of Spades",
            color: "black",
          },
          {
            cardName: "5",
            suit: "Spades",
            value: 5,
            imgSrc: "5 of Spades",
            color: "black",
          },
          {
            cardName: "6",
            suit: "Spades",
            value: 6,
            imgSrc: "6 of Spades",
            color: "black",
          },
          {
            cardName: "7",
            suit: "Spades",
            value: 7,
            imgSrc: "7 of Spades",
            color: "black",
          },
          {
            cardName: "8",
            suit: "Spades",
            value: 8,
            imgSrc: "8 of Spades",
            color: "black",
          },
          {
            cardName: "9",
            suit: "Spades",
            value: 9,
            imgSrc: "9 of Spades",
            color: "black",
          },
          {
            cardName: "10",
            suit: "Spades",
            value: 10,
            imgSrc: "10 of Spades",
            color: "black",
          },
          {
            cardName: "Jack",
            suit: "Spades",
            value: 11,
            imgSrc: "Jack of Spades",
            color: "black",
          },
          {
            cardName: "Queen",
            suit: "Spades",
            value: 12,
            imgSrc: "Queen of Spades",
            color: "black",
          },
          {
            cardName: "King",
            suit: "Spades",
            value: 13,
            imgSrc: "King of Spades",
            color: "black",
          },
          {
            cardName: "Ace",
            suit: "Clubs",
            value: 14,
            imgSrc: "Ace of Clubs",
            color: "black",
          },
          {
            cardName: "2",
            suit: "Clubs",
            value: 2,
            imgSrc: "2 of Clubs",
            color: "black",
          },
          {
            cardName: "3",
            suit: "Clubs",
            value: 3,
            imgSrc: "3 of Clubs",
            color: "black",
          },
          {
            cardName: "4",
            suit: "Clubs",
            value: 4,
            imgSrc: "4 of Clubs",
            color: "black",
          },
          {
            cardName: "5",
            suit: "Clubs",
            value: 5,
            imgSrc: "5 of Clubs",
            color: "black",
          },
          {
            cardName: "6",
            suit: "Clubs",
            value: 6,
            imgSrc: "6 of Clubs",
            color: "black",
          },
          {
            cardName: "7",
            suit: "Clubs",
            value: 7,
            imgSrc: "7 of Clubs",
            color: "black",
          },
          {
            cardName: "8",
            suit: "Clubs",
            value: 8,
            imgSrc: "8 of Clubs",
            color: "black",
          },
          {
            cardName: "9",
            suit: "Clubs",
            value: 9,
            imgSrc: "9 of Clubs",
            color: "black",
          },
          {
            cardName: "10",
            suit: "Clubs",
            value: 10,
            imgSrc: "10 of Clubs",
            color: "black",
          },
          {
            cardName: "Jack",
            suit: "Clubs",
            value: 11,
            imgSrc: "Jack of Clubs",
            color: "black",
          },
          {
            cardName: "Queen",
            suit: "Clubs",
            value: 12,
            imgSrc: "Queen of Clubs",
            color: "black",
          },
          {
            cardName: "King",
            suit: "Clubs",
            value: 13,
            imgSrc: "King of Clubs",
            color: "black",
          },
          {
            cardName: "Ace",
            suit: "Hearts",
            value: 14,
            imgSrc: "Ace of Hearts",
            color: "Red",
          },
          {
            cardName: "2",
            suit: "Hearts",
            value: 2,
            imgSrc: "2 of Hearts",
            color: "Red",
          },
          {
            cardName: "3",
            suit: "Hearts",
            value: 3,
            imgSrc: "3 of Hearts",
            color: "Red",
          },
          {
            cardName: "4",
            suit: "Hearts",
            value: 4,
            imgSrc: "4 of Hearts",
            color: "Red",
          },
          {
            cardName: "5",
            suit: "Hearts",
            value: 5,
            imgSrc: "5 of Hearts",
            color: "Red",
          },
          {
            cardName: "6",
            suit: "Hearts",
            value: 6,
            imgSrc: "6 of Hearts",
            color: "Red",
          },
          {
            cardName: "7",
            suit: "Hearts",
            value: 7,
            imgSrc: "7 of Hearts",
            color: "Red",
          },
          {
            cardName: "8",
            suit: "Hearts",
            value: 8,
            imgSrc: "8 of Hearts",
            color: "Red",
          },
          {
            cardName: "9",
            suit: "Hearts",
            value: 9,
            imgSrc: "9 of Hearts",
            color: "Red",
          },
          {
            cardName: "10",
            suit: "Hearts",
            value: 10,
            imgSrc: "10 of Hearts",
            color: "Red",
          },
          {
            cardName: "Jack",
            suit: "Hearts",
            value: 11,
            imgSrc: "Jack of Hearts",
            color: "Red",
          },
          {
            cardName: "Queen",
            suit: "Hearts",
            value: 12,
            imgSrc: "Queen of Hearts",
            color: "Red",
          },
          {
            cardName: "King",
            suit: "Hearts",
            value: 13,
            imgSrc: "King of Hearts",
            color: "Red",
          },
          {
            cardName: "Ace",
            suit: "Diamonds",
            value: 14,
            imgSrc: "Ace of Diamonds",
            color: "Red",
          },
          {
            cardName: "2",
            suit: "Diamonds",
            value: 2,
            imgSrc: "2 of Diamonds",
            color: "Red",
          },
          {
            cardName: "3",
            suit: "Diamonds",
            value: 3,
            imgSrc: "3 of Diamonds",
            color: "Red",
          },
          {
            cardName: "4",
            suit: "Diamonds",
            value: 4,
            imgSrc: "4 of Diamonds",
            color: "Red",
          },
          {
            cardName: "5",
            suit: "Diamonds",
            value: 5,
            imgSrc: "5 of Diamonds",
            color: "Red",
          },
          {
            cardName: "6",
            suit: "Diamonds",
            value: 6,
            imgSrc: "6 of Diamonds",
            color: "Red",
          },
          {
            cardName: "7",
            suit: "Diamonds",
            value: 7,
            imgSrc: "7 of Diamonds",
            color: "Red",
          },
          {
            cardName: "8",
            suit: "Diamonds",
            value: 8,
            imgSrc: "8 of Diamonds",
            color: "Red",
          },
          {
            cardName: "9",
            suit: "Diamonds",
            value: 9,
            imgSrc: "9 of Diamonds",
            color: "Red",
          },
          {
            cardName: "10",
            suit: "Diamonds",
            value: 10,
            imgSrc: "10 of Diamonds",
            color: "Red",
          },
          {
            cardName: "Jack",
            suit: "Diamonds",
            value: 11,
            imgSrc: "Jack of Diamonds",
            color: "Red",
          },
          {
            cardName: "Queen",
            suit: "Diamonds",
            value: 12,
            imgSrc: "Queen of Diamonds",
            color: "Red",
          },
          {
            cardName: "King",
            suit: "Diamonds",
            value: 13,
            imgSrc: "King of Diamonds",
            color: "Red",
          },
        ]);
      })
  );
};
