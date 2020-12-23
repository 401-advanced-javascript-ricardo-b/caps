'use strict';

require('dotenv').config();

const port = process.env.PORT || 3000;
const io = require('socket.io')(port);
const logEvent = require('./logEvent');

const caps = io.of('/caps')//caps nameSpace
// const vendor = io.of('/vendor')//vendor nameSpace
// const driver = io.of('/driver')//driver nameSpace

caps.on('connection', (socket)=>{

  // socket.on('join', room=>{
  //   socket.join(room);
  // })
  
  socket.on('pickup', (payload)=>{
    logEvent('pickup', payload);
    // caps.to(payload.storeID).emit('pickup-ready', payload);
    caps.emit('pickup-ready', payload);
  });

  socket.on('in-transit', (payload)=>{
    logEvent('in-transit', payload); 
    // caps.to(payload.storeID).emit('delivered', payload);
    caps.emit('delivered', payload);
  });
  socket.on('delivered', (payload)=>{
    logEvent('delivered', payload); 
  });

})
  
// function logEvent(event, payload){
//   const time = new Date();
//   console.log('EVENT', { event, time, payload});
//   if(event==='pickup')caps.emit('pickup-ready', payload);
//   if(event==='delivered')caps.emit('delivered', payload);
// }

// caps.on('connection', (socket)=>{ //caps only
//   console.log('connected to caps specifically on socket ID:', socket.id);

//   socket.on('pickup', (payload)=>{
//     console.log('heard pickup', payload);
//     caps.emit('emit-listener-only-for-caps', payload)//sends only to caps
//   })
// })

///all (should be)

// io.on('connection', (socket)=>{ //all
//   console.log('you are now connected to caps');
 
//   socket.on('pickup', (payload)=>{ //socket.on used for specific connection
//     console.log('pickup', socket.id)
//     io.emit('emit-listener', payload);
//   })
// })

//vendor only

// vendor.on('connection', (socket)=>{ //vendor only
//   console.log('connected to vendor specifically on socket ID:', socket.id);

//   socket.on('listening-for-this-to-send-to-vendor', (payload)=>{
//     console.log('in the brain(caps), heard listening-for-this-to-send-to-vendor', payload);
//     vendor.emit('emit-listener-only-for-vendor', payload)//sends only to vendor
//   })
// })

//driver only

// driver.on('connection', (socket)=>{ //driver only
//   console.log('connected to driver specifically on socket ID:', socket.id);

//   socket.on('listening-for-this-to-send-to-driver', (payload)=>{
//     console.log('in the brain(caps), heard listening-for-this-to-send-to-driver', payload);
//     driver.emit('emit-listener-only-for--driver', payload)//sends only to driver
//   })
// })


////////////////////////

//Main Hub Application

// const events = require('./events'); //Manages the state of every package

// require('./vendor'); //Manages the state of every package
// require('./driver'); //Manages the state of every package

// //states of the package

// events.on('pickup', (payload)=> logEvent('pickup', payload));
// events.on('in-transit', (payload)=> logEvent('in-transit', payload));
// events.on('delivered', (payload)=> logEvent('delivered', payload));

// function logEvent(event, payload){
//   const time = new Date();
//   console.log('EVENT', { event, time, payload});
// }

//////////////////////////////

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
