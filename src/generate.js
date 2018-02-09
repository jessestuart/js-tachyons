const fs = require('fs')

const TachyonsGenerator = require('tachyons-generator')
const configuration = require('./config/js-tachyons-definition.js')

const generate = async () => {
  const dist = await TachyonsGenerator(configuration).generate()

  fs.writeFileSync('./dist/index.html', dist.docs)
  fs.writeFileSync('./dist/tachyons.css', dist.css)
  fs.writeFileSync('./dist/tachyons.min.css', dist.min)
}

generate()
