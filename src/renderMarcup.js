const renderMarcup = elem => {
  console.log(elem);
  let langMas = [];
  const { name, capital, population, languages, flags } = elem;
  const divInfo = document.querySelector('.country-info');
  const a = Object.values(languages);
  if (languages.length > 1) {
    a.forEach(item => langMas.push(item.name));
  } else {
    langMas.push(a[0].name);
  }

  const markup = `
			<div>
			<img class="country" src="${flags.svg}" alt="country">
			<h2>${name}</h2>
			<p><span class="big">Capital: </span>${capital}</p>
			<p><span class="big">Population: </span>${population}</p>
			<p><span class="big">Languages: </span>${langMas}</p>
		</div>`;
  divInfo.innerHTML = markup;
};
export { renderMarcup };
