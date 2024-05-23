import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Jobs } from "@/utils/schema";
import BulletPoints from "./SingleJobComps/BulletPoints";
import { useQuery } from "@tanstack/react-query";
import { fetchCompanyReferrals } from "@/utils/services/supabaseData";
import { FaLinkedin } from "react-icons/fa";

interface SingleJobTabProps {
	data: Jobs | undefined;
	isLoading: boolean;
	isError: boolean;
}

const stylingTab =
	"data-[state=active]:bg-transparent border-b-2 data-[state=active]:border-mydarkblue  data-[state=active]:text-mydarkblue rounded-none border-transparent";

const SingleJobTabs: React.FC<SingleJobTabProps> = ({
	data,
	isLoading,
	isError,
}) => {
	const fetchSingleJobs = async () => {
		try {
			const fetchedData = await fetchCompanyReferrals(data?.company || "");
			return fetchedData;
		} catch (error) {
			console.log(error);
		}
	};

	const {
		data: referralData,
		isError: isRefferalError,
		isLoading: isRefferalLoading,
		error,
	} = useQuery({
		queryKey: [data?.company],
		queryFn: fetchSingleJobs,
	});

	return (
		<div className="my-4">
			<Tabs defaultValue="aboutjob">
				<TabsList className="my-2">
					<TabsTrigger value="aboutjob" className={stylingTab}>
						About Job
					</TabsTrigger>
					<TabsTrigger value="how_to_crack" className={stylingTab}>
						How to Crack ?
					</TabsTrigger>
					<TabsTrigger value="more" className={stylingTab}>
						More
					</TabsTrigger>
				</TabsList>
				<TabsContent
					value="aboutjob"
					className="bg-white drop-shadow-xl rounded-lg m-0 md:p-6 p-4"
				>
					<div className="flex flex-col space-y-2">
						<BulletPoints
							title={"Job Description"}
							data={data?.job_description || []}
						/>
						<BulletPoints
							title={"Qualifications"}
							data={data?.qualification || []}
						/>
					</div>
				</TabsContent>
				<TabsContent
					value="how_to_crack"
					className="bg-white drop-shadow-xl rounded-lg m-0 p-4"
				>
					<div className="flex flex-col space-y-4">
						<div className="flex flex-col space-y-4">
							<div className="text-xl">Step 1:</div>
							<div>
								<BulletPoints
									title={"Skills"}
									data={data?.ats_keywords || []}
								/>
							</div>
							<div className="text-xs text-green-500 underline hover:cursor-pointer">
								Want to make ATS friendly resume?
							</div>
						</div>
						<div className="flex flex-col space-y-4">
							<div className="text-xl">Step 2:</div>
							<div>
								<p className="md:text-lg text-sm underline font-bold">
									Message these {data?.company} employees
								</p>
							</div>
							<div className="flex flex-row flex-wrap">
								{referralData?.map((item, i) => {
									return (
										<div
											key={i}
											className="flex flex-row mr-4 px-4 py-2 my-1 rounded-lg bg-mydarkblue bg-opacity-10"
										>
											<a
												href={item.linkedin}
												className="flex items-center"
												target="_blank"
											>
												<FaLinkedin className="text-blue-700 text-lg mr-1" />
												<div>{item.name}</div>
											</a>
										</div>
									);
								})}
							</div>
							<div className="text-xs text-green-500 underline hover:cursor-pointer">
								What to message these employees?
							</div>
						</div>
					</div>
				</TabsContent>
				<TabsContent
					value="more"
					className="bg-white drop-shadow-xl rounded-lg h-[480px] m-0 p-4"
				>
					More
				</TabsContent>
			</Tabs>
		</div>
	);
};

export default SingleJobTabs;
