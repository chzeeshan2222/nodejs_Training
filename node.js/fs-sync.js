const fs=require('fs');
// synchronously  start
console.log('starting');
const text=fs.readFileSync('text.txt', 'utf8');
console.log(text);
console.log(" sync ending");
// asychronously start
console.log(' async starting');

fs.readFile('text.txt', 'utf8',async function(err,data){

    if(err) {
        console.log(err);
        return;
    }
 await   console.log(data);
});
console.log(" async ending");