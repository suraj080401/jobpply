"use client";

import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchSingleJobData } from "@/utils/services/supabaseData";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { currNavTabAtom } from "@/atoms/atoms";
import SingleJob from "@/components/SingleJob";

export default function page() {
	const [currNavTabState, setCurrNavTabState] = useRecoilState(currNavTabAtom);
	const searchParams = useSearchParams();
	const id = searchParams.get("id");

	const fetchSingleJobs = async () => {
		if (!id) return;
		try {
			const fetchedData = await fetchSingleJobData(id);
			return fetchedData;
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		setCurrNavTabState("job");
	}, []);

	const { data, isError, isLoading, error } = useQuery({
		queryKey: [id],
		queryFn: fetchSingleJobs,
	});

	return (
		<div>
			<SingleJob data={data} isError={isError} isLoading={isLoading} />
		</div>
	);
}
