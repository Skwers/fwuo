module.exports = {
  name: "message",
  execute(client, message) {
    if (!message.content.startsWith("f:") || message.author.bot) return;

    const commandArgs = message.content.trim().slice(2).split(" ");
    const commandName = commandArgs.shift().toLowerCase();

    try {
      const command = client.commands.get(commandName);
      command.execute(client, message, commandArgs);
    } catch {
      console.log("The command is invalid");
    }
  },
};
