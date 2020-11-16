"use strict";

module.exports = {
  name: "ready",
  async execute(client) {
    await client.database.sync();
    console.log("The bot is ready");
  },
};
