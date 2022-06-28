import Notiflix from 'notiflix';
import { renderMarcup } from './renderMarcup';
import { renderList } from './renderMarcup';

const fetchCountries = (name) => {
  return fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      console.log(data.length);
      console.log(data);

      if (data.length > 10) {
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
        return;
      }
      if (data.length >= 2 || data.length <= 10) {
        return renderList(data);
				
      }

			if(data.length === 1 ) {
				const elem = data[0];
				renderMarcup(elem);
			}
      
    });
};

export {fetchCountries};