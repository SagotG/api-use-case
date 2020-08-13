export default class People {
  constructor(
    name,
    birthYear,
    eyeColor,
    films,
    gender,
    hairColor,
    height,
    homeworld,
    mass,
    skinColor,
    created,
    edited,
    species,
    starships,
    url,
    vehicles
  ) {
    this.name = name;
    this.birthYear = birthYear;
    this.eyeColor = eyeColor;
    this.films = [...films];
    this.gender = gender;
    this.hairColor = hairColor;
    this.height = height;
    this.homeworld = homeworld;
    this.mass = mass;
    this.skinColor = skinColor;
    this.created = created;
    this.edited = edited;
    this.species = [...species];
    this.starships = [...starships];
    this.url = url;
    this.vehicles = [...vehicles];
    console.log('A new hero is born : ', this.name);
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setBirthYear(birthYear) {
    this.birthYear = birthYear;
  }

  getBirthYear() {
    return this.birthYear;
  }

  setEyeColor(eyeColor) {
    this.eyeColor = eyeColor;
  }

  getEyeColor() {
    return this.eyeColor;
  }

  setFilms(films) {
    this.films = films;
  }

  getFilms() {
    return this.films;
  }

  setGender(gender) {
    this.gender = gender;
  }

  getGender() {
    return this.gender;
  }

  setHairColor(hairColor) {
    this.hairColor = hairColor;
  }

  getHairColor() {
    return this.hairColor;
  }

  setHeight(height) {
    this.height = height;
  }

  getHeight() {
    return this.height;
  }

  setHomeworld(homeworld) {
    this.homeworld = homeworld;
  }

  getHomeworld() {
    return this.homeworld;
  }

  setMass(mass) {
    this.mass = mass;
  }

  getMass() {
    return this.mass;
  }

  setSkinColor(skinColor) {
    this.skinColor = skinColor;
  }

  getSkinColor() {
    return this.skinColor;
  }

  setCreated(created) {
    this.created = created;
  }

  getCreated() {
    return this.created;
  }

  setEdited(edited) {
    this.edited = edited;
  }

  getEdited() {
    return this.edited;
  }

  setSpecies(species) {
    this.species = species;
  }

  getSpecies() {
    return this.species;
  }

  setStarships(starships) {
    this.starships = starships;
  }

  getStarships() {
    return this.starships;
  }

  setUrl(url) {
    this.url = url;
  }

  getUrl() {
    return this.url;
  }

  setVehicles(vehicles) {
    this.vehicles = vehicles;
  }

  getVehicles() {
    return this.vehicles;
  }
}
