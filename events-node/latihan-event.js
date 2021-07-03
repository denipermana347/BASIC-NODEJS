const {EventEmitter} = require('events');



const birthdayEventListener = (name) => {
    console.log(`Happy Birthday ${name}`);
};

const MyEvent = new EventEmitter();

MyEvent.on('birthday', birthdayEventListener);
MyEvent.emit('birthday', name= 'deni');