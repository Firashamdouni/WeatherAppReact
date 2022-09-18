import React from "react";
import {
	formatTempDetailsWeather,
	iconFormatFromCode,
} from "../service/weatherService";
import { UilTemperatureHalf, UilTear, UilWind } from "@iconscout/react-unicons";
function TemandDetails({ weather }) {
	const {
		details,
		icon,
		temp,
		temp_min,
		temp_max,
		sunrise,
		sunset,
		speed,
		humidity,
		feels_like,
		timezone,
	} = formatTempDetailsWeather(weather);

	return (
		<div className="flex flex-col justify-center items-center my-10">
			<div className="text-cyan-200  mb-5	 text-xl ">
				<p>{details}</p>
			</div>

			<div className="flex w-full justify-between items-center text-white  ">
				<div className="">
					<img src={iconFormatFromCode(icon)} alt={icon} className="w-20" />
				</div>
				<div className="text-3xl">{`${temp.toFixed()}°`}</div>
				<div className="flex flex-col justify-center text-sm">
					<div className="flex justify-between items-center py-1">
						<span className="flex justify-between items-center  capitalize">
							<UilTemperatureHalf size={15} /> <p>feels_like</p>
						</span>
						<p className="pl-3">{`${feels_like.toFixed()}°`}</p>
					</div>
					<div className="flex justify-between items-center py-1">
						<span className="flex justify-between items-center capitalize">
							<UilTear size={15} /> <p>humidity</p>
						</span>
						<p className="pl-3">{`${humidity.toFixed()}°`}</p>
					</div>
					<div className="flex justify-between items-center py-1">
						<span className="flex justify-between items-center capitalize">
							<UilWind size={15} /> <p>wind</p>
						</span>
						<p className="pl-3">{`${speed.toFixed()}°`}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TemandDetails;
