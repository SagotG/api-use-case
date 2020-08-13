import Planets from './Planets';

export default class PlanetsManager {
  constructor() {
    this.listOfPlanets = [];
  }

  setPlanetsList(list) {
    list.map((elem, i) => {
      let planets = new Planets(
        elem.climate,
        elem.created,
        elem.diameter,
        elem.edited,
        elem.films,
        elem.gravity,
        elem.name,
        elem.orbital_period,
        elem.population,
        elem.residents,
        elem.rotation_period,
        elem.surface_water,
        elem.terrain,
        elem.url
      );
      this.listOfPlanets.push(planets);
    });
  }

  getPlanetsList() {
    return this.listOfPlanets;
  }
}
