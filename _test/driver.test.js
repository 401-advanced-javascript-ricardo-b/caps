'use strict'

const pickUp = require('../driver/driver');
const faker = require('faker'); 


describe('Driver', ()=>{

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

  it('console logs picked up log', () => {
    setTimeout(()=>{
      pickUp(payload)
      expect(consoleSpy).toHaveBeenCalled();
    }, 1000);
  });

  it('console logs in-transit up log', () => {
    setTimeout(()=>{
      pickUp(payload)
      expect(consoleSpy).toHaveBeenCalled();
    }, 3000);
  });

  it('console logs delivered up log', () => {
    setTimeout(()=>{
      pickUp(payload)
      expect(consoleSpy).toHaveBeenCalled();
    }, 1000);
  });
})
