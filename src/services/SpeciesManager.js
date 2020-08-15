import Species from './Species';

export default class SpeciesManager {
  constructor() {
    this.listOfSpecies = [];
  }

  setSpeciesList(list) {
    list.map((elem, i) => {
      let species = new Species(
        elem.average_height,
        elem.average_lifespan,
        elem.classification,
        elem.created,
        elem.designation,
        elem.edited,
        elem.eye_colors,
        elem.hair_colors,
        elem.homeworld,
        elem.language,
        elem.name,
        elem.people,
        elem.films,
        elem.skin_colors,
        elem.url
      );
      this.listOfSpecies.push(species);
      return this.listOfSpecies;
    });
  }

  getSpeciesList() {
    return this.listOfSpecies;
  }
}
