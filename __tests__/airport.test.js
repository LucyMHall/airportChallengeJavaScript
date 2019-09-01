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
  it('does not increase beyond the capacity', () => {
    const airportA = new Airport();
    const fakePlane1 = {};
    airportA.land(fakePlane1);
    const fakePlane2 = {};
    airportA.land(fakePlane2);
    const fakePlane3 = {};
    airportA.land(fakePlane3);
    expect(airportA.getNumberOfPlanes()).toBe(2);
  });
});
