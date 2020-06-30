import "./styles/style.scss";

import { geoData, imageData, weatherData, countryData } from "./js/app";

console.log(geoData());

const cityValue = () => {
  let city = document.getElementById('city').value;
  if (typeof city !== 'string') return '';
  return city[0].toUpperCase() + city.slice(1);
}