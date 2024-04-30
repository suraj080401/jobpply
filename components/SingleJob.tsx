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

	return <div>{data.role}</div>;
};

export default SingleJob;
