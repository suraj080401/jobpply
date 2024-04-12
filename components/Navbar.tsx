import Image from "next/image";
import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
	return (
		<nav className="flex flex-row justify-between items-center p-4 bg-themecolor">
			<div>
				<div className="shadow-2xl text-2xl text-white font-bold hover:shadow-none transform hover:-translate-y-1 transition duration-300">
					Jobpply
				</div>
			</div>
			<div className="flex flex-row justify-between items-center space-x-4">
				<Link
					href={"/"}
					className="text-themecolor py-1 px-2 text-sm rounded-md bg-white font-semibold"
				>
					Home
				</Link>
				<Link
					href={"/"}
					className="text-themecolor py-1 px-2 text-sm rounded-md bg-white"
				>
					Jobs
				</Link>
				<Link
					href={"/"}
					className="text-themecolor py-1 px-2 text-sm rounded-md bg-white"
				>
					Service
				</Link>
				<Link
					href={"/"}
					className="text-themecolor py-1 px-2 text-sm rounded-md bg-white"
				>
					About
				</Link>
				<Link
					href={"/"}
					className="text-themecolor py-1 px-2 text-sm rounded-md bg-white"
				>
					Contact
				</Link>
				<Link
					href={"/"}
					className="text-white p-2 text-sm rounded-md bg-contrastcolor"
				>
					Post Job
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
