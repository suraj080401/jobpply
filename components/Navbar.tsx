import Image from "next/image";
import React from "react";
import NavLinks from "./NavLinks";
import Logo from "../public/logo.png";
import { Righteous } from "next/font/google";
import SideSheet from "./SideSheet";

const righteous = Righteous({ subsets: ["latin"], weight: ["400"] });

const Navbar: React.FC = () => {
	return (
		<nav className="flex flex-row justify-between items-center px-6 py-4 bg-white">
			<div className="flex flex-row items-center space-x-2">
				<div>
					<Image src={Logo} alt="logo" className="rounded-md md:w-10 w-8" />
				</div>
				<h1
					className={`${righteous.className} md:text-3xl text-2xl text-mydarkblue`}
				>
					Jobpply
				</h1>
			</div>
			<div className="md:flex hidden flex-row items-center">
				<NavLinks />
			</div>
			<div className="md:hidden flex flex-row items-center">
				<SideSheet />
			</div>
		</nav>
	);
};

export default Navbar;
