import React from "react";
import Jumbotron from "../Jumbotron";
import PopularJobs from "../PopularJobs";
const HomeComp: React.FC = () => {
	return (
		<div className="h-full w-full flex flex-col">
			<Jumbotron />
			<PopularJobs />
		</div>
	);
};

export default HomeComp;
