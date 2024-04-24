import React from "react";
import Jumbotron from "../Jumbotron";
import PopularJobs from "../PopularJobs";
import TopJobsComp from "../TopJobsComp";
import HackathonsList from "../HackathonsList";
import BussinesNumbers from "../BussinesNumbers";
import Services from "../Services";

const HomeComp: React.FC = () => {
	return (
		<div className="h-full w-full flex flex-col">
			<Jumbotron />
			<PopularJobs />
			<TopJobsComp />
			<HackathonsList />
			<div className="flex flex-col my-8">
				<Services />
				<BussinesNumbers />
			</div>
		</div>
	);
};

export default HomeComp;
