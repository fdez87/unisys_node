const fs = require('fs')
const file = 'data.json'

fs.readFile(file,(err, data) => {
    if (err) {
        console.error(err)
        return
    }
    
})