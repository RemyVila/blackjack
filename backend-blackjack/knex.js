const knex = require('knex');

const connectedKnex = knex({
    client: 'sqlite3',
    connection: {
        filename: 'deck.db3'
    }
});

module.exports = connectedKnex;