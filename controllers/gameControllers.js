const db = require('../database/models');


module.exports = {
    createGame: async (req, res) => {
        await db.Game.create({
            state_id: 1,
            createdAt: new Date(),
        })
            .then(game => {
                return db.Game.findByPk(game.dataValues.id, {
                    include: [{
                        model: db.State,
                        as: 'state',
                    }],
                    attributes: { exclude: ['state_id'] }
                })
            })
            .then(game => {
                res.json({ game: game, cells: [] });
            })
            .catch(err => {
                res.json(err);
            })
    },
    getGame: async (req, res) => {
        await db.Game.findOne({
            where: {
                id: req.params.id
            },
            include: [{
                model: db.State,
                as: 'state',
            }],
            attributes: { exclude: ['state_id'] }
            })
            .then(game => {
                res.json({ game: game, cells: [] });
            })
            .catch(error => {
                res.json({
                    message:'Game not found'
                 });
            })
    },
    updateGame: async (req, res) => {
        await db.Game.update({
            state_id: req.body.state_id
        }
            , {
                where: {
                    id: req.body.id
                },
                include: [{
                    model: db.State,
                    as: 'state',
                }]
            })
            .then(game => {
                if(game[0] == 1){
                res.json({
                    message: 'Game updated',
                })
            }else{
                 res.json({
                    message: 'Game not updated',
                });
                }
            })
            .catch(err => {
                res.json({err});
            })
    },
}
