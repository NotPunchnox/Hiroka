module.exports = (l) => {

    string = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz"
    result = ""
    for(let i = 0; i < l; i++) {
        let a = Math.floor(Math.random() * string.length)
        result += string.substring(a, a + 1)
    }
    return result
}