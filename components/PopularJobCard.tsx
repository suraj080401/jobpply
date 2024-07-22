"use client";

import { globalExperienceFilter, globalRoleFilter } from "@/atoms/atoms";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useRecoilState } from "recoil";

interface IPopularJobCard {
	title: string;
	logo: React.ComponentType<any>;
	count: number;
	keyvalue: string;
}

const PopularJobCard: React.FC<IPopularJobCard> = ({
	title,
	logo: Component,
	count,
	keyvalue,
}) => {
	const [isHovered, setIsHovered] = useState<boolean>(false);
	const [currRoleState, setcurrRoleState] = useRecoilState(globalRoleFilter);
	const [currExperienceState, setcurrExperienceState] = useRecoilState(
		globalExperienceFilter,
	);
	const router = useRouter();

	const visitJobTab = () => {
		console.log(keyvalue);
		setcurrRoleState(keyvalue);
		setcurrExperienceState("");
		router.push("/jobs");
	};

	return (
		<div
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			onClick={() => {
				visitJobTab();
			}}
			className="flex md:flex-row flex-col md:p-4 pb-2 border border-gray-300 bg-white rounded-xl md:space-x-4 space-x-0 md:space-y-0 space-y-2 w-full hover:cursor-pointer md:hover:scale-105 hover:border-mydarkblue transition duration-200 delay-100 ease-in-out"
		>
			<div
				className={`${
					isHovered ? "bg-opacity-100 cursor-pointer" : "bg-opacity-10"
				} bg-mydarkblue p-4 rounded-xl bg-opacity-10 flex flex-row items-cemter justify-center transition duration-200 delay-100 ease-in-out`}
			>
				<div>
					<Component
						className={`${
							isHovered ? "text-white" : "text-mydarkblue"
						} md:text-4xl text-5xl transition duration-200 delay-100 ease-in-out`}
					/>
				</div>
			</div>
			<div className="flex flex-col justify-center space-y-1">
				<div>
					<p className="md:text-lg text-sm font-bold md:text-left text-center">
						{title}
					</p>
				</div>
				<div>
					<p className="md:text-sm text-xs font-bold text-gray-500 md:text-left text-center">
						({count} open positions)
					</p>
				</div>
			</div>
		</div>
	);
};

export default PopularJobCard;
