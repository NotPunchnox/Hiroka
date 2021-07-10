module.exports = router => {

    router.route('/home').get(require('./@me'))
    router.route('/@me').post(require('./updateProfile'))

}