module.exports = (sequelize, DataTypes) => {
  const oauth_id = sequelize.define("oauth_id", {
    oauth_idx: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
    },
    // user_idx: {
    //   type: DataTypes.BIGINT.UNSIGNED,
    //   allowNull: false,
    //   references: {
    //     model: "user",
    //     key: "user_idx"
    //   },
    // },
    user_idx: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
    },
    accessId: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    accessToken: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    providerType: {
      type: DataTypes.STRING,
      allowNull: true
    },
    regDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    tableName: "oauth_id",
    timestamps: false,
    underscored: true,
    comment: "Oauth 인증 테이블"
  });
  return oauth_id;
};