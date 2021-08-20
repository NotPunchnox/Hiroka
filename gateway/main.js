const gateway = require('fast-gateway')
const server = gateway({
  routes: [{
    prefix: '/auth',
    target: 'http://127.0.0.1:1234'
  }]
})

server.start(8080)