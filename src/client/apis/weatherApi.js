export async function weatherData(city) {
	const url = "https://api.weatherbit.io/v2.0/forecast/daily?" + `city=${city}&key=b3432a956d7b45a18ba374d67c837a2e`;
	try {
		const res = await fetch(url);
		const data = await res.json();
		return data;
	} catch (error) {
		console.log(error);
	}
}
