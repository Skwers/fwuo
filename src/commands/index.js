"use strict";

const Fs = require("fs");

const { Collection } = require("discord.js");

const commands = new Collection();

const commandFiles = Fs.readdirSync(__dirname).filter(
  (file) => !file.startsWith("index") && file.endsWith(".js")
);

commandFiles.forEach((file) => {
  const command = require(`./${file}`);
  commands.set(command.name, command);
});

module.exports = commands;
