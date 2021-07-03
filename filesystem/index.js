const fs = require('fs');
const { Z_DATA_ERROR } = require('zlib');

const fileReadCallback = (error, data)=>{
    if(error){
        console.log(`failed to read file`);
        return
    }
    
    console.log(data);
}

fs.readFile('filesystem/todo.txt', 'UTF-8', fileReadCallback);
