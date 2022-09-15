import React, { useEffect, useMemo, useState } from "react";
import { Input } from "semantic-ui-react";
import { useInput } from "./hooks/useInput";
import WeatherUi from "./modules/weatherUI";
const Main = () => {
	const [location, setLocation] = useInput("");
	const [data, setData] = useState([]);
	const url = `${process.env.REACT_APP_API_URL}/weather?q=${location.value}&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`;
	console.log(data);
	useEffect(() => {
		const fetchdata = async () => {
			await fetch(url)
				.then((res) => res.json())
				.then((result) => {
					setData(result);
					console.log(result);
				});
		};
		fetchdata();
		// setData({
		// 	coord: { lon: 2.3488, lat: 48.8534 },
		// 	weather: [
		// 		{ id: 803, main: "Clouds", description: "broken clouds", icon: "04d" },
		// 	],
		// 	base: "stations",
		// 	main: {
		// 		temp: 30.86,
		// 		feels_like: 70.43,
		// 		temp_min: 68.22,
		// 		temp_max: 73.78,
		// 		pressure: 1011,
		// 		humidity: 59,
		// 	},
		// 	visibility: 10000,
		// 	wind: { speed: 4.61, deg: 310 },
		// 	clouds: { all: 75 },
		// 	dt: 1663244639,
		// 	sys: {
		// 		type: 2,
		// 		id: 2041230,
		// 		country: "FR",
		// 		sunrise: 1663219617,
		// 		sunset: 1663265104,
		// 	},
		// 	timezone: 7200,
		// 	id: 2988507,
		// 	name: "Paris",
		// 	cod: 200,
		// });
	}, [location.value]);

	return (
		<div className="App">
			<Input {...location} type="text" placeholder="Entrer le pays ... " />
			{typeof data.main != "undefined" ? (
				<WeatherUi weatherData={data} />
			) : (
				<div> no valid data !</div>
			)}
		</div>
	);
};

export default Main;
