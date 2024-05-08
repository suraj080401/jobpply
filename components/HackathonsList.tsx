import React from "react";
import { hackathonListData } from "@/utils/data";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "./ui/carousel";
import { CiLocationOn } from "react-icons/ci";
import { TfiCup } from "react-icons/tfi";
import { Separator } from "./ui/separator";
import { memo } from "react";

const HackathonsList: React.FC = () => {
	return (
		<div className="flex flex-col md:px-16 px-8">
			<div className="flex flex-col items-center md:py-8 md:px-16 px-8 py-4 md:space-y-16 space-y-8">
				<div className="flex flex-col space-y-4 ">
					<div className="text-center">
						<p className="md:text-3xl text-xl">Join Trending Hackathons</p>
					</div>
					<div className="text-center">
						<p className="text-xs text-gray-500">
							Collaborate, Innovate, and Create at these Hackathons!
						</p>
					</div>
				</div>
			</div>
			<div className="px-8 py-2">
				<Carousel className="w-full ">
					<CarouselContent className="-ml-1">
						{hackathonListData.map((item, index) => (
							<CarouselItem
								key={index}
								className="pl-1 lg:basis-1/3 md:basis-1/2"
							>
								<div className="border border-2 flex flex-col items-center space-y-2 p-4 mx-2 bg-white rounded-lg border hover:cursor-pointer hover:border-mydarkblue transition duration-200 delay-100 ease-in-out">
									<div>
										<p className="text-xl font-bold text-mydarkblue">
											{item.title}
										</p>
									</div>
									<div className="flex lg:flex-row flex-col lg:space-x-2 items-center text-gray-600">
										<div className="flex flex-row items-center space-x-1">
											<div className="text-sm">
												<CiLocationOn />
											</div>
											<div>
												<p className="text-sm">{item.location}</p>
											</div>
										</div>
										<div className="flex flex-row items-center space-x-1">
											<div className="text-sm">
												<TfiCup />
											</div>
											<div>
												<p className="text-sm">{item.prize}</p>
											</div>
										</div>
									</div>
									<div className="flex flex-col text-sm text-gray-600 items-center space-y-2">
										<p className="text-md text-gray-800">Registration</p>
										<div className="flex lg:flex-row md:space-x-2 flex-col items-center">
											<p>Start - {item.reg_start}</p>
											<p>End - {item.reg_end}</p>
										</div>
									</div>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
			<Separator className="md:mt-12 mt-6" />
		</div>
	);
};

export default memo(HackathonsList);
