const fs = require('fs') // fs module to write file...

const userRequestHandler = (req, res) => {
    console.log(req.url, req.method)
    res.setHeader('Content-Type', 'text/html')
    if(req.url === "/"){
        res.write(`
            <html>
                <head>
                    <title>Input Form</title>
                </head>
                <body>
                    <form action="/submit-details" method="POST">
                        <h2>Enter your details :-</h2>
                        <label>Full Name : </label>
                        <input type="text" id="name" name="name" placeholder="Enter your name"/>
                        <br />
                        <label>Enter Email : </label>
                        <input type="email" id="email" name="email" placeholder="Enter your email"/>
                        <br />
                        <label>Gender :</label>
                        <label for="male">Male</label>
                        <input type="radio" id="male" name="gender" value="male"/>
                        <label for="female">Female</label>
                        <input type="radio" id="female" name="gender" value="female"/>
                        <br />
                        <input type="submit" value="submit"/>
                    </form>
                </body>
            </html> 
        `)
        return res.end()
    }else if(req.url.toLowerCase() === '/submit-details' && req.method === "POST"){

        // on -> i want to listen...
        // i want to listen whenever new data comes...
        // for that we need a callback...
        const body = []
        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk)
        })

        req.on('end', () => {
            const fullBody = Buffer.concat(body).toString();
            console.log("full body :" ,fullBody)
            const params = new URLSearchParams(fullBody);
            // const bodyObject = {}
            // for(const [key, val] of params.entries()){
            //     bodyObject[key] = val;
            // }
            // we can write the above code in this way also...
            const bodyObject = Object.fromEntries(params)
            console.log(bodyObject)
            fs.writeFileSync("user.txt", JSON.stringify(bodyObject))
        })
        
        res.statusCode = 302
        res.setHeader('Location', '/')
        return res.end()
    }
    res.setHeader('Content-Type','text/html')
    res.write(`
        <html>
            <head>
                <title>Input Form</title>
            </head>
            <body>
                <h1>Please LIKE / SHARE / SUBSCRIBE</h1>
            </body>
        </html>
    `)
    res.end()
}

module.exports = userRequestHandler