const http = require('http')
const fs = require('fs') // fs module for file write...

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers)
    if(req.url === '/'){
        res.setHeader('Content-Type', 'text/html')
        res.write(`
            <html lang="en">
                <head>
                    <title>Input Form</title>
                </head>
                <body>
                    <form action="/submit-details" method="POST">
                        <h2>Enter your details :-</h2>
                        <label>Full Name : </label>
                        <input type="text" id="name" placeholder="Enter your name"/>
                        <br />
                        <label>Enter Email : </label>
                        <input type="email" id="email" placeholder="Enter your email"/>
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
        `);
        return res.end();
    }else if(req.url.toLowerCase() === '/submit-details' && req.method == "POST"){
        fs.writeFileSync('user.txt', 'Abhay Kumar')
        res.statusCode = 302
        res.setHeader('Location', '/')
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
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
})

const PORT = 4000;
server.listen(PORT, () => {
    console.log(`Your server is running on http://localhost:${PORT}`)
})