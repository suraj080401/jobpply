"use client";
import React from "react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "./ui/carousel";
import TopJobCard from "./TopJobCard";
import { Separator } from "./ui/separator";
import { fetchTopJobData } from "@/utils/services/supabaseData";
import { useQuery } from "@tanstack/react-query";
import TopJobSkeleton from "./Skeloten/SkeletonContainer";

const TopJobsComp: React.FC = () => {
	const fetchTopJobs = async () => {
		try {
			const fetchedData = await fetchTopJobData();
			return fetchedData;
		} catch (error) {
			console.log(error);
		}
	};

	const { data, isError, isLoading, error } = useQuery({
		queryKey: ["topjobs"],
		queryFn: fetchTopJobs,
	});

	return (
		<div className="flex flex-col md:px-16 px-8 ">
			<div className="flex flex-col items-center md:px-16 px-8 md:space-y-16 space-y-8">
				<div className="flex flex-col space-y-4 ">
					<div className="text-center">
						<p className="md:text-3xl text-xl">Today's Top 10 Jobs</p>
					</div>
					<div className="text-center">
						<p className="text-xs text-gray-500">
							Dream jobs for you, know your worth.
						</p>
					</div>
				</div>
			</div>
			<div className="p-8">
				{isLoading ? (
					<TopJobSkeleton />
				) : (
					<Carousel className="w-full">
						<CarouselContent className="-ml-1">
							{data?.map((item, index) => (
								<CarouselItem
									key={index}
									className="pl-1 lg:basis-1/3 md:basis-1/2"
								>
									<TopJobCard data={item} />
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				)}
			</div>
			<Separator className="my-2" />
		</div>
	);
};

export default TopJobsComp;
