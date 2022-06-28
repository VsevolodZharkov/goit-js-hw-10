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
const ul = document.querySelector('.country-list');
const divInfo = document.querySelector('.country-info');

input.addEventListener('input', debounce(inputHandler, DEBOUNCE_DELAY));

function inputHandler(e) {
	e.preventDefault();
	divInfo.innerHTML = '';
  const valueINp = e.target.value;
	let elem = valueINp.trim();
	fetchCountries(elem);
}
