const path = require('node:path')

console.log(path.sep)

// En nodejs, es una MUY mala práctica concatenar rutas con strings porque no es portable entre sistemas operativos, por ejemplo:
// en unix: las rutas se separan con / (slash)
// en windows: las rutas se separan con \ (backslash)
// en mac: las rutas se separan con : (dos puntos)

// Unir rutas con path join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename('/tmp/secret-files/password.txt')
console.log(base)

const filename = path.basename('/tmp/secret-files/password.txt', '.txt')
console.log(filename)

const extension = path.extname('my.super.image.jpg')
console.log(extension)
