// Esto sólo si en los módulos nativos
// que no tienen promesas nativas

// const { promisify } = require('node:util')
const fs = require('node:fs')

// asíncrono vs síncrono

// Síncrono: Tratar de no usar, siempre es mejor usar promesas
console.log('Leyendo el primer archivo...')
const text = fs.readFileSync('./archivo.txt', 'utf-8')

console.log(text)

console.log('Haciendo cosas mientras lee los archivos')

console.log('Leyendo el segundo archivo...')
const secondText = fs.readFileSync('./archivo2.txt', 'utf-8')

console.log(secondText)

console.log('---------------')
console.log('---------------')

// Callback:
console.log('Leyendo el primer archivo...')
fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
  if (!err) {
    console.log('primer texto:', text)
  }
})

console.log('----> Hacer cosas mientras lee el archivo...')

console.log('Leyendo el segundo archivo...')
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
  if (!err) {
    console.log('segundo texto:', text)
  }
})
