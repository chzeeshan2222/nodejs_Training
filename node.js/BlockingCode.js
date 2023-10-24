const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello, world!");
  }
  if (req.url === "/about") {
    // code blocking
    for (let i = 0; i < 100; i++) {
       for (let j = 0; j < 100; j++) {
        console.log(`${i} ${j}`);
        
       }
        
    }
    res.end("hello About Page");
  }
else
  res.end("Page Not Found");
});

server.listen(8000, () => {
  console.log("server is running on port 8000");
});
