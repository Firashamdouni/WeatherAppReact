import React from "react";
import { formatToLocalTime } from "../service/weatherService";
function TimeLocation({ secs, timezone, name, country }) {
    return (
		<div className="flex flex-col text-center my-10">
			<div className="text-white text-xl  font-extralight">
				{formatToLocalTime(secs, timezone)}
			</div>
			<div className="text-white text-3xl pt-6  font-medium">
				{`${name}, ${country}`}
			</div>
		</div>
	);
}

export default TimeLocation;
