'use strict';

const eventEmitter = require('./events'); //Monitor the system for events …

eventEmitter.on('pickup', pickUp); //On the ‘pickup’ event … Wait 1 second with pickup function


async function pickUp(payload){ //On the ‘pickup’ event …
  await setTimeout(()=>{  //Wait 1 second
    console.log(`DRIVER: picked up ${payload.orderID}`); //Log “DRIVER: picked up [ORDER_ID]” to the console.
    eventEmitter.emit('in-transit', payload); //Emit an ‘in-transit’ event with the payload you received
  }, 1000); //Wait 1 second
}

eventEmitter.on('in-transit', inTransit); //‘in-transit’ called
// eventEmitter.on('pickup', driverPickUp); //Log “DRIVER: picked up [ORDER_ID]” to the console.

// function driverPickUp(payload){
// }

async function inTransit(payload){ //‘in-transit’ function
  await setTimeout(()=>{ //Wait 3 seconds
    console.log(`DRIVER: delivered up ${payload.orderID}`) //Log “delivered” to the console
    eventEmitter.emit('delivered', payload); //Emit a ‘delivered’ event with the same payload
  }, 3000) //wait 3 seconds
}

// eventEmitter.on('in-transit', delivered);

// function delivered(payload){ //Wait 3 seconds
// }
