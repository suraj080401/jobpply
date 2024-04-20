import React from "react";
import Jumbotron from "../Jumbotron";
import PopularJobs from "../PopularJobs";
import TopJobsComp from "../TopJobsComp";
import HackathonsList from "../HackathonsList";

const HomeComp: React.FC = () => {
	return (
		<div className="h-full w-full flex flex-col">
			<Jumbotron />
			<PopularJobs />
			<TopJobsComp />
			<HackathonsList />
		</div>
	);
};

export default HomeComp;
