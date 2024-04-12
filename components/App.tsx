"use client";
import { useEffect, useState } from "react";
import { fetchData } from "../utils/services/userData";

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
		<div>
			<h2>Data from Supabase</h2>
			<ul>
				{data.map((item: any) => (
					<li key={item.id}>{item.title}</li>
				))}
			</ul>
		</div>
	);
};

export default App;
