module.exports = {
  name: "syncg",
  async execute(client, message, args) {
    const Guild = client.database.model("guild");
    await Guild.create({
      id: message.guild.id,
      name: message.guild.name,
    });
  },
};
