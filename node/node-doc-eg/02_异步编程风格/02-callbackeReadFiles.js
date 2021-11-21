const fs = require('fs');

fs.readFile('./data.txt', (err, data) => {
    if(err) {
        console.log("读取文件错误", err)
        return
    }
    
    console.log(data)
})
