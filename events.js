'use strict';

const Events = require('events');
const eventEmitter = new Events();

module.exports = eventEmitter; //Global Event Pool (shared by all modules)