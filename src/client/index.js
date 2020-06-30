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

const weatherForecastData = (weatherForecast, difference) => {
	const weather = {
		temperature: 0,
		summary: "",
	};

	weather.temperature = weatherForecast.data[difference].temp;
	weather.summary = weatherForecast.data[difference].weather.description;
	return weather;
};

const data = {};

const saveTrips = async (e) => {
	e.preventDefault();
	data.city = cityValue();
	const geocity = await geoData(data.city);
	data.countryCode = geocity.countryCode;
	const countryInfo = await countryData(data.countryCode);
	data.country = countryInfo.name;
	data.image = await imageData(data.city, data.country);
	data.start = depart();
	data.end = returnDate();
	data.weatherForecast = await weatherData(data.city, data.country);
	console.log(data);
	recentTrip(data);
};
