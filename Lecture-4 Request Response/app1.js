const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers)

    if(req.url === '/'){
        res.setHeader("Content-Type", "text/html")
        res.write('<html>')
        res.write('<head><title>Welcome to Coding</title></head>')
        res.write('<body><h1>Welcome to home</h1></body>')
        res.write('</html>')
        return res.end()
    }else if(req.url === '/products'){
        res.setHeader("Content-Type", "text/html")
        res.write('<html>')
        res.write('<head><title>Welcome to Coding</title></head>')
        res.write('<body><h1>Checkout our products</h1></body>')
        res.write('</html>')
        return res.end()
    }
    res.setHeader("Content-Type", "text/html")
        res.write('<html>')
        res.write('<head><title>Welcome to Coding</title></head>')
        res.write('<body><h1>Like / Share / Subscribe</h1></body>')
        res.write('</html>')
        res.end()
})

const PORT = 4000;
server.listen(PORT, () => {
    console.log(`Your server is running on http://localhost:${PORT}`)
})