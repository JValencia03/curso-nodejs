const fs = require('node:fs/promises')

console.log('Leyendo el primer archivo...')
const text = await fs.readFile('./archivo.txt', 'utf-8')
console.log('Primer texto:', text)

console.log('----> Hacer cosas mientras lee el archivo...')

console.log('Leyendo el segundo archivo...')
const text2 = await fs.readFile('./archivo2.txt', 'utf-8')
console.log('Segundo texto:', text2)
