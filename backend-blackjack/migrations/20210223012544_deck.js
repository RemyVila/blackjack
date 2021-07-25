exports.up = function (knex) {
  return knex.schema.createTable("cards", (tbl) => {
    tbl.increments();

    tbl.string("cardName", 30).notNullable();
    tbl.string("suit", 10).notNullable();
    tbl.string("value", 20).notNullable();
    tbl.string("imgSrc", 400).notNullable();
    tbl.string("color", 10).notNullable();
  });
};

exports.down = function (knex) {};
