const resultRequestHandler = (req, res) => {
    console.log("In result request handler", req.url)

    let body = ""
    req.on("data" , chunk => {
        console.log("chunks :-" ,chunk)
        body += chunk.toString()
        console.log("body inside req.on :-", body, typeof body)
    })
    console.log("body outside req.on :-" , body, typeof body)

    req.on("end", () => {
        const params = new URLSearchParams(body)
        console.log("params :-", params)
        console.log("params.entries :-", params.entries())
        // entries() method
        
        const bodyObj = {}
        for(const [key, val] of params.entries()){
            bodyObj[key] = val
        }
        console.log("body Object :-", bodyObj)

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
                result = second === 0 ? "Can not divided by 0" : first / second
                break

            case "modulo":
                result = second === 0 ? "Can not divided by 0" : first % second
                break

            default:
                result = "Invalid Operation"
        }

        console.log(result)
        res.setHeader('Content-Type', 'text/html')
        res.write(`
            <html>
                <head>
                    <title>Calculator App</title>
                </head>
                <body>
                    <h1>Your Result is ${result}</h1>
                    <a href="/calculator">Move to calculator section</a>
                    <a href="/">Move to home section</a>
                </body>
            </html>    
        `)
    })
}

module.exports = resultRequestHandler