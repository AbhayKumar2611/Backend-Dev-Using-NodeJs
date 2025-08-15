// External Module
const express = require('express')

const app = express()

app.use((req, res, next) => {
    console.log("First Dummy Middleware", req.url, req.method)
    next()
})

app.use((req, res, next) => {
    console.log("Second Dummy Middleware", req.url, req.method)
    next()
})

// app.use((req, res, next) => {
//     console.log("Third Dummy Middleware", req.url, req.method)
//     res.send("<h1>Welcome to complete coding</h1>")
// })

app.get("/", (req, res, next) => {
    console.log("Handling / for get", req.url, req.method)
    res.send("<h1>Welcome to Complete Coding Series by Prashant Jain Sir</h1>")
})

app.get("/contact-us", (req, res, next) => {
    console.log("Handling /contact-us for GET", req.url, req.method)
    res.send(`<h1>Please give your details here</h1>
        <form action="/contact-us" method="POST">
            <input type="text" placeholder="Enter your name" name="name"/>
            <input type="email" placeholder="Enter your email" name="email"/>
            <input type="submit" value="submit"/>
        </form>
    `)
})

app.post("/contact-us", (req, res, next) => {
    console.log("Handling /contact-us for POST", req.url, req.method)
    res.send("<h1>We will contact you shortly...</h1>")
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Your server is running on http://localhost:${PORT}`)
})