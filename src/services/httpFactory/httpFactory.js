import Axios from 'axios';

import PeopleManager from '../PeopleManager';

const BASE_URL = 'https://swapi.dev/api';

export default class httpFactory {
  static async getPeople() {
    return Axios.get(`${BASE_URL}/people`)
      .then((res) => {
        let people = new PeopleManager();
        people.setPeopleList(res.data.results);
        // console.log(people.getPeopleList());
        return people;
      })
      .catch((err) => err);
  }

  static async getStarships() {
    return Axios.get(`${BASE_URL}/starships`)
      .then((res) => console.log(JSON.stringify(res, null, 2)))
      .catch((err) => err);
  }

  static async getFilms() {
    return Axios.get(`${BASE_URL}/films`)
      .then((res) => console.log(JSON.stringify(res, null, 2)))
      .catch((err) => err);
  }

  static async getVehicles() {
    return Axios.get(`${BASE_URL}/vehicles`)
      .then((res) => console.log(JSON.stringify(res, null, 2)))
      .catch((err) => err);
  }

  static async getSpecies() {
    return Axios.get(`${BASE_URL}/species`)
      .then((res) => console.log(JSON.stringify(res, null, 2)))
      .catch((err) => err);
  }

  static async getPlanets() {
    return Axios.get(`${BASE_URL}/planets`)
      .then((res) => console.log(JSON.stringify(res, null, 2)))
      .catch((err) => err);
  }
}
