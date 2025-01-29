const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might fail
  someAsyncOperation().then(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Success!');
  }).catch(err => {
    // Error handling that doesn't properly close the response
    console.error('Error:', err);
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function someAsyncOperation() {
  // Simulate a possible failure
  const success = Math.random() < 0.5;
  if (!success) {
    throw new Error('Asynchronous operation failed');
  }
  await new Promise(resolve => setTimeout(resolve, 1000));
}