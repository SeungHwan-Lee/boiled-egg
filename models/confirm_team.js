module.exports = (sequelize, DataTypes) => {
    const confirm_team = sequelize.define("confirm_team", {
        team_idx: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.BIGINT.UNSIGNED
        },
        user_idx: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.BIGINT.UNSIGNED
        }
    }, {
        tableName: "confirm_team",
        timestamps: false,
        comment: "팀 초대"
    });

    return confirm_team;
};