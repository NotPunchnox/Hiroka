const router = require('express').Router(),
registerController = require('../controllers/register'),
loginController = require('../controllers/login')

router.route('/register').post(registerController)
router.route('/login').post(loginController)

module.exports = router