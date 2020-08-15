import Vehicles from './Vehicles';

export default class VehiclesManager {
  constructor() {
    this.listOfVehicles = [];
  }

  setVehiclesList(list) {
    list.map((elem, i) => {
      let vehicles = new Vehicles(
        elem.cargo_capacity,
        elem.consumables,
        elem.costIn_credits,
        elem.created,
        elem.crew,
        elem.edited,
        elem.length,
        elem.manufacturer,
        elem.max_atmosphering_speed,
        elem.model,
        elem.name,
        elem.passengers,
        elem.pilots,
        elem.films,
        elem.url,
        elem.vehicle_class
      );
      this.listOfVehicles.push(vehicles);
      return this.listOfVehicles;
    });
  }

  getVehiclesList() {
    return this.listOfVehicles;
  }
}
