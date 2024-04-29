"use client";
import { currNavTabAtom } from "@/atoms/atoms";
import { columns } from "@/components/jobtable/columns";
import { DataTable } from "@/components/jobtable/data-table";
import { fetchJobData } from "@/utils/services/userData";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { Jobs } from "@/utils/schema";
import { useQuery } from "@tanstack/react-query";

export default function Jobs() {
	const [currNavTabState, setCurrNavTabState] = useRecoilState(currNavTabAtom);

	const fetchAllJobs = async () => {
		try {
			const fetchedData = await fetchJobData();
			return fetchedData;
		} catch (error) {
			console.log(error);
		}
	};

	const { data, isError, isLoading } = useQuery({
		queryKey: ["jobs"],
		queryFn: fetchAllJobs,
	});

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
			{isLoading ? (
				<div>Loading...</div>
			) : isError ? (
				<div>Error fetching data</div>
			) : (
				<DataTable data={data || []} columns={columns} />
			)}
		</main>
	);
}

// Company, Role, Location, Experience ,Skills, Salary, Date added, View Button,
