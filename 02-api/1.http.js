const http = require('node:http') // protocolo HTTP
const fs = require('node:fs')

const desiredPort = process.env.PORT ?? 3000

function processRequest (req, res) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')

  if (req.url === '/') {
    res.statusCode = 200 // OK
    res.end('Welcome to my web application: Bienvenido a mi aplicación web')
  } else if (req.url === '/contact') {
    res.statusCode = 200
    res.end('<h1>Contacts</h1>')
  } else if (req.url === '/img.png') {
    fs.readFile('./random-img.png', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('<h1>500: Internal Server Error:</h1>')
      } else {
        res.setHeader('Content-Type', 'image/png')
        res.end(data)
      }
    })
  } else {
    res.statusCode = 404
    res.end('<h1>404: Url not founded</h1>')
  }
}

// Para no tener problemas con el utf-8 es mejor escribir el siguiente comando al desplegar nuestro server:
// node --watch 1.http.js

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`Server listening on port http://localhost:${desiredPort}`)
})
