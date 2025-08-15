// // Core Module
// const http = require('http')

// External Module
const express = require('express')

const app = express()                                                                                       

app.use((req, res, next) => {
    console.log("Came in first middleware", req.url, req.method)
    next()
})

app.use((req, res, next) => {
    console.log("Came in second middleware", req.url, req.method)
    res.send("<h1>Welcome to Complete Coding Node JS series..</h1>")
})

// Local Module
const requestHandler = require('./calculator')

// const server = http.createServer(app)

const PORT = 3500
app.listen(PORT, () => {
    console.log(`Your server is running on http://localhost:${PORT}`)
})