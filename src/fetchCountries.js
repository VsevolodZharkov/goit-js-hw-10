const fetchCountries = name => {
  return fetch(
    `https://restcountries.com/v2/name/${name}?name.official,capital,population,languages,flags.svg`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => console.log(error));
};

export { fetchCountries };
