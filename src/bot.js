"use strict";

const path = require("path");

const { Client } = require("discord.js");
require("dotenv").config({ path: path.join(__dirname, ".env") });

(async () => {
  const client = new Client();
  client.commands = require("./commands");
  client.events = require("./events");

  client.removeAllListeners();

  await client.events.each((event) => {
    client.on(event.name, event.execute.bind(null, client));
  });

  await client.login(process.env.TOKEN);
})();
