const http = require('http')

const server = http.createServer((req,res) => {
    if (req.url === '/') {
        res.end('Welcome to our hello world')
    }
    else if (req.url === '/about') {
        res.end('My dream')
    }
    else {
    res.end(`
    <h1>Oops!</h1>
    <a href="/"> Back home </a>
    `)
    }

})

server.listen(5000)