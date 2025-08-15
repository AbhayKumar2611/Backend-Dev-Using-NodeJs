// Core Module
const path = require('path')

// External Module
const express = require('express')
// const bodyParser = require('body-parser')

// Local Module
const userRouter = require('./routes/userRouter')
const hostRouter = require('./routes/hostRouter')
const rootDir = require('./utils/pathUtil')

const app = express()

app.use((req, res, next) => {
    console.log(req.url, req.method)
    next()
})

app.use(express.urlencoded({ extended: true }))
app.use(userRouter)
app.use("/host", hostRouter)

app.use((req, res, next) => {
    // res.status(404).send("<h1>404 Your page is not found in airbnb</h1>")
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
})

const PORT = 4000
app.listen(PORT, () => {
    console.log(`Your server is running on http://localhost:${PORT}`)
})