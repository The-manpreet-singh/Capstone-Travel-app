import "./styles/style.scss";

import { geoData, imageData, weatherData, countryData } from "./js/app";

const moment = require("moment");

const cityValue = () => {
	let city = document.getElementById("city").value;
	if (typeof city !== "string") return "";
	return city[0].toUpperCase() + city.slice(1);
};

const depart = () => {
	const date = document.getElementById("departure_date").value;
	console.log(date);
	return date;
};

const returnDate = () => {
	const date = document.getElementById("return_date").value;
	console.log(date);
	return date;
};

const dateFormat = (date) => {
	const dateFormat = moment(date).format("LL");
	return dateFormat;
};
