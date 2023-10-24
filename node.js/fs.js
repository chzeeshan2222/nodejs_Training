const fs = require('fs');
fs.readFile('text.txt','utf8',((err, data) =>{
    if(err) {
        console.log("file not read ",err);
        return;
    }
    console.log(data);
    fs.writeFile('messege.txt',data,{flag:'a'},(err,result) =>{
        if(err) {
            console.log("file not write ",err);
            return;
        }
        console.log(result);
    });
}));
const data="hello dear"
