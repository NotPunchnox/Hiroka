const express = require('express')(),
s = new Date()

require('dotenv').config()

require('./engine')(express)

express.listen(process.env.PORT, e => {
    if(e) throw e
    console.log(`[\x1b[36mServer\x1b[0m]: \x1b[32mstarted successfully at\x1b[0m [\x1b[36mlocalhost:${process.env.PORT}\x1b[0m] \x1b[32min\x1b[0m [\x1b[36m${new Date() - s}ms\x1b[0m]`)
})