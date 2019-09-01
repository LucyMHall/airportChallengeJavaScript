class Airport {
  constructor() {
    this.numberOfPlanes = 0;
  }

  getNumberOfPlanes() {
    return this.numberOfPlanes;
  }

  land(plane) {
    this.numberOfPlanes += 1;
    return this.numberOfPlanes;
  }
}
exports.Airport = Airport;
