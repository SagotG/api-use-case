class Starships {
  constructor(
    MGLT,
    cargoCapacity,
    consumables,
    costInCredits,
    created,
    crew,
    edited,
    hyperdriveRating,
    length,
    manufacturer,
    maxAtmospheringSpeed,
    model,
    name,
    passengers,
    films,
    pilots,
    starshipClass,
    url
  ) {
    this.MGLT = MGLT;
    this.cargoCapacity = cargoCapacity;
    this.consumables = consumables;
    this.costInCredits = costInCredits;
    this.created = created;
    this.crew = crew;
    this.edited = edited;
    this.hyperdriveRating = hyperdriveRating;
    this.length = length;
    this.manufacturer = manufacturer;
    this.maxAtmospheringSpeed = maxAtmospheringSpeed;
    this.model = model;
    this.name = name;
    this.passengers = passengers;
    this.films = films;
    this.pilots = pilots;
    this.starshipClass = starshipClass;
    this.url = url;
  }

  setMGLT(MGLT) {
    this.MGLT = MGLT;
  }

  getMGLT() {
    return this.MGLT;
  }
  setCargoCapacity(CargoCapacity) {
    this.cargoCapacity = CargoCapacity;
  }

  getCargoCapacity() {
    return this.cargoCapacity;
  }
  setConsumables(Consumables) {
    this.consumables = Consumables;
  }

  getConsumables() {
    return this.consumables;
  }
  setCostInCredits(CostInCredits) {
    this.costInCredits = CostInCredits;
  }

  getCostInCredits() {
    return this.costInCredits;
  }
  setCreated(Created) {
    this.created = Created;
  }

  getCreated() {
    return this.created;
  }
  setCrew(Crew) {
    this.crew = Crew;
  }

  getCrew() {
    return this.crew;
  }
  setEdited(Edited) {
    this.edited = Edited;
  }

  getEdited() {
    return this.edited;
  }
  setHyperdriveRating(HyperdriveRating) {
    this.hyperdriveRating = HyperdriveRating;
  }

  getHyperdriveRating() {
    return this.hyperdriveRating;
  }
  setLength(Length) {
    this.length = Length;
  }

  getLength() {
    return this.length;
  }
  setManufacturer(Manufacturer) {
    this.manufacturer = Manufacturer;
  }

  getManufacturer() {
    return this.manufacturer;
  }
  setMaxAtmospheringSpeed(MaxAtmospheringSpeed) {
    this.maxAtmospheringSpeed = MaxAtmospheringSpeed;
  }

  getMaxAtmospheringSpeed() {
    return this.maxAtmospheringSpeed;
  }
  setModel(Model) {
    this.model = Model;
  }

  getModel() {
    return this.model;
  }
  setName(Name) {
    this.name = Name;
  }

  getName() {
    return this.name;
  }
  setPassengers(Passengers) {
    this.passengers = Passengers;
  }

  getPassengers() {
    return this.passengers;
  }
  setFilms(Films) {
    this.films = Films;
  }

  getFilms() {
    return this.films;
  }
  setPilots(Pilots) {
    this.pilots = Pilots;
  }

  getPilots() {
    return this.pilots;
  }
  setStarshipClass(StarshipClass) {
    this.starshipClass = StarshipClass;
  }

  getStarshipClass() {
    return this.starshipClass;
  }
  setUrl(Url) {
    this.url = Url;
  }

  getUrl() {
    return this.url;
  }
}

export default Starships;
