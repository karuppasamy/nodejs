'use strict';

const Nodal = require('nodal');

class CreateTweets extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2016072816104092;
  }

  up() {

    return [
      this.createTable("tweets", [{"name":"user_id","type":"int"},{"name":"body","type":"string"}])
    ];

  }

  down() {

    return [
      this.dropTable("tweets")
    ];

  }

}

module.exports = CreateTweets;
