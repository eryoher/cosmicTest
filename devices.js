const Device = require('./device.js');


const devices = [];

for (let index = 90; index < 100; index++) {
    const ava = Math.floor( (100-0) * Math.random() );
    const state = ( ava >= 50) ? 'available' : 'unavailable';
    const device = new Device(state, ava);     
    devices.push( device );       
}

console.log(devices)