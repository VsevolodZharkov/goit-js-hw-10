import Notiflix from 'notiflix';
import { renderMarcup } from './renderMarcup';
import { renderList } from './renderListInput';

const ul = document.querySelector('.country-list');
const fetchCountries = (name) => {
  return fetch(`https://restcountries.com/v2/name/${name}?name.official,capital,population,languages,flags.svg`)
    .then(response => {
      if (!response.ok) {
				Notiflix.Notify.failure('Oops, there is no country with that name');
				throw new Error(response.status);
      }
      return response.json();
    })
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
				if(data.length === 1 ) {
					ul.innerHTML = '';
					const elem = data[0];
					renderMarcup(elem);
				}
      }
    }).catch(error => console.log(error));
};

export {fetchCountries};