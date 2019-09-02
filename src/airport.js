class Airport {
  constructor(capacity = 2) {
    this.landedPlanes = [];
    this.capacity = capacity;
  }

  getNumberOfPlanes() {
    return this.landedPlanes.length;
  }

  land(plane) {
    if (this._hasPlaneInAirport(plane)) {
      throw 'Plane already in airport';
    } else if (this._atCapacity()) {
      throw 'Airport is at capacity'
    } else {
      this.landedPlanes.push(plane);
    }
  }

  takeOff(plane) {
    if (!this._hasPlaneInAirport(plane)) {
      throw 'Plane is not in the airport';
    } else {
      this.landedPlanes = this.landedPlanes.filter((listedPlane) => listedPlane !== plane);
    }
  }

  _hasPlaneInAirport(plane) {
    return this.landedPlanes.includes(plane);
  }

  _atCapacity() {
    return this.getNumberOfPlanes() == this.capacity;
  }
}
exports.Airport = Airport;
