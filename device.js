class Device {
    constructor(state,available){
        this.state = state;
        this.available = available;
    }    
 
    availability () {
        return this.available ;
    }
}

module.exports = Device;