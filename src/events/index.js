"use strict"

const Fs = require("fs");

const { Collection } = require("discord.js");

const events = new Collection();

const eventFiles = Fs.readdirSync(__dirname).filter(
  (file) => !file.startsWith("index") && file.endsWith(".js")
);

eventFiles.forEach((file) => {
  const event = require(`./${file}`);
  events.set(event.name, event);
});

module.exports = events;
