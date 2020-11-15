"use strict";

const { ShardingManager } = require("discord.js");
require("dotenv").config({ path: `${__dirname}/.env` });

(async () => {
  const manager = new ShardingManager(`${__dirname}/bot.js`, {
    token: process.env.TOKEN,
  });

  manager.on("shardCreate", (shard) =>
    console.log(`Launched shard ${shard.id}`)
  );

  await manager.spawn().catch(() => {});
})();
