'use strict';

// const io = require('socket.io-client');
// const host = 'http://localhost:3000';

// const caps = io.connect(`${host}/caps`) //caps nameSpace

function logEvent(event, payload){
  const time = new Date();
  console.log('EVENT', { event, time, payload});
  // if(event==='pickup')socket.emit('pickup-ready', payload);
  // if(event==='delivered')socket.emit('delivered', payload);
}

module.exports = logEvent;