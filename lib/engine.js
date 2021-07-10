const mongoose = require('mongoose'),
    bp = require('body-parser')
try {
    require('hjs')
} catch (e) {
    console.error(e)
}

module.exports = app => {
    app.use(require('cors')())

    app.use(bp.urlencoded({
        extended: false
    }))
    app.use(bp.json())

    mongoose.connect(process.env.MONGO, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    mongoose.connection.on('connected', e => {
        if (e) throw e
        console.info('connected to data base!')
    })
    app.set('views', 'src/views')
    app.set('view engine', 'hjs')
    app.engine('hjs', require('hogan-express'))
    app.use(require('express').static('src/public'))
    app.use(require('express-session')({ secret: process.env.SESSION_SECRET }))

    app.use(require('../src/api/services/main'))
    require('../src/api/services/main').stack.forEach(a=> {
        console.log(a.route.path + ' ' + a.route.methods)
    })

}