// Core Module
const path = require('path')

// External Module
const express = require('express')
const hostRouter = express.Router()

// Local Module
const rootDir = require('../utils/pathUtil')

hostRouter.get("/add-home", (req, res, next) => {
    // res.send(
    //     `<h1>Register your home here:</h1>
    //     <form action="/host/add-home" method="POST">
    //         <input type="text" placeholder="Enter your house name" name="houseName"/>
    //         <input type="submit" value="Add Home"/>
    //     </form>
    // `)

    res.sendFile(path.join(rootDir, 'views', 'addHome.html'))
})

hostRouter.post("/add-home", (req, res, next) => {
    console.log(req.body)
    // res.send(
    //     `<h1>Your Home is registered successfully</h1>
    //     <a href="/">Go to Home</a>
    // `)

    res.sendFile(path.join(rootDir, 'views', 'homeAdded.html'))
})

module.exports = hostRouter