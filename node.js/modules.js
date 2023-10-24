// const amount=10;
// if(amount<10) {
//     console.log("Amount is less than 10");
// }else{
//     console.log("Amount is greater than 10");
// };
//// globally data
// console.log("diectory Name: ",__dirname);

// console.log("diectory Name: ",__filename);
// setInterval(()=>{
//     console.log(new Date());
// },1000)

////// Module
// module is a ecapsulated Code (only share minimum)
const data= require('./name');
const func=require('./func');
require('./mind-gernade')
//console.log(name);
console.log(data);
//console.log(items);
 func.sayHi(data.name);
// sayHi(zeeshan);