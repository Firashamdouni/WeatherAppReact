import React from "react";
import ReactDOM from "react-dom";
import Main from "./app";
import "semantic-ui-css/semantic.min.css";
const App = () => {
	return <Main />;
};
ReactDOM.render(<App />, document.querySelector("#root"));
