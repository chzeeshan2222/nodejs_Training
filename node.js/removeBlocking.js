const http = require("http");

const server = http.createServer(async (req, res) => {
  if (req.url === "/") {
    res.end("Hello, world!");
  } else if (req.url === "/about") {
    runAsyncForLoop();
    // .catch((err) => {
    //   console.error("Error ", err);
    // });
    res.end("Hello About Page");
  } else {
    res.end("Page Not Found");
  }
});

server.listen(8000, () => {
  console.log("Server is running on port 8000");
});

function runAsyncForLoop() {
  return new Promise((resolve) => {
    setTimeout(() => {
      for (let i = 0; i < 200; i++) {
        for (let j = 0; j < 200; j++) {
          console.log(`${i} ${j}`);
        }
      }
      resolve();
    }, 0);
  });
}
