const jwt = require('jsonwebtoken'),
    Response = require('../../helpers/Response'),
    user = require('../../models/user.model'),
    bcrypt = require('bcrypt')

module.exports = require('../../middleware/auth'), async (req, res) => {

    const token = jwt.verify(a, process.env.JWT)

    if (!req.body) return res.status(400).json(Response.badrequest)
    var {
        email,
        password,
        status,
        bio,
        username
    } = req.body

    const client = await user.findById(token.id)

    if (!client) return res.status(401).json(Response.unauthorized)

    if(email && !password) return res.status(400).json(Response.badrequest)
    if(email && password) {

        if(!await bcrypt.compare(password, client.password)) return res.status(403).json(new Response(400, 'Invalid password.'))

        client.email = email

    }
    if(typeof status !== 'number') res.status(400).json(new Response(400, 'The value is not int.'))
    if(status <= 1 && status >= 0) client.status = status

    if(bio) client.bio = bio
    if(username && !password) return res.status(400).json(Response.badrequest)
    if(username && password) {

        if(!await bcrypt.compare(password, client.password)) return res.status(403).json(new Response(400, 'Invalid password.'))

        client.username = username

    }

    client.save()

    console.log(client)

    return res.status(204).json(Response.nocontent)


}