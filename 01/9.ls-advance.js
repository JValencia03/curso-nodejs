const fs = require('node:fs/promises')
const path = require('node:path')
const pc = require('picocolors')

const folder = process.argv[2] ?? '.'

async function ls (directory) {
  let files
  try {
    files = await fs.readdir(directory)
  } catch {
    console.error(pc.red(`❌ No se pudo leer el directorio: ${directory}`))
    process.exit(1)
  }

  const filePromise = files.map(async file => {
    const filePath = path.join(directory, file)
    let stats

    try {
      stats = await fs.stat(filePath) // fs.stat da la info del archivo
    } catch {
      console.error(pc.red(`No se pudo leer el archivo ${filePath}`))
      process.exit(1)
    }

    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'd' : 'f'
    const fileSize = stats.size
    const fileModified = stats.mtime.toLocaleString()

    if (fileType === 'd') {
      return pc.yellow(`${fileType} ${file.padEnd(25)} ${fileSize.toString().padStart(10)} ${fileModified}`)
    }

    return pc.green(`${fileType} ${file.padEnd(25)} ${fileSize.toString().padStart(10)} ${fileModified}`)
  })

  const filesInfo = await Promise.all(filePromise)

  filesInfo.forEach(fileInfo => console.log(fileInfo))
}

ls(folder)
