const { writeFile, writeFileSync } = require('fs')
for (let i = 0; i < 10000; i++) {
    writeFileSync('./content/big.txt', `hello world ${i}\n`, { flag: 'a' })
}
// Esse comentário é apenas para consertar um commit