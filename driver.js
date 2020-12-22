'use strict';

const events = require('./events'); //Monitor the system for events …

events.on('pickup', pickUp); //On the ‘pickup’ event … Wait 1 second with pickup function


function pickUp(payload){ //On the ‘pickup’ event …
  setTimeout(()=>{  //Wait 1 second
    console.log(`DRIVER: picked up ${payload.orderID}`); //Log “DRIVER: picked up [ORDER_ID]” to the console.
    events.emit('in-transit', payload); //Emit an ‘in-transit’ event with the payload you received
  }, 1000); //Wait 1 second

  setTimeout(()=>{ //Wait 3 seconds
    console.log(`DRIVER: delivered up ${payload.orderID}`) //Log “delivered” to the console
    events.emit('delivered', payload); //Emit a ‘delivered’ event with the same payload
  }, 3000) //wait 3 seconds
}

// events.on('in-transit', inTransit); //‘in-transit’ called
// events.on('pickup', driverPickUp); //Log “DRIVER: picked up [ORDER_ID]” to the console.

// function driverPickUp(payload){
// }

// function inTransit(payload){ //‘in-transit’ function
   
// }

// events.on('in-transit', delivered);

// function delivered(payload){ //Wait 3 seconds
// }
