const http = require('http');

const server = http.createServer((req, res) => {
    const myhtml = `<h1>Hellos World</h1>`

    res.write(myhtml)
    res.end()
})
server.listen(3000, 'localhost', () => {
    console.log("start server")
})