const db = require('../database/models');
const nanoid = require('nanoid');

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
                }]
            })
            .then(game => {
                res.json({
                    message: 'Game updated',
                });
            })
            .catch(err => {
                res.json(err);
            })
    }
}
