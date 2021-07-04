const fs = require('fs');
const TulisData = fs.createWriteStream('output.txt');

writeableStream.write('Ini merupakan teks baris pertama!\n');
writeableStream.write('Ini merupakan teks baris kedua!\n');
writeableStream.end();