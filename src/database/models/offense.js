module.exports = (sequelize, DataTypes) => {
  sequelize.define("offense", {
    type: {
      type: DataTypes.ENUM("ban", "kick", "mute", "warn"),
      allowNull: false,
    },
    reason: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
