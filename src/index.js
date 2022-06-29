import { fetchCountries } from './fetchCountries';
import './css/styles.css';
import { debounce } from 'debounce';
import Notiflix from 'notiflix';
import { renderMarcup } from './renderMarcup';
import { renderList } from './renderListInput';

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
  fetchCountries(elem)
    .then(data => {
      // console.log(data.length);
      // console.log(data);
      if (data.length > 10) {
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
        return;
      }
      if (data.length >= 2 || data.length <= 10) {
        renderList(data);
        if (data.length === 1) {
          ul.innerHTML = '';
          const elem = data[0];
          renderMarcup(elem);
        }
      }
    })
    .catch(error => {
      console.log(error);
      Notiflix.Notify.failure('Oops, there is no country with that name');
    });
}
