'use strict';

require('dotenv').config();

const io = require('socket.io-client');
const host = 'http://localhost:3000';

// const brainConnection = io.connect(host);
const caps = io.connect(`${host}/caps`) //caps nameSpace
// const vendor = io.connect(`${host}/vendor`); //vendor nameSpace

const faker = require('faker'); 
const store = process.env.STORE; 
const storeID = process.env.STORE_ID

// caps.emit('join', process.env.STORE_ID);

setInterval(()=>{

  const custOrder = {
    store: store,
    storeID: storeID,
    orderID: faker.random.uuid(),
    customer: faker.name.findName(),
    address: `${faker.address.city()}, ${faker.address.state()}`
  }
  
  caps.emit('pickup', custOrder); 
  
}, 5000); 

caps.on('delivered', thanks); 

function thanks(payload){ 
  console.log(`VENDOR: Thank you for delivering ${payload.orderID}`) 
}

module.exports = thanks;

//////////////testing

// brainConnection.on('connection', (socket)=>{
//   console.log('vendor brainConnection:', socket.id)
// })

////////

// const events = require('../events');
// const faker = require('faker'); //Have some fun by using the faker library to make up phony information
// const store = process.env.STORE; //Declare your store name

// setInterval(()=>{ //simulate a new customer order

//   const custOrder = { //Create a fake order, as an object
//     store: store,
//     orderID: faker.random.uuid(),
//     customer: faker.name.findName(),
//     address: `${faker.address.city()}, ${faker.address.state()}`
//   }
//   // console.log('custOrder:', custOrder)
//   events.emit('pickup', custOrder); //Emit a ‘pickup’ event and attach the fake order as payload
  
// }, 5000); //Every 5 seconds

// events.on('delivered', thanks); //Whenever the ‘delivered’ event occurs

// function thanks(payload){ //Whenever the ‘delivered’ event occurs
//   console.log(`VENDOR: Thank you for delivering ${payload.orderID}`) ////Log “thank you” to the console
// }
