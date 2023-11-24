const http = require('node:http')
const dittoJSON = require('./pokemon/ditto.json')

const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
  const { method, url } = req

  res.setHeader('Content-Type', 'text/html; charset=utf-8')

  switch (method) {
    case 'GET':
      switch (url) {
        case '/': {
          return res.end('<h1>My page</h1>')
        }
        case '/about': {
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          return res.end('<p>Soy el mejor en lo que hago, solo necesito un poco más de disciplina</p>')
        }
        case '/pokemon/ditto': {
          return res.end(JSON.stringify(dittoJSON))
        }
        default: {
          res.statusCode = 404
          return res.end('<h1>404: Not Founded</h1>')
        }
      }

    case 'POST':
      switch (url) {
        case '/pokemon': {
          let body = ''

          req.on('data', chunk => {
            body += chunk.toString()
          })

          req.on('end', () => {
            const data = JSON.parse(body)
            // Podemos hacer varias cosas como llamar a una base de datos para guardar la info
            res.writeHead(201, { 'Content-Type': 'application/json; charset=utf-8' })

            data.timestamp = Date.now()
            res.end(JSON.stringify(data))
          })

          break
        }
        default: {
          res.statusCode = 404
          return res.end('<h1>404: Not Founded</h1>')
        }
      }
  }
})

server.listen(desiredPort, () => {
  console.log(`Listening on port: http://localhost:${desiredPort}`)
})
