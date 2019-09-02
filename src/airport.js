class Airport {
  constructor() {
    this.landedPlanes = [];
  }

  getNumberOfPlanes() {
    return this.landedPlanes.length;
  }

  land(plane) {
    if (this.landedPlanes.includes(plane)) {
      throw 'Plane already in airport';
    } else {
      this.landedPlanes.push(plane);
    }
  }

  takeOff(plane) {
    if (!this.landedPlanes.includes(plane)) {
      throw 'Plane is not in the airport';
    } else {
      this.landedPlanes = this.landedPlanes.filter((listedPlane) => listedPlane !== plane);
    }
  }
}
exports.Airport = Airport;
