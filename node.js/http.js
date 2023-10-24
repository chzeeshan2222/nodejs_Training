const http = require('http');
const path = require('path');
const options = {
    host: '127.0.0.1',
    port: 8000,
    path: '/length_request',
  };
const req = http.request(options);
req.end();

req.on('information', (info) => {
  console.log(`Got information prior to main response: ${info.statusCode}`);
}); 
// Create a local server to receive data from
const server = http.createServer((req, res) => {
    if(req.url=='/about' && req.method==='GET'){
    
        console.log(req.statusMessage);
        res.end('this about page has been created');
    }
    if(req.url=='/'){

        res.end(JSON.stringify({
          data: 'Hello sarkar',
        }));
    }
    
});

server.listen(8000);