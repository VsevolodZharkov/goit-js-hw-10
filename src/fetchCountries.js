export default function fetchCountries(name) {
  return fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
			return fetch(`https://restcountries.com/v2/${data}?name=name.official,capital,population`)
			.then(resorse => console.log(resorse))
			.catch(error => console.log(error))
			// // https://restcountries.com/v2/all?=name,capital,currencies
			// console.log(data[0])
		})
    .catch(error => console.log(error));
}
