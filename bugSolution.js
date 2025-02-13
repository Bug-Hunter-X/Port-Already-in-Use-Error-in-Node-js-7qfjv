const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

const port = 8080;
const maxRetries = 5;
let retries = 0;

function startServer() {
  server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

function handleError(err) {
  if (err.code === 'EADDRINUSE' && retries < maxRetries) {
    console.log(`Port ${port} is in use, retrying in 1 second... (Attempt ${retries + 1}/${maxRetries})`);
    retries++;
    setTimeout(startServer, 1000);
  } else {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
}

startServer().on('error', handleError);
