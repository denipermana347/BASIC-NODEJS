const fs = require('fs');


const fileReadCallback = (error, data)=>{
    if(error){
        console.log(`failed to read file`);
        return
    }
    
    console.log(data);
}

fs.readFile('./filesystem/latihan-readFile/notes.txt', 'UTF-8', fileReadCallback);
