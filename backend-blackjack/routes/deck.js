const express = require("express");
const Deck = require("../dbModels/deck");
const router = express.Router();

// get all cards endpoint
router.get("/", (req, res) => {
  Deck.getAllCards()
    .then((deck) => {
      res.status(200).json(deck);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// shuffle endpoint
router.put("/shuffle", (req, res) => {
  Deck.returnShuffled()
    .then((deck) => {
      res.status(200).json(deck);
    })
    .catch((err) => {
      res.status(500).json({ shuffleEndpointErr: err.message });
    });
});

module.exports = router;
