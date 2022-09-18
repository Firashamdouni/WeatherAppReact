import { Card, Header } from "semantic-ui-react";
import moment from "moment";

const WeatherUi = ({ weatherData }) => {
	return (
		<Card className="card-weather">
			<Card.Content className="display-flex-columnb ">
				<div className="main">
					<Card.Header className="header">
						<h1> {weatherData.name} </h1>
					</Card.Header>
					<div className="date display-flex-between">
						<div className=" display-flex-columnb">
							<p> {moment().format("dddd")}</p>
							<p>{moment().format("LL")}</p>
						</div>
						<div className="display-flex-center">
							{weatherData.main ? (
								<p>Temprature: {Math.floor(weatherData.main.temp)} &deg;C </p>
							) : null}
						</div>
					</div>
				</div>
				<div className="middle">
					{weatherData.weather ? (
						<h3> {weatherData.weather[0].description}</h3>
					) : null}
				</div>
				{weatherData.sys ? (
					<span className="display-flex-between">
						<p>
							Sunrise:{" "}
							{new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString(
								"en-IN",
							)}
						</p>
						<p>
							Sunset:{" "}
							{new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(
								"en-IN",
							)}
						</p>
					</span>
				) : null}
			</Card.Content>
		</Card>
	);
};

export default WeatherUi;
