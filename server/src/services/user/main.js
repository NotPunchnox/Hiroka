module.exports = router => {

    router.route('/@me').post(require('./updateProfile'))

}