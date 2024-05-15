import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Jobs } from "@/utils/schema";
import BulletPoints from "./SingleJobComps/BulletPoints";

interface SingleJobTabProps {
	data: Jobs | undefined;
	isLoading: boolean;
	isError: boolean;
}

const SingleJobTabs: React.FC<SingleJobTabProps> = ({
	data,
	isLoading,
	isError,
}) => {
	return (
		<div className="my-4">
			<Tabs defaultValue="aboutjob">
				<TabsList className="my-2">
					<TabsTrigger
						value="aboutjob"
						className="data-[state=active]:bg-mydarkblue data-[state=active]:text-white"
					>
						About Job
					</TabsTrigger>
					<TabsTrigger
						value="info"
						className="data-[state=active]:bg-mydarkblue data-[state=active]:text-white"
					>
						Info
					</TabsTrigger>
					<TabsTrigger
						value="more"
						className="data-[state=active]:bg-mydarkblue data-[state=active]:text-white"
					>
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
						<BulletPoints title={"Skills"} data={data?.ats_keywords || []} />
						<BulletPoints
							title={"Qualifications"}
							data={data?.qualification || []}
						/>
					</div>
				</TabsContent>
				<TabsContent
					value="info"
					className="bg-white drop-shadow-xl rounded-lg h-[480px] m-0 p-4"
				>
					Info
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
