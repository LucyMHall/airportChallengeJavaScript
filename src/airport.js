class Airport {
  constructor() {
    this.numberOfPlanes = 0;
  }

  getNumberOfPlanes() {
    return this.numberOfPlanes;
  }

  land() {
    this.numberOfPlanes += 1;
  }

  takeOff() {
    this.numberOfPlanes -= 1;
  }
}
exports.Airport = Airport;
