module.exports = {
  name: "kick",
  execute(client, message, args) {
    let mentionedUser = message.mentions.members.first();
    let reason = args.slice(1).join(" ");
  },
};
