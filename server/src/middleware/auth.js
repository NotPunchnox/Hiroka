const Response = require('../helpers/response'),
jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {

    const { token } = req.headers

    if(token) return res.status(400).json(Response.badrequest)

    try {
        jwt.verify(a, process.env.JWT)
    } catch {
        return res.status(401).json(Response.unauthorized)
    }

    next()

}