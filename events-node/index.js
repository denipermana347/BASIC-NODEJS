const {EventEmitter} = require('events');
const MyEventsEmitter = new EventEmitter();

const MakeCoffe = ({name})=>{
    console.log(`Kopi ${name} telah dibuat!`);
};

MyEventsEmitter.on('cofee-order', MakeCoffe );
MyEventsEmitter.emit('cofee-order', {name: 'Tubruk'});