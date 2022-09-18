import React, { useEffect, useMemo, useState } from "react";
import Inputs from "./components/Inputs";
import TimeLocation from "./components/TimeLocation";
import TemandDetails from "./components/TemandDetails";

const Main = () => {
	const [query, setQuery] = useState("");
	const [units, setUnits] = useState("imperial");
	const [data, setData] = useState("");

	const checkUrl = (query) => {
		let url = "";
		if (query.lat && query.lon) {
			url = `${process.env.REACT_APP_API_URL}/weather?lat=${query.lat}&lon=${query.lon}&units=${units}&APPID=${process.env.REACT_APP_API_KEY}`;
		} else {
			url = `${process.env.REACT_APP_API_URL}/weather?q=${query}&units=${units}&APPID=${process.env.REACT_APP_API_KEY}`;
		}

		return url;
	};

	const showbg = () => {
		let threshold = "";
		if (!data.name) return "from-cyan-700 to-blue-700";
		threshold = units == "metric" ? 15 : 60;
		if (data.main.temp <= threshold) return "from-cyan-700 to-blue-700";
		else return "from-yellow-700 to-orange-700";
	};
	useEffect(() => {
		const fetchdata = async () => {
			await fetch(checkUrl(query))
				.then((res) => res.json())
				.then((result) => {
					setData(result);
				});
		};
		fetchdata();
	}, [query, units]);
	return (
		<div
			className={`mx-auto max-w-screen-md  mt-20 py-5 px-32 bg-gradient-to-br  h-fit shadow-sm shadow-gray-400 bg-gradient-to-r ${showbg()} `}
		>
			<Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
			{data.name && (
				<>
					<TimeLocation
						secs={data.dt}
						timezone={data.timezone}
						name={data.name}
						country={data.sys.country}
					/>
					<TemandDetails weather={data} />
				</>
			)}
		</div>
	);
};

export default Main;
