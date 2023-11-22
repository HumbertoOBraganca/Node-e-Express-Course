const http = require('http')

// const server = http.createServer((req, res) => {
//    res.end('Welcome')
//})

// Using Event Emitter API
const server = http.createServer()
// emits request event
//subscribe to it / listen for it / respond to it
server.on('request', (res, res) => {
    res.readableEnded('Welcome')
})

server.listen(5000)
// Esse comentário é apenas para consertar um commit