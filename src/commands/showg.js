"use strict";

module.exports = {
  name: "showg",
  async execute(client, message, args) {
    const Guild = await client.database.model("guild");
    const User = await client.database.model("user");
    await Guild.findOne({
      where: {
        id: message.guild.id,
      },
      include: User,
    }).then((guild) => {
      console.log(guild.toJSON());
    });
  },
};
