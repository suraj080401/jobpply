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
import { useQuery } from "@tanstack/react-query";
import { fetchCategoryCounts } from "@/utils/services/supabaseData";
import TopJobSkeleton from "./Skeloten/SkeletonContainer";
import { Skeleton } from "./ui/skeleton";
import { memo } from "react";

const PopularJobs: React.FC = () => {
	const fetchCount = async () => {
		try {
			const data = await fetchCategoryCounts();
			console.log(data);
			return data;
		} catch (error) {
			console.log(error);
		}
	};

	const {
		data: counts,
		isError,
		isLoading,
		error,
	} = useQuery({
		queryKey: ["category-count"],
		queryFn: fetchCount,
	});

	return (
		<div className="flex flex-col md:p-16 py-12 px-8  md:space-y-16 space-y-8">
			<Separator />
			<div className="flex flex-col space-y-4 items-center">
				<div className="text-center">
					<p className="md:text-3xl text-xl">Popular Job Categories</p>
				</div>
				<div className="text-center">
					{isLoading ? (
						<Skeleton className="bg-mydarkblue bg-opacity-10 w-36 h-6" />
					) : (
						<p className="text-xs text-gray-500">
							{counts.total_count} jobs live - {counts.today_count} added today.
						</p>
					)}
				</div>
			</div>
			{isLoading ? (
				<TopJobSkeleton />
			) : (
				<div className="grid md:grid-cols-2 grid-cols-2 lg:grid-cols-3 grid-flow-row md:gap-8 gap-2">
					<PopularJobCard
						title={"Frontend Developer"}
						logo={PiCodeBlockThin}
						count={counts.category_counts.fd ? counts.category_counts.fd : 0}
						keyvalue="fd"
					/>
					<PopularJobCard
						title={"Backend Developer"}
						logo={PiCloudCheckLight}
						count={counts.category_counts.bd ? counts.category_counts.bd : 0}
						keyvalue="bd"
					/>
					<PopularJobCard
						title={"Fullstack Developer"}
						logo={PiPresentationChartThin}
						count={counts.category_counts.fsd ? counts.category_counts.fsd : 0}
						keyvalue="fsd"
					/>
					<PopularJobCard
						title={"Application Developer"}
						logo={PiAndroidLogoThin}
						count={counts.category_counts.ad ? counts.category_counts.ad : 0}
						keyvalue="ad"
					/>
					<PopularJobCard
						title={"Software Engineer"}
						logo={PiGraphThin}
						count={counts.category_counts.se ? counts.category_counts.se : 0}
						keyvalue="se"
					/>
					<PopularJobCard
						title={"Data Science"}
						logo={PiUserFocusThin}
						count={counts.category_counts.ds ? counts.category_counts.ds : 0}
						keyvalue="ds"
					/>
				</div>
			)}
			<Separator />
		</div>
	);
};

export default memo(PopularJobs);
