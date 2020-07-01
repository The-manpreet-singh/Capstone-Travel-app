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

const daysRemainForTrip = (startDate, date) => {
	const difference = new Date(date).getTime() - new Date(startDate).getTime();
	return Math.ceil(difference / 86400000);
};

const recentTrip = (tripPlaner) => {
  
  const tripDeparture = dateFormat(tripPlaner.start);
  const tripReturn = dateFormat(tripPlaner.end);
  const difference = daysRemainForTrip(new Date(), tripPlaner.start);
  const weather = weatherForecastData(tripPlaner.weatherForecast, difference, tripDeparture);

  const div = document.createElement('div');
   div.classList.add('save-trip');
  document.querySelector('.trips-container').appendChild(div);

  div.innerHTML = `
   <div class="row">
  <div class="col-sm-6 col-md-8">
      <div class="card">
          <div class="row">
              <div class="col-md-6">
                  <img src="${tripPlaner.image}" class="card-img-top" alt="...">
                 </div>
                 <div class="col-md-6">
                  <div class="card-body">
                      <h5 class="card-title">My Trip to: <span style="color:#02b3e4 ">${tripPlaner.city}, ${tripPlaner.country} </span></h5>
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">Departing: <span style="color:crimson"> ${tripDeparture}</span></li>
                      <li class="list-group-item">Return:<span style="color:crimson"> ${tripReturn}</span></li>
                      <li class="list-group-item">${tripPlaner.city}, ${tripPlaner.country} trip <span style="color:crimson"> ${daysRemainForTrip(new Date(), tripPlaner.start)}</span> days aways </li>
                      <li class="list-group-item">Typical Weather temperature is <span style="color:crimson">${weather.temperature}&deg;F</span></li>
                      <li class="list-group-item">weather forecate:  <span style="color:crimson">${weather.summary}</span> </li>
                    </ul>
                 </div>
          </div>
        </div>
  </div>
</div> `
  ;
}


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

//for save trip
document.getElementById("save-trips").addEventListener("click", saveTrips);
