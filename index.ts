const http = require("http")

http.createServer((request:any, response:any) => {
  response.writeHead(200, {"Content-Type": "text/html"})
  response.write("Hello World!!")
  response.end()
}).listen(8000)