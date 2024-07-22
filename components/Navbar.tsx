"use client";
import Image from "next/image";
import React from "react";
import NavLinks from "./NavLinks";
import Logo from "../public/logo.png";
import { Righteous } from "next/font/google";
import SideSheet from "./SideSheet";
import { allNavTabsData } from "@/utils/data";
import { useRecoilState } from "recoil";
import { currNavTabAtom } from "@/atoms/atoms";

const righteous = Righteous({ subsets: ["latin"], weight: ["400"] });

const Navbar: React.FC = () => {
	const [currNavTabState, setCurrNavTabState] = useRecoilState(currNavTabAtom);

	return (
		<nav className="flex h-16 w-full flex-row justify-between items-center px-6 py-4 bg-white">
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
				<div className="flex md:flex-row flex-col md:justify-between md:items-center md:space-x-4 md:space-y-0 space-y-4">
					{allNavTabsData.map((item, i) => {
						return (
							<NavLinks
								route={item.route}
								value={item.value}
								key={i}
								keyValue={item.keyValue}
							/>
						);
					})}
				</div>
			</div>
			<div className="md:hidden flex flex-row items-center">
				<SideSheet />
			</div>
		</nav>
	);
};

export default Navbar;
