const { Airport } = require('../src/airport');

let airportA;
let mockPlane;
let mockPlane2;
let mockPlane3;

beforeEach(() => {
  airportA = new Airport();
  mockPlane = {};
  mockPlane2 = {};
  mockPlane3 = {};
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
  it('cannot land a plane if the airport is at default capacity', () => {
    airportA.land(mockPlane);
    airportA.land(mockPlane2);
    expect(() => {
      airportA.land(mockPlane3);
    }).toThrow();
  });
  it('cannot land a plane if the airport is at its specified capacity', () => {
    const airportB = new Airport(1);
    airportB.land(mockPlane);
    expect(() => {
      airportB.land(mockPlane2);
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
