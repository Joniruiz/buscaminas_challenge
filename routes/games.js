const express = require('express');
const router = express.Router();
const {createGame,getGame,updateGame} = require('../controllers/gameControllers');

/* Get Game for id */
router.get('/',createGame)
router.get('/:id', getGame);
router.post('/',updateGame);

module.exports = router;