import React from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import { allJobRole } from "@/utils/schema";

interface ISelectorComp {
	data: allJobRole[];
	placeholder: string;
	setterFunction: Function;
}

const SelectorComp: React.FC<ISelectorComp> = ({
	data,
	placeholder,
	setterFunction,
}) => {
	return (
		<Select
			onValueChange={(event) => {
				setterFunction(event);
			}}
		>
			<SelectTrigger className="w-[300px] h-12 focus:ring-0 focus:ring-none focus:ring-offset-0">
				<SelectValue placeholder={placeholder} />
			</SelectTrigger>
			<SelectContent>
				{data.map((item, i) => {
					return (
						<SelectItem value={item.value} key={i}>
							{item.value}
						</SelectItem>
					);
				})}
			</SelectContent>
		</Select>
	);
};

export default SelectorComp;
