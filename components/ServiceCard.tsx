import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { FaCheck } from "react-icons/fa6";
import Image from "next/image";
import { ourServices } from "@/utils/schema";

interface IServiceCardProps {
	item: ourServices;
}

const ServiceCard: React.FC<IServiceCardProps> = ({ item }) => {
	return (
		<Card>
			<CardHeader className="">
				<div className="flex flex-row bg-white p-4 rounded-lg md:h-48 h-36 justify-center">
					<Image
						src={`./${item.uni_key}.svg`}
						alt="resumereview"
						width={180}
						height={180}
					/>
				</div>
				<CardTitle className="text-mydarkblue text-xs md:text-lg lg:text-lg xl:text-xl text-center md:text-start">
					{item.title}
				</CardTitle>
			</CardHeader>
			<CardContent className="space-y-2">
				{item.keywords.map((value, i) => {
					return (
						<div className="flex flex-row items-center space-x-2" key={i}>
							<FaCheck className="text-mydarkblue text-[8px] md:text-lg " />
							<p className="text-[8px] md:text-sm lg:text-sm xl:text-md text-gray-500">
								{value}
							</p>
						</div>
					);
				})}
			</CardContent>
			<CardFooter>
				<p>Card Footer</p>
			</CardFooter>
		</Card>
	);
};

export default ServiceCard;
