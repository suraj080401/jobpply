import React from "react";
import { Jobs } from "@/utils/schema";

interface SingleJobProps {
	data: Jobs | undefined;
	isLoading: boolean;
	isError: boolean;
}

const SingleJob: React.FC<SingleJobProps> = ({ data, isLoading, isError }) => {
	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Loading...</div>;
	}

	if (!data) {
		return <div>Loading...</div>;
	}

	return (
		<div className="flex flex-row">
			<div className="flex flex-row space-x-4">
				<div>
					<img
						src={`${data.logo}`}
						className="w-full h-16 rounded-md"
						alt="logo"
					/>
				</div>
				<div className="flex flex-col space-y-1">
					<div className="text-xl">{data.role}</div>
					<div className="flex flex-row space-x-1">
						<div>{data.company}</div>
						<div>-</div>
						<div className="bg-mydarkblue bg-opacity-10 rounded-md px-1 text-mydarkblue">
							{data.location}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleJob;
