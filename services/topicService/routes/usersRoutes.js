const router = require('express').Router(),
createTopic = require('../controllers/create')

router.route('/create').post(registerController)

module.exports = router