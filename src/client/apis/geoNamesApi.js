const geoData = async function (city) {
	const dataUrl =
		"https://secure.geonames.org/" + "searchJSON?formatted=true&q=" + city + "&username=manpreetsingh&style=full";
	try {
		const res = await fetch(dataUrl);
		const city = {};
		const data = await res.json();
		city.countryCode = data.geonames[0].countryCode;
		console.log(city);
		return city;
	} catch (error) {
		console.log(error);
	}
};

export { geoData };
