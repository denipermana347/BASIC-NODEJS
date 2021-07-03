const {EventEmitter} = require('events');
const MyeventsEmitter = new EventEmitter();

// fungsi deklarasi
const MakeCoffe = ({name})=>{
    console.log(`Kopi ${name} telah dibuat !`);
};

const MakeBill = ({price})=>{
    console.log(`Bill sebesar ${price} telah dibuat !`);
};

MyeventsEmitter.on('Coffee-order', MakeCoffe);
MyeventsEmitter.on('Coffee-order', MakeBill);

MyeventsEmitter.emit('Coffee-order', {name:"Tubruk", price: 1200000});