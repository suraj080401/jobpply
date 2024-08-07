"use client";
import { useEffect, useState } from "react";
import { fetchData } from "../utils/services/supabaseData";
import Home from "./componentroutes/HomeComp";

const App = () => {
	const [data, setData] = useState<any[]>([]);

	useEffect(() => {
		const fetchDataFromService = async () => {
			try {
				const fetchedData = await fetchData();
				setData(fetchedData);
			} catch (error) {
				console.log(error);
			}
		};
		fetchDataFromService();
	}, []);

	return (
		<div className="h-full">
			<Home />
		</div>
	);
};

export default App;
