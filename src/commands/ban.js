"use strict";

const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ban",
  async execute(client, message, args) {
    const mentionedUser = message.mentions.members.first();
    const reason = args.slice(1).join(" ");

    // todo

    await mentionedUser
      .ban({
        days: 7,
        reason: reason,
      })
      .then(async (member) => {
        await message.channel.send(
          new MessageEmbed({
            author: {
              name: `[BAN] ${member.user.tag}`,
              iconURL: member.user.avatarURL(),
            },
            color: 0xe74c3c,
            fields: [
              {
                name: "User",
                value: member,
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
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
