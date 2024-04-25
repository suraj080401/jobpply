import React from "react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "./ui/carousel";
import { topTenJobsData } from "@/utils/data";
import TopJobCard from "./TopJobCard";
import { Separator } from "./ui/separator";

const TopJobsComp: React.FC = () => {
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
				<Carousel className="w-full">
					<CarouselContent className="-ml-1">
						{topTenJobsData.map((item, index) => (
							<CarouselItem
								key={index}
								className="pl-1 lg:basis-1/3 md:basis-1/2"
							>
								<TopJobCard
									role={item.role}
									location={item.location}
									salary={item.salary}
									keywords={item.keywords}
									company={item.company}
									logoURL={item.logoURL}
								/>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
			<Separator className="my-2" />
		</div>
	);
};

export default TopJobsComp;
