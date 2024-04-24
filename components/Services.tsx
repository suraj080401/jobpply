import React from "react";
import ServiceCard from "./ServiceCard";
import { ourServiceData } from "@/utils/data";

const Services: React.FC = () => {
	return (
		<div className="py-8 md:px-24 px-4 flex flex-col space-y-8">
			<div className="text-center">
				<p className="md:text-3xl text-xl">Our Services</p>
			</div>
			<div className="grid md:grid-cols-2 grid-cols-2 lg:grid-cols-3 grid-flow-row md:gap-8 gap-2">
				{ourServiceData.map((item, key) => {
					return <ServiceCard item={item} key={key} />;
				})}
			</div>
		</div>
	);
};

export default Services;
