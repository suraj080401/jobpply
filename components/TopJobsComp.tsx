import React from "react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "./ui/carousel";

const TopJobsComp: React.FC = () => {
	return (
		<div>
			<div className="flex flex-col items-center md:py-4 md:px-16 px-8 py-2 md:space-y-16 space-y-8">
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
				<div className="w-full p-6 bg-red-300">
					<Carousel
						opts={{
							align: "center",
							loop: true,
							startIndex: 1,
						}}
						className="w-full bg-green-400"
					>
						<CarouselContent>
							{Array.from({ length: 5 }).map((_, index) => (
								<CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
									<div className="p-1">
										<div>
											<div className="flex items-center justify-center p-2">
												<span className="text-3xl font-semibold">
													{index + 1}
												</span>
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
			</div>
		</div>
	);
};

export default TopJobsComp;
