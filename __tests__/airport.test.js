const { Airport } = require('../src/airport');

describe('#getNumberOfPlanes', () => {
  it('starts at zero', () => {
    const airportA = new Airport();
    expect(airportA.getNumberOfPlanes()).toBe(0);
  });
  it('increments by 1 for every plane landed', () => {
    const airportA = new Airport();
    const fakePlane = {};
    airportA.land(fakePlane);
    expect(airportA.getNumberOfPlanes()).toBe(1);
  });
});
