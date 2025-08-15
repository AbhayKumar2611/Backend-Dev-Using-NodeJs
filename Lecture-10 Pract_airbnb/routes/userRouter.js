// Core Module
const path = require('path')

// External Module
const express = require('express')
const userRouter = express.Router()

// Local Module
const rootDir = require('../utils/pathUtil')

// userRouter.get("/", (req, res, next) => {
//     res.send(
//         `<h1>Welcome to airbnb</h1>
//         <a href="/host/add-home">Add Home</a>
//     `)
// })

userRouter.get("/", (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'home.html'))
})

module.exports = userRouter;