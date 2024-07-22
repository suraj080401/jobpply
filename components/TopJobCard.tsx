import React from "react";
import { Jobs, topTenJobs } from "@/utils/schema";
import { CiLocationOn } from "react-icons/ci";
import { MdAccessTime } from "react-icons/md";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { MdOutlineWorkOutline } from "react-icons/md";
import Link from "next/link";

interface TopJobCardProps {
	data: Jobs | undefined;
}

const TopJobCard: React.FC<TopJobCardProps> = ({ data }) => {
	return (
		<Link
			href={`job/?id=${data?.id}`}
			className="p-4 mx-2 border border-2 rounded-lg bg-white flex lg:flex-row flex-col lg:space-x-4 lg:space-y-0 space-y-2 hover:cursor-pointer hover:border-mydarkblue transition duration-200 delay-100 ease-in-out"
		>
			<div className="rounded-md flex flex-row justify-center">
				<div className="bg-whitesmoke p-2 h-16 rounded-lg">
					<img src={data?.logo} alt="logo" className="w-12 h-12 rounded-md" />
				</div>
			</div>
			<div className="flex flex-col space-y-1 lg:items-start items-center ">
				<div>
					<p className="lg:text-lg text-md font-bold">{data?.role}</p>
				</div>
				<div className="flex flex-col items-center space-y-2 lg:items-start text-gray-500">
					<div className="flex flex-row space-x-4">
						<div className="flex flex-row items-center space-x-1">
							<div className="text-sm">
								<MdOutlineWorkOutline />
							</div>
							<div>
								<p className="text-sm">{data?.company}</p>
							</div>
						</div>
						<div className="flex flex-row items-center space-x-1">
							<div className="text-sm">
								<CiLocationOn />
							</div>
							<div>
								<p className="text-sm">{data?.location}</p>
							</div>
						</div>
					</div>
					<div className="flex flex-row space-x-4">
						<div className="flex flex-row items-center space-x-1">
							<div className="text-sm">
								<MdAccessTime />
							</div>
							<div>
								<p className="text-sm">Today</p>
							</div>
						</div>
						<div className="flex flex-row items-center space-x-1">
							<div className="text-sm">
								<HiOutlineCurrencyRupee />
							</div>
							<div>
								<p className="text-sm">{data?.salary} lpa</p>
							</div>
						</div>
					</div>
					<div className="flex flex-row space-x-2">
						{data?.skills
							.split(",")
							.slice(0, 3)
							.map((item, i) => {
								return (
									<div
										key={i}
										className="text-xs rounded-xl py-1 px-2 bg-mydarkblue bg-opacity-20 text-mydarkblue"
									>
										{item}
									</div>
								);
							})}
					</div>
				</div>
			</div>
		</Link>
	);
};

export default TopJobCard;
