module.exports = (sequelize, DataTypes) => {
    let alias = 'Game';
    let cols = {
        state_id: {
            type: DataTypes.INTEGER,
            allowNull:false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        }
    };

    let config = {
        tableName: 'game',
        timestamps: false,
        underscored: true,
        createdAt: 'created_at',
    };

    const Game = sequelize.define(alias, cols, config);

    Game.associate = function(models){
        Game.belongsTo(models.State, {
            as: 'state',
            foreignKey: 'state_id'
        });
    };

    return Game;
}