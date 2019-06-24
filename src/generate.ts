import TachyonsGenerator from 'tachyons-generator'
import fs from 'fs'

import configuration from './config/tachyons-definition'

// Create output directory if it doesn't already exist.
const DIST_DIR = './dist/'
if (!fs.existsSync(DIST_DIR)) {
  fs.mkdirSync(DIST_DIR)
}

interface TachyonsGenerated {
  docs: string
  css: string
  min: string
}

// Generate and write the compiled files to disk.
TachyonsGenerator(configuration)
  .generate()
  .then(({ css, docs, min }: TachyonsGenerated) => {
    fs.writeFileSync(`${DIST_DIR}/index.html`, docs)
    fs.writeFileSync(`${DIST_DIR}/tachyons.css`, css)
    fs.writeFileSync(`${DIST_DIR}/tachyons.min.css`, min)
  })
