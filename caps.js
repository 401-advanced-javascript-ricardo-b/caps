'use strict';

//Main Hub Application

const eventEmitter = require('./events'); //Manages the state of every package

require('./vendor'); //Manages the state of every package
require('./driver'); //Manages the state of every package

//states of the package

eventEmitter.on('pickup', (payload)=>{ //Manages the state of every package
  console.log('EVENT:', { //Logs every event to the console with a timestamp and the event payload
    event: 'pickup',
    time: new Date(),
    payload
  });
})

eventEmitter.on('in-transit', (payload)=>{ //Manages the state of every package
  console.log('EVENT:', { //Logs every event to the console with a timestamp and the event payload
    event: 'in-transit',
    time: new Date(),
    payload
  });
})

eventEmitter.on('delivered', (payload)=>{ //Manages the state of every package
  console.log('EVENT:', { //Logs every event to the console with a timestamp and the event payload
    event: 'delivered',
    time: new Date(),
    payload
  });
})
