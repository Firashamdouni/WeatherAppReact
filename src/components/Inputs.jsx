import { React, useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

function Inputs({ query, setQuery, units, setUnits }) {
	const [country, setCountry] = useState(query);

	const handleUnitClick = (event) => {
		const currentUnits = event.currentTarget.name;
		if (units !== currentUnits) {
			setUnits(currentUnits);
		}
	};

	const handleInputChange = (term) => {
		setQuery(term);
		setCountry(term);
	};

	const handleLocationClick = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				let lat = position.coords.latitude;
				let lon = position.coords.longitude;
				setQuery({
					lat,
					lon,
				});
				setCountry("");
			});
		}
	};

	return (
		<div className="flex justify-between space-x-4 my-6 ">
			<div className="flex w-3/4 items-center justify-center space-x-4">
				<input
					className="text-md font-light px-5 py-3 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
					placeholder="Search for anything..."
					type="text"
					name="search"
					value={country}
					onChange={(e) => handleInputChange(e.currentTarget.value)}
				/>
				<UilLocationPoint
					size="20"
					className="cursor-pointer transition-all hover:scale-125 ease-in-out "
					onClick={handleLocationClick}
				/>
			</div>
			<div className="flex w-1/4 items-center justify-end space-x-4">
				<button
					name="imperial"
					className="text-md text-white font-light transition-all hover:scale-125 ease-in-out"
					onClick={handleUnitClick}
				>
					°F
				</button>
				<span className="text-md text-white mx-1"> | </span>
				<button
					name="metric"
					className="text-md text-white font-light transition-all hover:scale-125 ease-in-out"
					onClick={handleUnitClick}
				>
					°C
				</button>
			</div>
		</div>
	);
}

export default Inputs;
