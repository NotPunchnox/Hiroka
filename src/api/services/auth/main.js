module.exports = router => {

    router.route('/register').post(require('./register')).get((req, res) => res.render('register', {
        title: 'register'
    }))
    router.route('/login').post(require('./login')).get((req, res) => res.render('login', {
        title: 'login'
    }))

}