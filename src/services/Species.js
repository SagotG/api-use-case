class Species {
  constructor(
    averageHeight,
    averageLifespan,
    classification,
    created,
    designation,
    edited,
    eyeColors,
    hairColors,
    homeworld,
    language,
    name,
    people,
    films,
    skinColors,
    url
  ) {
    this.averageHeight = averageHeight;
    this.averageLifespan = averageLifespan;
    this.classification = classification;
    this.created = created;
    this.designation = designation;
    this.edited = edited;
    this.eyeColors = eyeColors;
    this.hairColors = hairColors;
    this.homeworld = homeworld;
    this.language = language;
    this.name = name;
    this.people = people;
    this.films = films;
    this.skinColors = skinColors;
    this.url = url;
  }

  setAverageHeight(averageHeight) {
    this.averageHeight = averageHeight;
  }

  getAverageHeight() {
    return this.averageHeight;
  }

  setAverageLifespan(averageLifespan) {
    this.averageLifespan = averageLifespan;
  }

  getAverageLifespan() {
    return this.averageLifespan;
  }

  setClassification(classification) {
    this.classification = classification;
  }

  getClassification() {
    return this.classification;
  }

  setCreated(created) {
    this.created = created;
  }

  getCreated() {
    return this.created;
  }

  setDesignation(designation) {
    this.designation = designation;
  }

  getDesignation() {
    return this.designation;
  }

  setEdited(edited) {
    this.edited = edited;
  }

  getEdited() {
    return this.edited;
  }

  setEyeColors(eyeColors) {
    this.eyeColors = eyeColors;
  }

  getEyeColors() {
    return this.eyeColors;
  }

  setHairColors(hairColors) {
    this.hairColors = hairColors;
  }

  getHairColors() {
    return this.hairColors;
  }

  setHomeworld(homeworld) {
    this.homeworld = homeworld;
  }

  getHomeworld() {
    return this.homeworld;
  }

  setLanguage(language) {
    this.language = language;
  }

  getLanguage() {
    return this.language;
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setPeople(people) {
    this.people = people;
  }

  getPeople() {
    return this.people;
  }

  setFilms(films) {
    this.films = films;
  }

  getFilms() {
    return this.films;
  }

  setSkinColors(skinColors) {
    this.skinColors = skinColors;
  }

  getSkinColors() {
    return this.skinColors;
  }

  setUrl(url) {
    this.url = url;
  }

  getUrl() {
    return this.url;
  }
}
