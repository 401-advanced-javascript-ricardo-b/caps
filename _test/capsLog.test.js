'use strict'

const logEvent = require('../logEvent');
const faker = require('faker'); 


describe('Caps event logger', ()=>{

  let consoleSpy;

  beforeEach(() => {
    // Attach to the console
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  let payload = {
    store: 'TBD',
    storeID: 'Unique',
    orderID: faker.random.uuid(),
    customer: faker.name.findName(),
    address: `${faker.address.city()}, ${faker.address.state()}`
  };

  afterEach(() =>{
    // put the console back
    consoleSpy.mockRestore();
  });

  it('console logs pickup event', () => {
    logEvent(payload)
    expect(consoleSpy).toHaveBeenCalled();
  })
})
