"use strict";

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.model("user");
  const Guild = sequelize.model("guild");
  const UserGuild = sequelize.model("user_guild");
  const Offense = sequelize.model("offense");
  const UserOffense = sequelize.model("user_offense");

  User.belongsToMany(Guild, { through: UserGuild });
  User.hasMany(UserGuild);
  Guild.belongsToMany(User, { through: UserGuild });
  Guild.hasMany(UserGuild);
  UserGuild.belongsTo(User);
  UserGuild.belongsTo(Guild);

  User.belongsToMany(Offense, {
    through: UserOffense,
    foreignKey: "userId",
  });
  User.belongsToMany(Offense, {
    through: UserOffense,
    foreignKey: "moderatorId",
  });
  User.hasMany(UserOffense);

  Offense.belongsToMany(User, {
    through: UserOffense,
  });
  Offense.hasMany(UserOffense);

  UserOffense.belongsTo(User, {
    as: "user",
  });
  UserOffense.belongsTo(User, {
    as: "moderator",
  });
  UserOffense.belongsTo(Offense);
};
