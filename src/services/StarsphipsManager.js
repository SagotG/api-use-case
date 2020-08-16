import Starsphips from './Starsphips';

export default class StarsphipsManager {
  constructor() {
    this.listOfStarsphips = [];
  }

  setStarsphipsList(list) {
    list.map((elem, i) => {
      let starsphips = new Starsphips(
        elem.MGLT,
        elem.cargo_capacity,
        elem.consumables,
        elem.costIn_credits,
        elem.created,
        elem.crew,
        elem.edited,
        elem.hyperdrive_rating,
        elem.length,
        elem.manufacturer,
        elem.max_atmosphering_speed,
        elem.model,
        elem.name,
        elem.passengers,
        elem.films,
        elem.pilots,
        elem.starship_slass,
        elem.url
      );
      this.listOfStarsphips.push(starsphips);
      return this.listOfStarsphips;
    });
  }

  getStarsphipsList() {
    return this.listOfStarsphips;
  }
}
