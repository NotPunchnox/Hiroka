const jwt = require('jsonwebtoken'),
    Response = require('../utils/helpers/response'),
    user = require('../models/topic.model'),
    bcrypt = require('bcrypt'),
    flake = require('../utils/functions/uuid').default,
    gen = require('../utils/functions/genString')

module.exports = async (req, res) => {
    if (!req.body) return res.status(400).json(Response.badrequest)
    var { } = req.body

}