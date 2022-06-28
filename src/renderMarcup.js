 const renderMarcup = (elem) => {
  // console.log(elem);
  const divInfo = document.querySelector('.country-info');
  const a = Object.values(elem.languages);
  const b = a[0];
  // console.log(elem.name.official);
  // console.log(elem.capital[0]);
  // console.log(elem.population);
  // console.log(elem.flags.svg);
  // console.log(b);
  const markup = `
			<div>
			<img class="country" src="${elem.flags.svg}" alt="country">
			<h2>${elem.name.official}</h2>
			<p><span class="big">Capital: </span>${elem.capital[0]}</p>
			<p><span class="big">Population: </span>${elem.population}</p>
			<p><span class="big">Languages: </span>${b}</p>
		</div>`;
  divInfo.innerHTML = markup;
}
export { renderMarcup };