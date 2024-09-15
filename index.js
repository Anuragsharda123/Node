require('dotenv').config();

const http = require('http');

const PORT = process.env.PORT || 8080;
const NODE_ENV = process.env.NODE_ENV || 'production';

const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('content_type', 'text/plain');

        res.end(`Server running in the ${NODE_ENV} mode on PORT: ${PORT}`);
});

server.listen(PORT, () => {
    console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`);
});