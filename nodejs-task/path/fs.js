 const fs = require('fs')
 const path = require('path')

 let filePath = path.join(__dirname, 'file.txt')

 fs.readFile(filePath, 'utf-8', (err, data) => {
     console.log(err)
 })