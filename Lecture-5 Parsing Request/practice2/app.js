const http = require('http')
const requestHandler = require('./practice')

const server = http.createServer(requestHandler)

const PORT = 3500;
server.listen(PORT, () => {
    console.log(`your server is running on  http://localhost:${PORT}`)
})