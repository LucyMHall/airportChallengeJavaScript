const { Airport } = require('../src/airport');

describe('#getNumberOfPlanes', () => {
  it('starts at zero', () => {
    const airportA = new Airport();
    expect(airportA.getNumberOfPlanes()).toBe(0);
  });
});

describe('#land', () => {
  it('increases the number of planes in an airport by 1', () => {
    const airportA = new Airport();
    const mockPlane = {};
    airportA.land(mockPlane);
    expect(airportA.getNumberOfPlanes()).toBe(1);
  });
  it('cannot land a plane which is already in the airport', () => {
    const airportA = new Airport();
    const mockPlane = {};
    airportA.land(mockPlane);
    expect(() => {
      airportA.land(mockPlane);
    }).toThrow();
  });
});

describe('#takeOff', () => {
  it('decreases the number of planes in an airport by 1', () => {
    const airportA = new Airport();
    const mockPlane = {};
    airportA.land(mockPlane);
    airportA.takeOff(mockPlane);
    expect(airportA.getNumberOfPlanes()).toBe(0);
  });
});
