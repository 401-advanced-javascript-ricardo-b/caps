'use strict';

const Events = require('events');
const events = new Events();

module.exports = events; //Global Event Pool (shared by all modules)