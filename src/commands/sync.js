"use strict";

module.exports = {
  name: "sync",
  async execute(client, message, args) {
    const User = client.database.model("user");
    await User.create({
      id: message.author.id,
      username: message.author.username,
    });
    const UserGuild = client.database.model("user_guild");
    await UserGuild.create({
      userId: message.author.id,
      guildId: message.guild.id,
    })
  },
};
