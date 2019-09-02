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
    airportA.land();
    expect(airportA.getNumberOfPlanes()).toBe(1);
  });
});

describe('#takeOff', () => {
  it('decreases the number of planes in an airport by 1', () => {
    const airportA = new Airport();
    airportA.land();
    airportA.takeOff();
    expect(airportA.getNumberOfPlanes()).toBe(0);
  });
});
