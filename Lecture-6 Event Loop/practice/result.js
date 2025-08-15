const sumRequestHandler = (req, res) => {
    console.log("In sum request handler...", req.url)

    let body = '';
    req.on('data', chunk => {
        console.log(chunk)
        body += chunk.toString();
    })
    console.log(body)

    req.on('end', () => {
        // const bodyStr = Buffer.concat(body).toString(); We convert each chunk to string immediately: chunk.toString()
        const params = new URLSearchParams(body);
        const bodyObj = {}
        for (const [key, val] of params.entries()){
            bodyObj[key] = val;
        }
        console.log("body Object :", bodyObj)

        const first = parseFloat(bodyObj.first); // we can also use Number(bodyObj.first)
        const second = parseFloat(bodyObj.second);
        const operation = bodyObj.operation;
        let result;


        switch(operation){
            case 'add':
                result = first + second;
                break;

            case 'sub':
                result = first - second;
                break;

            case 'multiply':
                result = first * second;
                break;

            case 'divide':
                result = second !== 0 ? first / second : "cannot divided by zero";
                break;

            case 'modulo':
                result = second !== 0 ? first % second : "cannot modulo by zero";
                break;

            default:
                result = "Invalid operation"
        }
        console.log(result)
        res.setHeader('Content-Type','text/html')
        res.write(`
            <html>
                <head>
                    <title>Calculator App</title>
                </head>
                <body>
                    <h1>Your result is : ${result}</h1>
                    <a href="/calculator">Move to calculator Section</a>
                </body>
            </html>    
        `)
    })
}

module.exports = sumRequestHandler