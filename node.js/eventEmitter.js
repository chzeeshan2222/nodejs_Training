const EventEmitter = require('events');
const customEventEmitter = new EventEmitter();
customEventEmitter.on('res',(name,age)=>{
    console.log(`Hello ${name} your age is  ${age}`);
})
customEventEmitter.on('res',()=>{
    console.log("data  correctly received");
})

customEventEmitter.emit('res','zeeshan',23);