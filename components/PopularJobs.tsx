import React from "react";
import PopularJobCard from "./PopularJobCard";
import {
	PiCodeBlockThin,
	PiAndroidLogoThin,
	PiDatabaseThin,
	PiGraphThin,
	PiUserFocusThin,
	PiCodeLight,
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
					title={"Website Developer"}
					logo={PiCodeBlockThin}
					count={23}
				/>
				<PopularJobCard
					title={"Android Developer"}
					logo={PiAndroidLogoThin}
					count={12}
				/>
				<PopularJobCard
					title={"Database Developer"}
					logo={PiDatabaseThin}
					count={43}
				/>
				<PopularJobCard title={"Data Analyst"} logo={PiGraphThin} count={14} />
				<PopularJobCard
					title={"Software General"}
					logo={PiCodeLight}
					count={16}
				/>
				<PopularJobCard
					title={"Manager Profile"}
					logo={PiUserFocusThin}
					count={11}
				/>
			</div>
			<Separator />
		</div>
	);
};

export default PopularJobs;
