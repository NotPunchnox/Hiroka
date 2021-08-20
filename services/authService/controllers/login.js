const jwt = require('jsonwebtoken'),
    Response = require('../utils/helpers/response'),
    user = require('../models/user.model'),
    bcrypt = require('bcrypt')

module.exports = async (req, res) => {
    if (!req.body) return res.status(400).json(Response.badrequest)
    var {
        email,
        password
    } = req.body


    if (!email) {
        return res.status(400).json(new Response(400, 'No email field found.'))
    } else if (!password) {
        return res.status(400).json(new Response(400, 'No password field found.'))
    }

    const client = await user.findOne({
        email: email
    })

    if (!client) return res.status(403).json(new Response(400, 'Invalid email.'))

    if (!await bcrypt.compare(password, client.password)) return res.status(403).json(new Response(400, 'Invalid password.'))

    let token = jwt.sign({
        id: client._id
    }, process.env.JWT)

    return res.status(200).json(new Response(200, { token: token }))


}