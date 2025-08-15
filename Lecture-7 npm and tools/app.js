const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers)
})

const PORT = 4000
server.listen(PORT, () => {
    console.log(`Your server is running on http://localhost:${PORT}`)
})