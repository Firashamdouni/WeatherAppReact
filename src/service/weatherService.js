import { DateTime } from "luxon";

const formatToLocalTime = (
	secs,
	zone,
	format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a",
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const formatTempDetailsWeather = (data) => {
	const {
		main: { temp, feels_like, temp_min, temp_max, humidity },
		wind: { speed },
	} = data;

	const { main: details, icon } = data.weather[0];

	return {
		temp,
		feels_like,
		temp_min,
		temp_max,
		humidity,
		speed,
		details,
		icon,
	};
};

const iconFormatFromCode = (code) =>
	`http://openweathermap.org/img/wn/${code}@2x.png`;

export { iconFormatFromCode, formatToLocalTime, formatTempDetailsWeather };
