const http = require('http')
const requestHandler = require('./practice')

const server = http.createServer(requestHandler);

const PORT = 5000
server.listen(PORT, () => {
    console.log(`Your server is running on http://localhost:${PORT}`)
})