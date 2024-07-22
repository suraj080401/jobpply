import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const TableSkeleton = () => {
	return (
		<div className="flex flex-col w-full space-y-8 px-8">
			<Skeleton className="bg-mydarkblue bg-opacity-10 w-full h-16" />
			<Skeleton className="bg-mydarkblue bg-opacity-10 w-full h-96" />
			<Skeleton className="bg-mydarkblue bg-opacity-10 w-full h-16" />
		</div>
	);
};

export default TableSkeleton;
