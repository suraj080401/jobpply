import React from "react";
import Jumbotron from "../Jumbotron";
import PopularJobs from "../PopularJobs";
import TopJobsComp from "../TopJobsComp";
import HackathonsList from "../HackathonsList";
import BussinesNumbers from "../BussinesNumbers";
import Services from "../Services";
import RecruiterNotice from "../RecruiterNotice";

const HomeComp: React.FC = () => {
	return (
		<div className="h-full w-full flex flex-col">
			<Jumbotron />
			<PopularJobs />
			<TopJobsComp />
			<HackathonsList />
			<Services />
			<RecruiterNotice />
			<BussinesNumbers />
		</div>
	);
};

export default HomeComp;
