"use strict";

const Fs = require("fs");
const Path = require("path");

const { Sequelize, DataTypes } = require("sequelize");

const database = new Sequelize(
  process.env.DB,
  {
    dialect: "postgres",
    logging: false,
  }
);

const modelFiles = Fs.readdirSync(
  Path.join(__dirname, "models")
).filter((file) => file.endsWith(".js"));

modelFiles.forEach((file) => {
  require(`./models/${file}`)(database, DataTypes);
});

require("./associations")(database, DataTypes);

module.exports = database;
