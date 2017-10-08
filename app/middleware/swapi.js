import axios from 'axios';

const rootUrl =  'https://swapi.co/api/';

const singularRequestUrl = (path, id) => {
  return rootUrl + path + '/'+id+'/';
};

const pluralRequestUrl = (path, search) => {
  if (search) {
    return `${rootUrl}${path}/?search=${encodeURIComponent(search)}`;
  }
  return `${rootUrl}${path}/`;
};

export function getPerson(id) {
  return axios.get(singularRequestUrl('people', id)).then(x => {
    return x.data.results;
  });
}

export function getPeople(search) {
  return axios.get(pluralRequestUrl('people', search)).then(x => {
    return x.data.results;
  });
}

export function getPlant(id) {
  return axios.get(singularRequestUrl('planets', id)).then(x => {
    return x.data.results;
  });
}

export function getPlants(search) {
  return axios.get(pluralRequestUrl('planets', search)).then(x => {
    return x.data.results;
  });
}
