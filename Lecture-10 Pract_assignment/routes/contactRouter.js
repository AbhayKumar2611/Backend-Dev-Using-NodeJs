// Core Module
const path = require('path')

// External Module
const express = require('express')

// Local Module
const rootDir = require('../utils/pathUtil')

const contactRouter = express.Router()

contactRouter.get("/contact-us", (req, res, next) => {
    console.log("In contact us form", req.url, req.method)
    res.sendFile(path.join(rootDir, "views", "contact-us.html"))
})

contactRouter.post("/contact-us", (req, res, next) => {
    console.log(req.body)
    res.sendFile(path.join(rootDir, "views", "contact-success.html"))
})

module.exports = contactRouter