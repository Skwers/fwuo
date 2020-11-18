"use strict";

const { MessageEmbed, User } = require("discord.js");

module.exports = {
  name: "warn",
  async execute(client, message, args) {
    const mentionedUser = message.mentions.members.first();
    const reason = args.slice(1).join(" ");

    const Offense = await client.database.model("offense");
    const UserOffense = await client.database.model("user_offense");
    const offense = await Offense.create({
      type: "warn",
      reason: reason,
    });
    await UserOffense.create({
      userId: mentionedUser.id,
      moderatorId: message.author.id,
      offenseId: offense.getDataValue("id"),
    });

    const embed = new MessageEmbed({
      author: {
        name: `[WARN] ${mentionedUser.user.tag}`,
        iconURL: mentionedUser.user.avatarURL(),
      },
      color: 0xf1c40f,
      fields: [
        {
          name: "User",
          value: mentionedUser,
          inline: true,
        },
        {
          name: "Moderator",
          value: message.author,
          inline: true,
        },
        {
          name: "Reason",
          value: reason || "None",
        },
      ],
    });

    await message.channel.send(embed);
  },
};
