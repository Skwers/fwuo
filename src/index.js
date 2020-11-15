"use strict";

const path = require("path");

const { ShardingManager } = require("discord.js");
require("dotenv").config({ path: path.join(__dirname, ".env") });

(async () => {
  const manager = new ShardingManager(path.join(__dirname, "bot.js"), {
    token: process.env.TOKEN,
  });

  manager.on("shardCreate", (shard) =>
    console.log(`Launched shard ${shard.id}`)
  );

  await manager.spawn().catch(() => {});
})();
