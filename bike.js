const Device = require('./device.js');


class Bike extends Device {
    constructor(state){
        super(state);              
        this.rental = false; 
    }        
    
    initRental () {
        if(this.state === 'available'){
            this.rental=true;
            console.log('rented successful')         
          
        }else{
            console.log('the Bike cannot be rented');
        }
    }
}

//Test
for (let index = 0; index <= 10; index++) {
    const numero = Math.floor( (100-0) * Math.random() );
    const state = ( numero > 25) ? 'available' : 'unavailable';
    const batery = new Bike( state );
    batery.initRental();
}