const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers)
    
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>My Very First Node Server</title></head>')
    res.write('<body><h1>Hello World...</h1>')
    res.write('<h2>Please Support My Work...</h2></body>')
    res.write('</html>')
    res.end()
})

const PORT = 4000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})