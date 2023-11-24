const ditto = require('./pokemon/ditto.json')
const express = require('express')

const PORT = process.env.PORT ?? 1234

const app = express()
app.disable('x-powered-by')

app.use(express.json())
// La sección MIDDLEWARE que está debajo, explica como funciona el middleware de express

// MIDDLEWARE

// app.use((req, res, next) => {
//   console.log('Mi primer middleware')
//   // Ejemplos de cosas que podemos hacer con el middleware:
//   // 1. Trackear las request (req) a las bases de datos.
//   // 2. Revisar si el usuario tiene cookies.
//   next()
// })

// app.use((req, res, next) => {
//   if (req.method !== 'POST') return next()
//   if (req.headers['content-type'] !== 'application/json') return next()
//   // Solo usarán la lógica del app.use las request que sean con el método POST y que tienen el header Content-Type: application/json

//   let body = ''

//   req.on('data', chunk => {
//     body += chunk.toString()
//   })

//   req.on('end', () => {
//     const data = JSON.parse(body)
//     // Podemos hacer varias cosas como llamar a una base de datos para guardar la info
//     data.timestamp = Date.now()
//     // Ahora mutamos la request y metemos la info en el req.body
//     req.body = data
//     next()
//   })
// })
// En el middleware de arriba (app.use) ☝🏻☝🏻☝🏻☝🏻 lo que hicimos fue extraer lógica que luego podremos reutilizar
// FIN DEL EJEMPLO DE MIDDLEWARE POR DEBAJO 🚫🚫🚫🚫

app.get('/', (req, res) => {
  // express detecta automáticamente el Content-Types y el statusCode es por defecto 200 (igual que en node)
  // La diferencia es que en express el código quedaría así:
  // res.status(200).send('<h1>Mi página</h1>')
  res.send('<h1>Mi página</h1>')
  // En el caso de que fuese un json, el codigo sería así:
  // res.json({"message": "Esto es un ejemplo"})
  // automáticamente se hace el toString, stringify y/o el parse. Express lo hace por debajo
})

app.get('/pokemon/ditto', (req, res) => {
  res.json(ditto)
})

app.post('/pokemon', (req, res) => {
  // Aquí es donde deberíamos guardar en bases de datos
  // res.end(JSON.stringify(data)) De esta forma es si no estuviesemos usando express
  res.status(201).json(req.body) // Con express, ya que hace automáticamente el stringify (como expliqué anteriormente)
})

// Como tratar un 404 en express
app.use((req, res) => {
  res.status(404).send('<h1>404 Not Founded</h1>')
})

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`)
})
