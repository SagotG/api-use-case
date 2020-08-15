class Vehicles {
  constructor(
    cargoCapacity,
    consumables,
    costInCredits,
    created,
    crew,
    edited,
    length,
    manufacturer,
    maxAtmospheringSpeed,
    model,
    name,
    passengers,
    pilots,
    films,
    url,
    vehicleClass
  ) {
    this.cargoCapacity = cargoCapacity;
    this.consumables = consumables;
    this.costInCredits = costInCredits;
    this.created = created;
    this.crew = crew;
    this.edited = edited;
    this.length = length;
    this.manufacturer = manufacturer;
    this.maxAtmospheringSpeed = maxAtmospheringSpeed;
    this.model = model;
    this.name = name;
    this.passengers = passengers;
    this.pilots = pilots;
    this.films = films;
    this.url = url;
    this.vehicleClass = vehicleClass;
  }

  setCargoCapacity(cargoCapacity) {
    this.cargoCapacity = cargoCapacity;
  }

  getCargoCapacity() {
    return this.cargoCapacity;
  }

  setConsumables(consumables) {
    this.consumables = consumables;
  }

  getConsumables() {
    return this.consumables;
  }

  setCostInCredits(costInCredits) {
    this.costInCredits = costInCredits;
  }

  getCostInCredits() {
    return this.costInCredits;
  }

  setCreated(created) {
    this.created = created;
  }

  getCreated() {
    return this.created;
  }

  setCrew(crew) {
    this.crew = crew;
  }

  getCrew() {
    return this.crew;
  }

  setEdited(edited) {
    this.edited = edited;
  }

  getEdited() {
    return this.edited;
  }

  setLength(length) {
    this.length = length;
  }

  getLength() {
    return this.length;
  }

  setManufacturer(manufacturer) {
    this.manufacturer = manufacturer;
  }

  getManufacturer() {
    return this.manufacturer;
  }

  setMaxAtmosphering_speed(maxAtmosphering_speed) {
    this.maxAtmosphering_speed = maxAtmosphering_speed;
  }

  getMaxAtmosphering_speed() {
    return this.maxAtmosphering_speed;
  }

  setModel(model) {
    this.model = model;
  }

  getModel() {
    return this.model;
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setPassengers(passengers) {
    this.passengers = passengers;
  }

  getPassengers() {
    return this.passengers;
  }

  setPilots(pilots) {
    this.pilots = pilots;
  }

  getPilots() {
    return this.pilots;
  }

  setFilms(films) {
    this.films = films;
  }

  getFilms() {
    return this.films;
  }

  setUrl(url) {
    this.url = url;
  }

  getUrl() {
    return this.url;
  }

  setVehicleClass(vehicleClass) {
    this.vehicleClass = vehicleClass;
  }

  getVehicleClass() {
    return this.vehicleClass;
  }
}

export default Vehicles;
