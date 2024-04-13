import Image from "next/image";
import React from "react";
import Link from "next/link";
import Logo from "../public/logo.png";
import { Righteous } from "next/font/google";

const righteous = Righteous({ subsets: ["latin"], weight: ["400"] });

const Navbar: React.FC = () => {
	return (
		<nav className="flex flex-row justify-between items-center px-6 py-4 bg-white">
			<div className="flex flex-row items-center space-x-2">
				<div>
					<Image src={Logo} alt="logo" width={35} className="rounded-md" />
				</div>
				<h1 className={`${righteous.className} text-3xl text-mydarkblue`}>
					Jobpply
				</h1>
			</div>
			<div className="flex flex-row justify-between items-center space-x-4">
				<Link
					href={"/"}
					className="text-themecolor py-1 px-2 text-sm rounded-md"
				>
					Home
				</Link>
				<Link
					href={"/"}
					className="text-themecolor py-1 px-2 text-sm rounded-md"
				>
					Jobs
				</Link>
				<Link
					href={"/"}
					className="text-themecolor py-1 px-2 text-sm rounded-md"
				>
					Service
				</Link>
				<Link
					href={"/"}
					className="text-themecolor py-1 px-2 text-sm rounded-md"
				>
					About
				</Link>
				<Link
					href={"/"}
					className="text-themecolor py-1 px-2 text-sm rounded-md"
				>
					Contact
				</Link>
				<Link
					href={"/"}
					className="text-white p-2 text-sm rounded-md bg-mycontrast"
				>
					Post Job
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
