"use strict";

const { Client } = require("discord.js");

(async () => {
  const client = new Client();
  client.commands = require("./commands");
  client.events = require("./events");
  client.database = require("./database");

  client.removeAllListeners();

  await client.events.each((event) => {
    client.on(event.name, event.execute.bind(null, client));
  });

  await client.login(process.env.TOKEN);
})();
