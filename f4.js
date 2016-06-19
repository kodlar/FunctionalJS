// eski yazım
//var fs = require('fs');

// yeni yazım import diyebilmek için
// "babel": "^6.5.2",
//  "babel-cli": "^6.10.1",
//  "babel-preset-es2015": "^6.9.0" paketlerini kurdum, .babelrc dosyasını ekledim
// sonra babel f4.js | node çalıştırdım
// utf8 character encoding koymadığın zaman buffer bir byte değeri dönüyour
// utf8 ekleyince textin kendisi dönüyour

import fs from 'fs'

var output = fs.readFileSync('f4.txt','utf8')
            .trim()
            .split('\n')
            .map(line => line.split('\t'))
            .reduce((customer, line) => {
              return customer
            }, {})
console.log('output', output)
