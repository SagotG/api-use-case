import People from './People';

export default class PeopleManager {
  constructor() {
    this.listOfPeople = [];
  }

  setPeopleList(list) {
    list.map((elem, i) => {
      let people = new People(
        elem.name,
        elem.birth_year,
        elem.eye_color,
        elem.films,
        elem.gender,
        elem.hair_color,
        elem.height,
        elem.homeworld,
        elem.mass,
        elem.skin_color,
        elem.created,
        elem.edited,
        elem.species,
        elem.starships,
        elem.url,
        elem.vehicles
      );
      this.listOfPeople.push(people);
      return this.listOfPeople;
    });
  }

  getPeopleList() {
    return this.listOfPeople;
  }
}
