import { getPeople } from './swapi';

export function login(username, password) {
  // Actual api will goes here
  if (username && password) {
    return getPeople(username).then(x => {
      const person = x.find(res => res.name === username && res.birth_year === password);
      if (person) {
        return {
          username: person.name
        };
      }
      return {
        username: ''
      };
    });
  }
  return Promise.resolve(null);
}
