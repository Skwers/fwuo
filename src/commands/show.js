"use strict";

module.exports = {
  name: "show",
  async execute(client, message, args) {
    const User = await client.database.model("user");
    const Guild = await client.database.model("guild");
    const UserGuild = await client.database.model("user_guild");
    const Offense = await client.database.model("offense");
    const UserOffense = await client.database.model("user_offense");
    await User.findOne({
      where: {
        id: message.author.id,
      },
      include: {
        model: UserOffense,
        include: [
          {
            model: User,
            as: "user",
          },
          {
            model: User,
            as: "moderator",
          },
          {
            model: Offense,
          },
        ],
      },
    });
  },
};
