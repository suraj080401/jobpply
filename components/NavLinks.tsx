import Link from "next/link";
import React from "react";

const NavLinks: React.FC = () => {
	return (
		<div className="flex md:flex-row flex-col md:justify-between md:items-center md:space-x-4 md:space-y-0 space-y-4">
			<Link
				href={"/"}
				className="text-themecolor py-1 px-2 text-sm rounded-md bg-mydarkblue text-white"
			>
				Home
			</Link>
			<Link href={"/"} className="text-themecolor py-1 px-2 text-sm rounded-md">
				Jobs
			</Link>
			<Link href={"/"} className="text-themecolor py-1 px-2 text-sm rounded-md">
				Service
			</Link>
			<Link href={"/"} className="text-themecolor py-1 px-2 text-sm rounded-md">
				About
			</Link>
			<Link href={"/"} className="text-themecolor py-1 px-2 text-sm rounded-md">
				Contact
			</Link>
			<Link
				href={"/"}
				className="text-white px-4 py-2 text-sm rounded-md bg-mycontrast hover:bg-transparent hover:text-black transition duration-200 delay-100 ease-in-out border hover:border-black border-white"
			>
				Post Job
			</Link>
		</div>
	);
};

export default NavLinks;
