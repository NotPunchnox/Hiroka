const jwt = require('jsonwebtoken'),
    Response = require('../utils/helpers/response'),
    user = require('../models/user.model'),
    bcrypt = require('bcrypt'),
    flake = require('../utils/functions/uuid').default,
    gen = require('../utils/functions/genString')

module.exports = async (req, res) => {
    if (!req.body) return res.status(400).json(Response.badrequest)
    var {
        username,
        email,
        password
    } = req.body


    if (!username) {
        return res.status(400).json(new Response(400, 'No username field found.'))
    } else if (!email) {
        return res.status(400).json(new Response(400, 'No email field found.'))
    } else if (!password) {
        return res.status(400).json(new Response(400, 'No password field found.'))
    } else if (password.length < 6) {
        return res.status(400).json(new Response(400, 'The password given is too short.'))
    }

    if (await user.findOne({
            email: email
        })) return res.status(403).json(new Response(400, 'email is already used'))

    user_id = flake.gen()


    await user.create({
        _id: user_id,
        tag: gen(5),
        username: username,
        email: email,
        password: await bcrypt.hash(password, await bcrypt.genSalt(12)),
        createdAt: Date.now()
    })

    let token = jwt.sign({
        id: user_id
    }, process.env.JWT)

    return res.status(201).json(new Response(201, { token: token }))


}