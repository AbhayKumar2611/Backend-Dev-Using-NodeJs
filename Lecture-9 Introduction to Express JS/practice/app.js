const http = require('http')
const requestHandler = require('./ui')

const server = http.createServer(requestHandler)

const PORT = 3600
server.listen(PORT, () => {
    console.log(`Your Server is running on http://localhost:${PORT}`)
})