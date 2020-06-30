import "./styles/style.scss";

import { geoData, imageData, weatherData, countryData } from "./js/app";

console.log(geoData());

const cityValue = () => {
	let city = document.getElementById("city").value;
	if (typeof city !== "string") return "";
	return city[0].toUpperCase() + city.slice(1);
};

const depart = () => {
	const date = document.getElementById("departure_date").value;
	return date;
};

const returnDate = () => {
	const date = document.getElementById("return_date").value;
	return date;
};
