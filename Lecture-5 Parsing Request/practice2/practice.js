const fs = require('fs')
const resultRequestHandler = require('./result')

const requestHandler = (req, res) => {
    console.log(req.url, req.method, req.header)
    res.setHeader('Content-Type', 'text/html')

    if(req.url === "/"){
        res.write(`
            <html>
                <head>
                    <title>Calculator Application</title>
                </head>
                <body>
                    <h1>Welcome to mini calculator application</h1>
                    <a href="/calculator">Move to calculator section</a>
                </body>
            </html>    
        `)
        return res.end()
    } else if(req.url.toLowerCase() === "/calculator"){
        res.write(`
            <html>
                <head>
                    <title>Calculator Application</title>
                </head>
                <body>
                    <h1>This is Mini Calculator</h1>
                    <a href="/">Click here to go home section</a>
                    <form action="/calculate-result" method="POST">
                        <input type="number" placeholder="Enter First Number" name="first"/>
                        <input type="number" placeholder="Enter Second Number" name="second"/>
                        <button type="submit" name="operation" value="add">Add</button>
                        <button type="submit" name="operation" value="sub">Subtract</button>
                        <button type="submit" name="operation" value="multiply">Mulitply</button>
                        <button type="submit" name="operation" value="divide">Divide</button>
                        <button type="submit" name="operation" value="modulo">Modulo</button>
                    </form>
                </body>
            </html>
        `)
        return res.end()
    }else if(req.url === "/calculate-result" && req.method === "POST"){
        return resultRequestHandler(req, res)
    }

    res.write(`
        <html>
            <head>
                <title>Calculator Application</title>
            </head>
            <body>
                <h1>404 Page does not exist</h1>
                <a href="/">Click Here to go Home Section</a>
            </body>
        </html>   
    `)
}

module.exports = requestHandler