

const renderList = countrys => {
	const ul = document.querySelector('.country-list');
	const markup = countrys
    .map((country) => {
      return `
          <li>
						<img class="country" src="${country.flags.svg}" alt="country">
						<h2>${country.name}</h2>
          </li>
      `;
    })
    .join("");
		ul.innerHTML = markup;
}
export { renderList };