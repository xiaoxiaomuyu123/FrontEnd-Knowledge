const fs = require('fs');

const readFileAsync = (path) => {
    return new Promise ((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if(err) {
                reject(err)
                return
            }
            resolve(data)
        })
    })
}

const fileData = readFileAsync('./data.txt')
.then((data) => {
    if(data) {
        console.log(1111)
        return readFileAsync('./data2.txt')
    }
}).then((data) => {
    console.log(22222);
    console.log("2222", JSON.stringify(data))
    })
    .catch((err) =>{
    console.log(err)
    })


console.log(fileData)