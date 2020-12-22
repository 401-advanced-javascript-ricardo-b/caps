const eventEmitter = require('../events');


describe('Event Logs', () => {
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
    
    expect(consoleSpy).toHaveBeenCalled();
  })
})