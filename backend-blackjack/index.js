const express = require("express");
const server = express();
const PORT = process.env.PORT || 8000;
// const sqlite3 = require('sqlite3').verbose();
server.use(express.json());

const deckRouter = require("./routes/deck");
// const db = knex(config.development);

server.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});

server.use("/deck", deckRouter);

server.get("/", (req, res) => {
  res.status(200).json("Get @ baseurl/");
});
