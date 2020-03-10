const Device = require('./device.js');


class Battery extends Device {
    constructor(state,charge){
        super(state,charge);
        this.charge = charge;        
        this.rental = false; 
    }    
    
    getCharge () {
        return this.charge ;
    }

    initRental () {
        if(this.charge >= 50 && this.state === 'available'){
            this.rental=true;   
            console.log('rented successful')         
        }else{
            console.log('the battery cannot be rented');
        }
    }
}


//Test
for (let index = 0; index <= 10; index++) {
    const charge = Math.floor( (100-0) * Math.random() );
    const state = ( charge >= 50) ? 'available' : 'unavailable';
    const batery = new Battery(  state, charge );
    batery.initRental();
}