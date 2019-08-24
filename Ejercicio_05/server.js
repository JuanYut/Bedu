const fs = require('fs')

fs.writeFile('test.txt', 'hola', (err) => {
  if (err) {
    return console.log(err)
  } else {
    
  }
})

fs.readFile('./test.txt', 'utf8', (err, data) => {
  if (err) {
    return console.log(err)
  } else {

  }
})