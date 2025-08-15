const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers)

    // Set content type for HTML responses
    res.setHeader('Content-Type', 'text/html')

    if(req.url === "/home"){
        res.write('<h1>Welcome to the home section</h1>')
        res.write('<a href="/">Go back to home</a>')
        return res.end()
    }else if(req.url === "/mens"){
        res.write('<h1>Welcome to the mens section</h1>')
        res.write('<a href="/">Go back to home</a>')
        return res.end()
    }else if(req.url === "/womens"){
        res.write('<h1>Welcome to the womens section</h1>')
        res.write('<a href="/">Go back to home</a>')
        return res.end()
    }else if(req.url === "/kids"){
        res.write('<h1>Welcome to the kids section</h1>')
        res.write('<a href="/">Go back to home</a>')
        return res.end()
    }else if(req.url === "/cart"){
        res.write('<h1>Welcome to the cart section</h1>')
        res.write('<a href="/">Go back to home</a>')
        return res.end()
    }else if(req.url === "/"){
        // Handle root path
        res.write(`
            <html>
                <head>
                    <title>Ecommerce App</title>
                </head>
                <body>
                    <h1>Welcome to the home section....</h1>
                    <ul>
                        <li><a href="/home">HOME</a></li>
                        <li><a href="/mens">MENS</a></li>
                        <li><a href="/womens">WOMENS</a></li>
                        <li><a href="/kids">KIDS</a></li>
                        <li><a href="/cart">CART</a></li>
                    </ul>
                </body>
            </html>
        `)
        return res.end()
    }else{
        // Handle 404 - page not found
        res.statusCode = 404
        res.write('<h1>404 - Page Not Found</h1>')
        res.write('<p>The page you are looking for does not exist.</p>')
        res.write('<a href="/">Go back to home</a>')
        return res.end()
    }
})

const PORT = 4000
server.listen(PORT, () => {
    console.log(`Your server is running on http://localhost:${PORT}`)
})

// Handle server errors
server.on('error', (err) => {
    console.error('Server error:', err)
})