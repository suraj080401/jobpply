import React from "react";
import SelectorComp from "./SelectorComp";
import { allJobRoleData, allExperienceData } from "@/utils/data";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const Jumbotron: React.FC = () => {
	return (
		<div
			className="md:h-[700px] h-[600px] w-full md:p-16 p-6 bg-no-repeat md:bg-bottom bg-bottom flex flex-col items-center md:space-y-16 space-y-4"
			style={{ backgroundImage: `url('/landing.svg')` }}
		>
			<div className="flex flex-col space-y-4">
				<div>
					<p className="md:text-lg text-xs font-bold text-mydarkblue text-center">
						INDIA'S #1 DESTINATION FOR SOFTWARE ENGINEERS
					</p>
				</div>
				<div className="py-4">
					<p className="md:text-5xl text-xl text-gray-800 font-bold text-center">
						Discover Jobs, Hackathons, and Valuable Insights!
					</p>
				</div>
			</div>
			<div className="flex md:flex-row flex-col md:space-x-6 md:space-y-0 space-y-8 items-center bg-mydarkblue bg-opacity-20 md:p-6 p-6 rounded-xl">
				<SelectorComp data={allJobRoleData} placeholder="Select your role" />
				<SelectorComp
					data={allExperienceData}
					placeholder="Select your experience"
				/>
				<Button className="h-[42px] bg-mydarkblue hover:bg-transparent hover:text-black transition duration-200 delay-100 ease-in-out border hover:border-black border-mydarkblue">
					Search
				</Button>
			</div>
		</div>
	);
};

export default Jumbotron;
