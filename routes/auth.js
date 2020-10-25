const RT = require('express').Router();
const { ggAuth } = require('../controllers/auth');


RT.post('/gg', ggAuth)

module.exports = RT
