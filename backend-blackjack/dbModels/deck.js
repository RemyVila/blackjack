const { update } = require("../knex");
const knex = require("../knex");

function createCard(card) {
  return knex("cards").insert(card);
}

function getAllCards() {
  return knex("cards").select("*");
}

const { shuffle } = require("../usefulFunctions/shuffle");
async function returnShuffled() {
  let tempDeck = await getAllCards();
  if (tempDeck != null) {
    tempDeck = shuffle(tempDeck);

    // to not manually insert id
    // tempDeck.forEach((obj) => {
    //   delete obj.id;
    // });

    function incrementIDs() {
      let id = 1;
      tempDeck.forEach((obj) => {
        obj.id = id;
        id++;
      });
    }
    incrementIDs();

    const fieldsToInsert = tempDeck.map((field) => field);
    // await knex("cards").del();
    try {
      // await knex("cards")
      //   .where("id", fieldsToInsert.id)
      //   .update({ fieldsToInsert });
      // return knex("cards").select("*");
      knex.transaction((trx) => {
        const queries = [];
        fieldsToInsert.forEach((card) => {
          const query = knex("cards")
            .where("id", card.id)
            .update({
              cardName: card.cardName,
              suit: card.suit,
              value: card.value,
              imgSrc: card.imgSrc,
              color: card.color,
            })
            .transacting(trx); // This makes every update be in the same transaction
          queries.push(query);
        });

        Promise.all(queries) // Once every query is written
          .then(trx.commit) // We try to execute all of them
          .catch(trx.rollback); // And rollback in case any of them goes wrong
      });
      return knex("cards").select("*");
    } catch (err) {
      return { message: "MODEL ERROR: " + err.message };
    }
  } else {
    return { message: "Error returning deck" };
  }
}

module.exports = {
  getAllCards,
  createCard,
  returnShuffled,
};
