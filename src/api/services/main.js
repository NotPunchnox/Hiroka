const router = require('express').Router(),
Response = require('../helpers/response')

router.route('/').get((req, res)=> res.status(200).json(Response.ok))

require('./auth/main')(router)
require('./user/main')(router)

module.exports = router