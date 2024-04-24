import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const RecruiterNotice: React.FC = () => {
	return (
		<div className="md:px-20 md:pb-16 md:pt-8 pb-8 px-4">
			<div className="bg-mydarkblue bg-opacity-5 flex flex-row justify-between rounded-lg">
				<div className="flex flex-col md:p-16 p-6 space-y-6">
					<div>
						<p className="md:text-3xl text-xl">Want to Post?</p>
					</div>
					<div>
						<p className="md:text-sm text-xs leading-5 text-gray-600">
							Advertise your jobs and hackathons to big number of monthly users
							and search thousands of CVs in our database.
						</p>
					</div>
					<div>
						<Button className="bg-mydarkblue hover:bg-mycontrast p-6 font-light">
							Start Posting Now
						</Button>
					</div>
				</div>
				<div className="p-4 md:flex hidden">
					<Image src="./hiring.svg" alt="hiring" width={400} height={200} />
				</div>
			</div>
		</div>
	);
};

export default RecruiterNotice;
