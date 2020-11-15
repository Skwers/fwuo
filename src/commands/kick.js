"use strict";

module.exports = {
  name: "kick",
  execute(client, message, args) {
    const mentionedUser = message.mentions.members.first();
    const reason = args.slice(1).join(" ");
  },
};
