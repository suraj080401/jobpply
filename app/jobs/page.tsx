"use client";
import { currNavTabAtom } from "@/atoms/atoms";
import { columns } from "@/components/jobtable/columns";
import { DataTable } from "@/components/jobtable/data-table";
import { allJobsData } from "@/utils/data";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

export default function Jobs() {
	const [currNavTabState, setCurrNavTabState] = useRecoilState(currNavTabAtom);

	useEffect(() => {
		setCurrNavTabState("job");
	}, []);

	return (
		<main className="h-full flex flex-col space-y-6 scroll-smooth md:p-8 p-2">
			<div className="flex flex-col space-y-2 items-center py-2">
				<div>
					<p className="md:text-3xl text-2xl">JobList</p>
				</div>
				<div>
					<p className="md:text-sm text-xs">
						Use our advance filters to match the best job for you
					</p>
				</div>
			</div>
			<DataTable data={allJobsData} columns={columns} />
		</main>
	);
}

// Company, Role, Location, Experience ,Skills, Salary, Date added, View Button,
