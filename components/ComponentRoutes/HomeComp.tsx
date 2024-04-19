import React from "react";
import Jumbotron from "../Jumbotron";
import PopularJobs from "../PopularJobs";
import TopJobsComp from "../TopJobsComp";
import { Separator } from "../ui/separator";
const HomeComp: React.FC = () => {
	return (
		<div className="h-full w-full flex flex-col">
			<Jumbotron />
			<PopularJobs />
			<TopJobsComp />
		</div>
	);
};

export default HomeComp;
