

export default function renderList(countrys) {
	const ul = document.querySelector('.country-list');
	console.log(countrys);
	const markup = countrys
    .map((country) => {
      return `
          <li>
						<img class="country" src="${country.flags.svg}" alt="country">
						<h2>${country.name.official}</h2>
          </li>
      `;
    })
    .join("");
		ul.innerHTML = markup;
}
