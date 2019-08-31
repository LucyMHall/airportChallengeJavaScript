const { Airport } = require('../src/airport');

describe('#getNumberOfPlanes', () => {
  it('starts at zero', () => {
    const airportA = new Airport();
    expect(airportA.getNumberOfPlanes()).toBe(0);
  });
});
