// Importing modules
import React, { useState, useEffect } from "react";
import "./App.scss";
import Layout from "./components/Layout/Layout";
import { Routes, BrowserRouter, Route } from 'react-router-dom';

function App() {
	return (
		<>
			<BrowserRouter>
        		<Routes>
					<Route path="/" element={<Layout />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App;
