module.exports = (sequelize, DataTypes) => {
    let alias = 'State';
    let cols = {
        code: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        }
    };

    let config = {
        tableName: 'state',
        timestamps: false
    };

    const State = sequelize.define(alias, cols, config);

    State.associate = function(models){
        State.hasMany(models.Game, {
            as: 'game',
            foreignKey: 'state_id'
        });
    };

    return State;
}