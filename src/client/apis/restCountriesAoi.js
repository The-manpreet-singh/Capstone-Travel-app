const countryData = async function (countryCode) {
	const url = `https://restcountries.eu/rest/v2/alpha/${countryCode}`;
	try {
		const res = await fetch(url);
		const data = await res.json();
		return {
			name: data.name,
		};
	} catch (error) {
		console.log(error);
	}
};
export { countryData };
