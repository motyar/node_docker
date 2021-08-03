const { Image } = require('canvas')
const fs = require('fs')

const img = new Image()
img.onload = () => ctx.drawImage(img, 0, 0)
img.onerror = err => { throw err }


img.src = 'http://picsum.photos/200/300'

const out = fs.createWriteStream(__dirname + '/test.png')
const stream = canvas.createPNGStream()
stream.pipe(out)
out.on('finish', () =>  console.log('The PNG file was created.'))
