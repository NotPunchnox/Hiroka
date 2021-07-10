const jwt = require('jsonwebtoken'),
    user = require('../../models/user.model')

module.exports = require('../../middleware/auth'), async (req, res) => {

    console.log(req.session.token)

    const token = jwt.verify(req.session.token, process.env.JWT)

    const client = await user.findById(token.id)

    console.log(client)

    return res.status(200).render('home', {
        title: 'home',
        client: client,
        token: token
    })

}