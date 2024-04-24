import React from "react";

const BussinesNumbers = () => {
	return (
		<div className="flex md:flex-row flex-col md:justify-evenly p-8 bg-white md:space-y-0 space-y-4">
			<div className="flex flex-col items-center space-y-4">
				<div>
					<p className="font-bold text-4xl">1K</p>
				</div>
				<div>
					<p className="text-xs text-gray-600">1K plus daily active users</p>
				</div>
			</div>
			<div className="flex flex-col items-center space-y-4">
				<div>
					<p className="font-bold text-4xl">2K</p>
				</div>
				<div>
					<p className="text-xs text-gray-600">
						Over 2k open jobs and hackathons
					</p>
				</div>
			</div>
			<div className="flex flex-col items-center space-y-4">
				<div>
					<p className="font-bold text-4xl">1K</p>
				</div>
				<div>
					<p className="text-xs text-gray-600">Over 1K stories shared</p>
				</div>
			</div>
		</div>
	);
};

export default BussinesNumbers;
