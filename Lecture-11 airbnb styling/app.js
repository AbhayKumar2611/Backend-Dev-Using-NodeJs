// Core Module
const path = require('path')

// External Module
const express = require('express')

// Local Module
const rootDir = require('./utils/pathUtil')
const homeRouter = require('./routes/homeRouter')
const contactRouter = require('./routes/contactRouter')

const app = express()

app.use(express.urlencoded())

app.use(homeRouter)
app.use(contactRouter)

app.use(express.static(path.join(rootDir, 'public')))

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
})

const PORT = 4200
app.listen(PORT, () => {
    console.log(`Your server is running on http://localhost:${PORT}`)
})