// Core Module
const http = require('http')

// External Module
const express = require('express')

// Local Module
const requestHandler = require('./ui')

const app = express()

const server = http.createServer(requestHandler)

const PORT = 3600
server.listen(PORT, () => {
    console.log(`Your Server is running on http://localhost:${PORT}`)
})