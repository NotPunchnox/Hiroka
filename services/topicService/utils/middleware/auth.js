const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {

    const token = req.session.token || req.headers
    
    if (!token) return res.redirect('/login'), console.log('no token')

    try {
        jwt.verify(token, process.env.JWT)
    } catch(e) {
        return res.redirect('/login'), console.log(e)
    }

    next()

}