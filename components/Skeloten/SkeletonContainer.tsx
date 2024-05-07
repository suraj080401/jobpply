import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const TopJobSkeleton = () => {
	return (
		<div className="w-full h-48">
			<Skeleton className="bg-mydarkblue bg-opacity-10 w-full h-48" />
		</div>
	);
};

export default TopJobSkeleton;
