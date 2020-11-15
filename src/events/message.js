"use strict";

module.exports = {
  name: "message",
  async execute(client, message) {
    if (!message.content.startsWith("f:") || message.author.bot) return;

    const commandArgs = message.content.trim().slice(2).split(" ");
    const commandName = commandArgs.shift().toLowerCase();

    try {
      const command = await client.commands.get(commandName);
      await command.execute(client, message, commandArgs);
    } catch (error) {
      console.error(error);
    }
  },
};
