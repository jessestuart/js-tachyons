const TachyonsGenerator = require('tachyons-generator')
const fs = require('fs')

const configuration = require('./config/tachyons-definition.js')

// Create output directory if it doesn't already exist.
const distDir = './dist'
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir)
}

// Generate and write the compiled files to disk.
TachyonsGenerator(configuration)
  .generate()
  .then(dist => {
    fs.writeFileSync(`${distDir}/index.html`, dist.docs)
    fs.writeFileSync(`${distDir}/tachyons.css`, dist.css)
    fs.writeFileSync(`${distDir}/tachyons.min.css`, dist.min)
  })
