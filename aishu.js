const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Hello, World!</h1><p>This is a small Node.js app.</p>');
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});

console.log('Aishu.js is running. You can access it at http://localhost:3000/');

function addition(a, b) {
    return a + b;
}