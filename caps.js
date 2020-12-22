'use strict';

//Main Hub Application

const events = require('./events'); //Manages the state of every package

require('./vendor'); //Manages the state of every package
require('./driver'); //Manages the state of every package

//states of the package

events.on('pickup', (payload)=> logEvent('pickup', payload));
events.on('in-transit', (payload)=> logEvent('in-transit', payload));
events.on('delivered', (payload)=> logEvent('delivered', payload));

function logEvent(event, payload){
  const time = new Date();
  console.log('EVENT', { event, time, payload});
}

// events.on('pickup', (payload)=>{ //Manages the state of every package
//   console.log('EVENT:', { //Logs every event to the console with a timestamp and the event payload
//     event: 'pickup',
//     time: new Date(),
//     payload
//   });
// })

// events.on('in-transit', (payload)=>{ //Manages the state of every package
//   console.log('EVENT:', { //Logs every event to the console with a timestamp and the event payload
//     event: 'in-transit',
//     time: new Date(),
//     payload
//   });
// })

// events.on('delivered', (payload)=>{ //Manages the state of every package
//   console.log('EVENT:', { //Logs every event to the console with a timestamp and the event payload
//     event: 'delivered',
//     time: new Date(),
//     payload
//   });
// })
