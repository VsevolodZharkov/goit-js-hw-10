import fetchCountries from './fetchCountries';
import './css/styles.css';
import { debounce } from "debounce";

const DEBOUNCE_DELAY = 800;
const input = document.querySelector('#search-box');
const ul = document.querySelector('.country-list');
const divInfo = document.querySelector('.country-info');

input.addEventListener('input', debounce(inputHandler, DEBOUNCE_DELAY));
function inputHandler(e) {
  const valueINp = e.target.value;
	console.log(fetchCountries);
	fetchCountries(valueINp);
}