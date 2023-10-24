
const http=require('http');
const server=http.createServer((req, res) => {
    console.log("request event loop");
    res.end("Hello, world!");
})

//Event Loop examples
setInterval(()=>{
console.log("call every 2 seconds");
},2000)
console.log("hello world");
//in this example hello world call only one time but setTimeInterval
// call every 2 seconds
// other example is 
console.log("First");
setTimeout(()=>{
    console.log("second");
},0);
console.log("third");



server.listen(8000,()=>{
    console.log("server is running on port 8000");
})
