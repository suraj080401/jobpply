import React from "react";
import PopularJobCard from "./PopularJobCard";
import {
	PiCodeBlockThin,
	PiGraphThin,
	PiUserFocusThin,
	PiPresentationChartThin,
	PiAndroidLogoThin,
	PiCloudCheckLight,
} from "react-icons/pi";
import { Separator } from "./ui/separator";

const PopularJobs: React.FC = () => {
	return (
		<div className="flex flex-col md:p-16 py-12 px-8  md:space-y-16 space-y-8">
			<Separator />
			<div className="flex flex-col space-y-4">
				<div className="text-center">
					<p className="md:text-3xl text-xl">Popular Job Categories</p>
				</div>
				<div className="text-center">
					<p className="text-xs text-gray-500">
						2072 jobs live - 293 added today.
					</p>
				</div>
			</div>
			<div className="grid md:grid-cols-2 grid-cols-2 lg:grid-cols-3 grid-flow-row md:gap-8 gap-2">
				<PopularJobCard
					title={"Frontend Developer"}
					logo={PiCodeBlockThin}
					count={23}
					keyvalue="fd"
				/>
				<PopularJobCard
					title={"Backend Developer"}
					logo={PiCloudCheckLight}
					count={12}
					keyvalue="bd"
				/>
				<PopularJobCard
					title={"Fullstack Developer"}
					logo={PiPresentationChartThin}
					count={43}
					keyvalue="fsd"
				/>
				<PopularJobCard
					title={"Application Developer"}
					logo={PiAndroidLogoThin}
					count={16}
					keyvalue="ad"
				/>
				<PopularJobCard
					title={"Software Engineer"}
					logo={PiGraphThin}
					count={14}
					keyvalue="se"
				/>
				<PopularJobCard
					title={"Data Science"}
					logo={PiUserFocusThin}
					count={11}
					keyvalue="ds"
				/>
			</div>
			<Separator />
		</div>
	);
};

export default PopularJobs;
