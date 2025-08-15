const resultRequestHandler = (req, res) => {
    console.log("In request handler", req.url)

    let body = ""
    req.on('data', chunk => {
        console.log("chunk :",chunk)
        body += chunk.toString()
        console.log("body :", body, typeof body)
    })
    console.log(body)

    req.on('end', () => {
        const params = new URLSearchParams(body)
        console.log("params :", params)
        console.log("params.entries() :", params.entries())

        const bodyObj = {}
        for(const [key, val] of params.entries()){
            bodyObj[key] = val
        }
        console.log("body object :", bodyObj)

        const first = parseFloat(bodyObj.first)
        const second = parseFloat(bodyObj.second)
        const operation = bodyObj.operation
        let result

        switch(operation){
            case 'add':
                result = first + second
                break

            case 'sub':
                result = first - second
                break

            case 'multiply':
                result = first * second
                break

            case 'divide':
                result = second !== 0 ? first / second : "Can not divided by zero"
                break

            case 'modulo':
                result = second !== 0 ? first % second : "Can not divided by zero"
                break

            default:
                result = "Invalid Operation"
        }

        console.log("result :", result)
        res.write(`
            <html>
                <head>
                    <title>Calculator Application</title>
                </head>
                <body>
                    <h1>Welcome to Result Section</h1>
                    <h3>Your result is : ${result}</h3>
                    <a href="/">Click here to move to the home section</a>
                    <a href="/calculator">Click here to move to the calculator section</a>
                </body>
            </html>
        `)
    })
}

module.exports = resultRequestHandler