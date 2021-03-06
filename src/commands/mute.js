"use strict";

const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "mute",
  async execute(client, message, args) {
    const mentionedUser = message.mentions.members.first();
    const reason = args.slice(1).join(" ");

    // todo

    await mentionedUser.voice.setMute(true, reason);

    const embed = new MessageEmbed({
      author: {
        name: `[MUTE] ${mentionedUser.user.tag}`,
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
