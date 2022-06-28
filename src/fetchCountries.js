export default function fetchCountries(name) {
  return fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
			data
			.then(data => console.log(data))
			// // https://restcountries.com/v2/all?=name,capital,currencies
			// console.log(data[0])
		})
    .catch(error => console.log(error));
}