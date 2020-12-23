'use strict'

const logEvent = require('./logEvent');

describe('Event logger', ()=>{

  let consoleSpy;

  beforeEach(() => {
    // Attach to the console
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() =>{
    // put the console back
    consoleSpy.mockRestore();
  });

  it('console logs pickup event', () => {
    logEvent
    expect(consoleSpy).toHaveBeenCalled();
  })

  
})