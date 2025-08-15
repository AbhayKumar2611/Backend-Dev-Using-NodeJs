const fs = require('fs')
const sumRequestHandler = require('./result')

const requestHandler = (req, res) => {
    console.log(req.url, req.method)
    res.setHeader('Content-Type','text/html')

    if(req.url === '/'){
        res.write(`
            <html>
                <head>
                    <title>Calculator App</title>
                </head>
                <body>
                    <h1>Welcome to mini Calculator Application...</h1>
                    <a href="/calculator">Move to calculator section...</a>
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
                    <h1>This is mini calculator</h1>
                    <a href="/">Move to Home Section</a>
                    <form action="/calculate-result" method="POST">
                        <input type="number" placeholder="Enter First Number" name="first" />
                        <input type="number" placeholder="Enter Second Number" name="second" />
                        <button type="submit" name="operation" value="add">Addition</button>
                        <button type="submit" name="operation" value="sub">Subtraction</button>
                        <button type="submit" name="operation" value="multiply">Multiplication</button>
                        <button type="submit" name="operation" value="divide">Division</button>
                        <button type="submit" name="operation" value="modulo">Modulo</button>
                    </form>
                </body>
            </html>
        `)
        return res.end()
    }else if(req.url.toLowerCase() === "/calculate-result" && req.method === "POST"){
        return sumRequestHandler(req, res)
    }
    res.write(`
        <html>
            <head>
                <title>Calculator App</title>
            </head>
            <body>
                <h1>404 Page does not exist</h1>
                <a href="/">Move to Home Section</a>
            </body>
        </html>    
    `)

}

module.exports = requestHandler