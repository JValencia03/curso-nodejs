const http = require('node:http') // protocolo HTTP

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hello World')
})

server.listen(3000, () => {
  console.log(`Server listening on port http://localhost:${server.address().port}`)
})
