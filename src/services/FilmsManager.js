import Planets from './Films';

export default class FilmsManager {
  constructor() {
    this.listOfFilms = [];
  }

  setFilmsList(list) {
    list.map((elem, i) => {
      let films = new Films(
        elem.characters,
        elem.created,
        elem.director,
        elem.edited,
        elem.episode_id,
        elem.opening_crawl,
        elem.planets,
        elem.producer,
        elem.release_date,
        elem.species,
        elem.starships,
        elem.title,
        elem.url,
        elem.vehicles
      );
      this.listOfFilms.push(films);
    });
  }

  getFilmsList() {
    return this.listOfFilms;
  }
}
