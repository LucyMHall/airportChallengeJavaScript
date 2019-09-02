const { Airport } = require('../src/airport');

let airportA;
let mockPlane;

beforeEach(() => {
  airportA = new Airport();
  mockPlane = {};
});

describe('#getNumberOfPlanes', () => {
  it('starts at zero', () => {
    expect(airportA.getNumberOfPlanes()).toBe(0);
  });
});

describe('#land', () => {
  it('increases the number of planes in an airport by 1', () => {
    airportA.land(mockPlane);
    expect(airportA.getNumberOfPlanes()).toBe(1);
  });
  it('cannot land a plane which is already in the airport', () => {
    airportA.land(mockPlane);
    expect(() => {
      airportA.land(mockPlane);
    }).toThrow();
  });
});

describe('#takeOff', () => {
  it('decreases the number of planes in an airport by 1', () => {
    airportA.land(mockPlane);
    airportA.takeOff(mockPlane);
    expect(airportA.getNumberOfPlanes()).toBe(0);
  });
  it('cannot takeOff a plane which is not in the airport', () => {
    expect(() => {
      airportA.takeOff(mockPlane);
    }).toThrow();
  });
});
