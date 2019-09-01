class Airport {
  constructor(capacity = 2) {
    this.numberOfPlanes = 0;
    this.capacity = capacity;
  }

  getNumberOfPlanes() {
    return this.numberOfPlanes;
  }

  land(plane) {
    if (this.numberOfPlanes !== this.capacity) {
      this.numberOfPlanes += 1;
    }
    return this.numberOfPlanes;
  }
}
exports.Airport = Airport;
