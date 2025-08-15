const resultRequestHandler = (req, res) => {
    console.log("In result request handler", req.url)

    let body = ""
    req.on('data', chunk => {
        console.log("chunk :", chunk)
        body += chunk.toString();
        console.log("body :", body, typeof body)
    })

    req.on('end', () => {
        const params = new URLSearchParams(body)
        console.log("params :", params)
        console.log("params.entries()", params.entries())

        const bodyObj = {}
        for(const [key, val] of params.entries()){
            bodyObj[key] = val
        }
        console.log("body object :", bodyObj)

        const first = parseFloat(bodyObj.first)
        const second = parseFloat(bodyObj.second)
        const operation = bodyObj.operation
        let result;

        switch(operation){
            case "add":
                result = first + second
                break

            case "sub":
                result = first - second
                break

            case "multiply":
                result = first * second
                break

            case "divide":
                result = second !== 0 ? first / second : "Can not divided by zero"
                break

            case "modulo":
                result = second !== 0 ? first % second : "Can not divided by zero"
                break

            default: 
                result : "Invalid Operation"
        }

        console.log(result)
        res.setHeader("Content-Type", "text/html")
        res.write(`
            <html>
                <head>
                    <title>Calculator App</title>
                </head>
                <body>
                    <h1>Welcome to result section</h1>
                    <h3>Your result is : ${result}</h1>
                    <a href="/">Click here to move to the Home Section</a>
                    <a href="/calculator">Click here to move to the Calculator Section</a>
                </body>
            </html>    
        `)
    })
}

module.exports = resultRequestHandler