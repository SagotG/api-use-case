class Films {
  constructor(
    characters,
    created,
    director,
    edited,
    episodeId,
    openingCrawl,
    planets,
    producer,
    releaseDate,
    species,
    starships,
    title,
    url,
    vehicles
  ) {
    this.characters = characters;
    this.created = created;
    this.director = director;
    this.edited = edited;
    this.episode_id = episodeId;
    this.openingCrawl = openingCrawl;
    this.planets = planets;
    this.producer = producer;
    this.releaseDate = releaseDate;
    this.species = species;
    this.starships = starships;
    this.title = title;
    this.url = url;
    this.vehicles = vehicles;
  }
  setCharacters(characters) {
    this.characters = characters;
  }
  setCreated(created) {
    this.created = created;
  }
  setDirector(director) {
    this.director = director;
  }
  setEdited(edited) {
    this.edited = edited;
  }
  setEpisodeId(episode_id) {
    this.episode_id = episode_id;
  }
  setOpeningCrawl(openingCrawl) {
    this.openingCrawl = openingCrawl;
  }
  setPlanets(planets) {
    this.planets = planets;
  }
  setProducer(producer) {
    this.producer = producer;
  }
  setReleaseDate(releaseDate) {
    this.releaseDate = releaseDate;
  }
  setSpecies(species) {
    this.species = species;
  }
  setStarships(starships) {
    this.starships = starships;
  }
  setTitle(title) {
    this.title = title;
  }
  setUrl(url) {
    this.url = url;
  }
  setVehicles(vehicles) {
    this.vehicles = vehicles;
  }

  getCharacters() {
    return this.characters;
  }
  getCreated() {
    return this.created;
  }
  getDirector() {
    return this.director;
  }
  getEdited() {
    return this.edited;
  }
  getEpisodeId() {
    return this.episodeId;
  }
  getOpeningCrawl() {
    return this.openingCrawl;
  }
  getPlanets() {
    return this.planets;
  }
  getProducer() {
    return this.producer;
  }
  getReleaseDate() {
    return this.releaseDate;
  }
  getSpecies() {
    return this.species;
  }
  getStarships() {
    return this.starships;
  }
  getTitle() {
    return this.title;
  }
  getUrl() {
    return this.url;
  }
  getVehicles() {
    return this.vehicles;
  }
}
