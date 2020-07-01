import { weatherData } from "./../apis/weatherApi";

describe("Test:function 'getWeatherForecast()'", () => {
	test("Its defined", () => {
		expect(weatherData).toBeDefined();
	});

	test("It is a function", () => {
		expect(typeof weatherData).toBe("function");
	});
});
