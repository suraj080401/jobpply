import React from "react";
import { Jobs } from "@/utils/schema";
import SingleJobTabs from "./SingleJobTabs";
import { MdAccessTime, MdOutlineWorkOutline } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { Button } from "./ui/button";
import Link from "next/link";
import SingleJobSkeleton from "./Skeloten/SingleJobSkeleton";

interface SingleJobProps {
	data: Jobs | undefined;
	isLoading: boolean;
	isError: boolean;
}

const SingleJob: React.FC<SingleJobProps> = ({ data, isLoading, isError }) => {
	if (isLoading) {
		return (
			<div className="md:p-8 p-2">
				<SingleJobSkeleton />
			</div>
		);
	}

	if (isError) {
		return <div>Loading...</div>;
	}

	if (!data) {
		return <div>Loading...</div>;
	}

	return (
		<div className="flex flex-col space-y-4 md:p-8 p-2">
			<div className="flex md:flex-row flex-col md:space-y-0 space-y-4 justify-between bg-white drop-shadow-xl px-4 py-6 rounded-lg">
				<div className="flex md:flex-row flex-col md:space-y-0 space-y-2 md:space-x-4 md:justify-start items-center md:items-stretch">
					<div>
						<img
							src={`${data.logo}`}
							className="w-24 h-auto rounded-md border border-2 border-gray-100"
							alt="logo"
						/>
					</div>
					<div className="flex flex-col justify-evenly text-sm space-y-2 md:items-start items-center">
						<div className="text-xl">{data.role}</div>
						<div className="flex flex-row space-x-2">
							<div className="flex flex-row items-center space-x-1 bg-mycontrast bg-opacity-10 rounded-md px-2 text-mycontrast">
								<div className="text-md">
									<MdOutlineWorkOutline />
								</div>
								<div>{data.company}</div>
							</div>
							<div className="flex flex-row items-center space-x-1 bg-mydarkblue bg-opacity-10 rounded-md px-2 text-mydarkblue">
								<div className="text-md">
									<CiLocationOn />
								</div>
								<div>{data.location}</div>
							</div>
							<div className="flex flex-row items-center space-x-1 bg-gray-500 bg-opacity-10 rounded-md px-2 text-gray-500">
								<div className="text-md">
									<CiLocationOn />
								</div>
								<div>{data.experience}</div>
							</div>
						</div>
						<div className="flex flex-row space-x-2">
							<div className="flex flex-row items-center space-x-1 bg-green-500 bg-opacity-10 rounded-md px-2 text-green-600">
								<div className="text-md">
									<HiOutlineCurrencyRupee />
								</div>
								<div>{data.salary} LPA</div>
							</div>
							<div className="flex flex-row items-center space-x-1 bg-mylightblue bg-opacity-10 rounded-md px-2 text-mylightblue">
								<div className="text-md">
									<MdAccessTime />
								</div>
								<div>{data.dateadded}</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col justify-end">
					<Link
						href={data.link ? data.link : ""}
						target="_blank"
						className=" hover:bg-transparent hover:text-black transition duration-200 delay-100 ease-in-out border hover:border-black bg-mydarkblue px-4 py-2 rounded-md text-white text-center text-sm"
					>
						Apply
					</Link>
				</div>
			</div>
			<div>
				<SingleJobTabs data={data} isLoading={isLoading} isError={isError} />
			</div>
		</div>
	);
};

export default SingleJob;
