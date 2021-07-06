module.exports = router => {

    router.route('/register').post(require('./register'))
    router.route('/login').post(require('./login'))

}