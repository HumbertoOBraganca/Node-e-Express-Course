const {readFile,writeFile} = require('fs').promises
//const util = require('util')
//const readFilePromise = util.promisify(readFile)
//const writeFilePromise = util.promisify(writeFile)


const start = async() => {
    try {
    const first = await readFile('./content/first.txt','utf8')
    const second = await readFile('./content/second.txt','utf8')
    await writeFile(
        './content/result-mind-grenade.txt',
        `THIS IS AWESOME: ${first} ${second}`,
        {flag: 'a'},
    )
    console.log(first,second)
    } catch(error) {
        console.log(error)
    }
}

start()


/* const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err,data) => {
            if (err) {
                console.log('error')
                reject(err)
            } else {
                console.log('certor')
                resolve(data)
            }
        })
    })
}
*/

//getText('./content/first.txt').then(result => console.log(result))
//.catch(err => console.log(err))
//console.log('kjknbk')
// Esse comentário é apenas para consertar um commit