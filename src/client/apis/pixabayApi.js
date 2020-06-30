const imageData = async function (city, country) {
	const cityUrl = `https://pixabay.com/api/?key=16912025-2badedd82e75bb1b12192e65c&q=${city}&image_type=photo&pretty=true&category=places`;
	const countryUrl = `https://pixabay.com/api/?key=16912025-2badedd82e75bb1b12192e65c&q=${country}&image_type=photo&pretty=true&category=places`;
	try {
		let res = await fetch(cityUrl);
		let cityData = await res.json();
		if (cityData.totalHits === 0) {
			res = await fetch(countryUrl);
			cityData = await res.json();
			return cityData.hits[0].largeImageURL;
		}
		return cityData.hits[0].largeImageURL;
	} catch (error) {
		console.log(error);
	}
};

export { imageData };
