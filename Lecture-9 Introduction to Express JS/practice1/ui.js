const fs = require('fs')
const resultRequestHandler = require("./result")

const requestHandler = (req, res) => {
    console.log(req.url, req.method)
    res.setHeader('Content-Type', 'text/html')

    if(req.url === "/"){
        res.write(`
            <html>
                <head>
                    <title>Calculator App</title>
                </head>
                <body>
                    <h1>Welcome to Home Section</h1>
                    <a href="/calculator">Click here to move to the Calculator Section</a>
                </body>
            </html>
        `)
        return res.end()
    }else if(req.url.toLowerCase() === "/calculator"){
        res.write(`
            <html>
                <head>
                    <title>Calculator App</title>
                </head>
                <body>
                    <h1>Welcome to Calculator Section</h1>
                    <a href="/">Click here to move to the Home Section</a>
                    <form action="/calculate-result" method="POST">
                        <input type="number" placeholder="Enter First Number" name="first"/>
                        <input type="number" placeholder="Enter Second Number" name="second"/>
                        <button type="submit" name="operation" value="add">Add</button>
                        <button type="submit" name="operation" value="sub">Sub</button>
                        <button type="submit" name="operation" value="multiply">Multiply</button>
                        <button type="submit" name="operation" value="divide">Divide</button>
                        <button type="submit" name="operation" value="modulo">Modulo</button>
                    </form>
                </body>
            </html>    
        `)
        return res.end()
    }else if(req.url.toLowerCase() === "/calculate-result" && req.method === "POST" ){
        return resultRequestHandler(req, res)
    }

    res.setHeader("Content-Type", "text/html")
    res.write(`
        <html>
            <head>
                <title>Calculator App</title>
            </head>
            <body>
                <h1>404 Page does not exist</h1>
                <a href="/">Click here to move to the Home Section</a>
                <a href="/calculator">Click here to move to the Calculator Section</a>
            </body>
        </html>    
    `)
}

module.exports = requestHandler