// Importing modules
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
	// usestate for setting a javascript
	// object for storing and using data
	const [homePage, setdata] = useState({
		name: "",
		age: 0,
		date: "",
		programming: "",
	});

	// Using useEffect for single rendering
	useEffect(() => {
		// Using fetch to fetch the api from
		// flask server it will be redirected to proxy
		fetch("/data").then((res) =>
			res.json().then((homePage) => {
				// Setting a data from api
				setdata({
					name: homePage.Name,
					age: homePage.Age,
					date: homePage.Date,
					programming: homePage.programming,
				});
			})
		);
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<h1>My portfolio !</h1>
				{/* Calling a data from setdata for showing */}
				<p>{homePage.name}</p>
				<p>{homePage.age}</p>
				<p>{homePage.date}</p>
				<p>{homePage.programming}</p>

			</header>
		</div>
	);
}

export default App;
