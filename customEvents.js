//"submit-form" --> console.log('submitedd);

const EventEmitter = require('node:events');

const eventEmitter = new EventEmitter();

//submit-form
eventEmitter.on('submit-form',()=>{
    console.log("hello i have submitted my form");
});

eventEmitter.emit('submit-form');