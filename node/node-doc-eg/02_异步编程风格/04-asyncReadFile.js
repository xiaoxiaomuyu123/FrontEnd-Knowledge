const fs = require('fs')

const readFileAsync = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if(err) {
                reject(err)
                return
            }
            resolve(data)
        })
    })
}

const readFiles = async () => {
    try {
        let data1 = await readFileAsync('./data.txt');
        console.log("1", data1)
        let data2 = await readFileAsync('./data2.txt');
        console.log("2", data2)

        return data1

    } catch (e) {
        console.log(e)
    }
}

readFiles().then((data) => {
    console.log("3", data)
})

// console.log(readFiles())
