import { fetchCountries } from './fetchCountries';
import './css/styles.css';
import { debounce } from "debounce";

// const searchParams = new URLSearchParams({
//   name: name.official,
//   // capital: capital[0],
// 	// population,
// 	// flag: flags.svg,
// 	// languages: languages.value
// });
const DEBOUNCE_DELAY = 300;
const input = document.querySelector('#search-box');


input.addEventListener('input', debounce(inputHandler, DEBOUNCE_DELAY));

function inputHandler(e) {
	e.preventDefault()
  const valueINp = e.target.value;
	let elem = valueINp.trim();
	fetchCountries(elem);
}
