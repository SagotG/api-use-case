import Axios from 'axios';

import PeopleManager from '../PeopleManager';
import StarshipsManger from '../Starships';
import FilmsManger from '../FilmsManager';
import VehiclesManger from '../VehiclesManager';
import SpeciesManger from '../SpeciesManager';
import PlanetsManger from '../PlanetsManager';

const BASE_URL = 'https://swapi.dev/api';

export default class httpFactory {
  static async getPeople() {
    return Axios.get(`${BASE_URL}/people`)
      .then((res) => {
        let people = new PeopleManager();
        people.setPeopleList(res.data.results);
        return people;
      })
      .catch((err) => err);
  }

  static async getPeopleFromId(url) {
    return Axios.get(url)
      .then((res) => {
        let people = new PeopleManager();
        people.setPeopleList(res.data.results);
        return people;
      })
      .catch((err) => err);
  }

  static async getStarships() {
    return Axios.get(`${BASE_URL}/starships`)
      .then((res) => {
        let starships = new StarshipsManger();
        starships.setStarsphipsList(res.data.results);
        return starships;
      })
      .catch((err) => err);
  }

  static async getStarshipsFromId(url) {
    return Axios.get(url)
      .then((res) => {
        let starships = new StarshipsManger();
        starships.setStarsphipsList(res.data.results);
        return starships;
      })
      .catch((err) => err);
  }

  static async getFilms() {
    return Axios.get(`${BASE_URL}/films`)
      .then((res) => {
        let films = new FilmsManger();
        films.setFilmsList(res.data.results);
        return films;
      })
      .catch((err) => err);
  }

  static async getFilmsFromId(url) {
    return Axios.get(url)
      .then((res) => {
        let films = new FilmsManger();
        films.setFilmsList(res.data.results);
        return films;
      })
      .catch((err) => err);
  }

  static async getVehicles() {
    return Axios.get(`${BASE_URL}/vehicles`)
      .then((res) => {
        let vehicles = new VehiclesManger();
        vehicles.setVehiclesList(res.data.results);
        return vehicles;
      })
      .catch((err) => err);
  }

  static async getVehiclesFromId(url) {
    return Axios.get(url)
      .then((res) => {
        let vehicles = new VehiclesManger();
        vehicles.setVehiclesList(res.data.results);
        return vehicles;
      })
      .catch((err) => err);
  }

  static async getSpecies() {
    return Axios.get(`${BASE_URL}/species`)
      .then((res) => {
        let species = new SpeciesManger();
        species.setPeopleList(res.data.results);
        return species;
      })
      .catch((err) => err);
  }

  static async getSpeciesFromId(url) {
    return Axios.get(url)
      .then((res) => {
        let species = new SpeciesManger();
        species.setPeopleList(res.data.results);
        return species;
      })
      .catch((err) => err);
  }

  static async getPlanets() {
    return Axios.get(`${BASE_URL}/planets`)
      .then((res) => {
        let planets = new PlanetsManger();
        planets.setPlanetsList(res.data.results);
        return planets;
      })
      .catch((err) => err);
  }

  static async getPlanetsFromId(url) {
    return Axios.get(url)
      .then((res) => {
        let planets = new PlanetsManger();
        planets.setPlanetsList(res.data.results);
        return planets;
      })
      .catch((err) => err);
  }
}
