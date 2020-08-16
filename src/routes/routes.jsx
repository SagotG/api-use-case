import {
  PeoplePage,
  FilmsPage,
  StarshipsPage,
  VehiclesPage,
  SpeciesPage,
  PlanetsPage,
  HomePage,
} from '../views';

const dashRoutes = [
  {
    path: '/home',
    name: 'Star Wars API',
    hidden: false,
    component: HomePage,
  },
  {
    path: '/films',
    name: 'Films',
    url:
      'https://www.offresasaisir.fr/mag/wp-content/uploads/2018/09/film-de-la-saga-star-wars.jpg',
    description: 'Discover the movies from the Star Wars univers',
    alt: 'Films',
    hidden: false,
    component: FilmsPage,
  },
  {
    path: '/people',
    name: 'People',
    url:
      'https://media.contentapi.ea.com/content/dam/eacom/en-us/migrated-images/2015/11/news-article-images-gah-hero-watermarked.jpg',
    description: 'Discover the characters from the Star Wars univers',
    alt: 'Characters',
    hidden: false,
    component: PeoplePage,
  },
  {
    path: '/planets',
    name: 'Planets',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/SHplanet.jpg',
    description: 'Discover the planets from the Star Wars univers',
    alt: 'Planets',
    hidden: false,
    component: PlanetsPage,
  },
  {
    path: '/species',
    hidden: false,
    url:
      'https://static.wikia.nocookie.net/51f23d68-fefb-4ac7-a19a-5c65fede8d05',
    alt: 'Star Wars species',
    description: 'Discover the species from the Star Wars univers',
    name: 'Species',
    component: SpeciesPage,
  },
  {
    path: '/starships',
    name: 'Starships',
    url:
      'https://www.slashfilm.com/wp/wp-content/images/starwars-riseofskywalker-trailerbreakdown-resistancefleet.jpg',
    alt: 'Super Star Destroyer',
    description: 'Discover  the starships from the Star Wars univers',
    hidden: false,
    component: StarshipsPage,
  },

  {
    path: '/vehicles',
    name: 'Vehicles',
    url:
      'https://static.hitek.fr/img/actualite/2016/10/10/fb_csq8skmweaepfpa.jpg',
    description: 'RT-TT the clone wars',
    hidden: false,
    component: VehiclesPage,
  },
  {
    path: '/',
    pathTo: '/home',
    hidden: true,
    redirect: true,
  },
];

export default dashRoutes;
