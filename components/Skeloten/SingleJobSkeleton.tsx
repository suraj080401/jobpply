import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const SingleJobSkeleton = () => {
	return (
		<div>
			<Skeleton className="bg-mydarkblue bg-opacity-10 w-full h-36 mb-16" />
			<Skeleton className="bg-mydarkblue bg-opacity-10 w-full h-96 mb-16" />
		</div>
	);
};

export default SingleJobSkeleton;
