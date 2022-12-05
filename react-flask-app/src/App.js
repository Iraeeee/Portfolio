// Importing modules
import React, { useState, useEffect } from "react";
import "./App.scss";
import Layout from "./components/Layout/Layout";
import { Routes, BrowserRouter, Route } from 'react-router-dom';

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
			<BrowserRouter>
        		<Routes>
					<header className="App-header">
						<Route path="/" element={<Layout />} />
						<h1>My portfolio !</h1>
						<p>{homePage.name}</p>
						<p>{homePage.age}</p>
						<p>{homePage.date}</p>
						<p>{homePage.programming}</p>

					</header>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
