const jwt = require('jsonwebtoken'),
    Response = require('../../helpers/response'),
    user = require('../../models/user.model'),
    bcrypt = require('bcrypt'),
    mail = require('nodemailer'),
    flake = require('../../functions/uuid').default,
    gen = require('../../functions/genString')

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
        })) return res.status(403).json(new Response(403, 'email is already used'))

    user_id = flake.gen()
    test = await mail.createTestAccount()

    const p = await bcrypt.hash(password, await bcrypt.genSalt(12))

    let transporter = mail.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: test.user,
            pass: test.pass
        }
    })

    await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>',
        to: email,
        subject: `Hello ✔`,
        text: `Hey ${username}`,
        html: `<b>welcome to Hiroka.</b>`,
    })

    await user.create({
        _id: user_id,
        tag: gen(5),
        username: username,
        email: email,
        password: p,
        createdAt: Date.now()
    })

    let token = jwt.sign({
        id: user_id
    }, p)

    return res.status(200).json({
        token: token
    })


}