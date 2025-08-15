const http = require('http')
const requestHandler = require('./user1')

const server = http.createServer(requestHandler)

const PORT = 4000
server.listen(PORT, () => {
    console.log(`Your server is running on http://localhost:${PORT}`)
})