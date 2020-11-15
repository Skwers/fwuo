"use strict";

const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ban",
  async execute(client, message, args) {
    const mentionedUser = message.mentions.members.first();
    const reason = args.slice(1).join(" ");

    // todo

    const embed = new MessageEmbed({
      author: {
        name: `[BAN] ${mentionedUser.user.tag}`,
        iconURL: mentionedUser.user.avatarURL(),
      },
      color: 0xe74c3c,
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
