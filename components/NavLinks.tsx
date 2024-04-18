import Link from "next/link";
import React from "react";
import { allNavTabs } from "@/utils/schema";
import { useRecoilState } from "recoil";
import { currNavTabAtom } from "@/atoms/atoms";

interface INavLinksProps {
	route: string;
	value: string;
	keyValue: string;
}

const NavLinks: React.FC<INavLinksProps> = ({ route, value, keyValue }) => {
	const [currNavTabState, setCurrNavTabState] = useRecoilState(currNavTabAtom);

	return (
		<div className="">
			{keyValue === "postjob" ? (
				<Link
					href={"/"}
					onClick={() => setCurrNavTabState(keyValue)}
					className={`${
						currNavTabState === "postjob"
							? "text-white bg-mydarkblue hover:bg-mydarkblue hover:text-white"
							: ""
					} text-white px-4 py-2 text-sm rounded-md bg-mycontrast hover:bg-transparent hover:text-black transition duration-200 delay-100 ease-in-out border hover:border-black border-white`}
				>
					Post Job
				</Link>
			) : (
				<Link
					href={route}
					onClick={() => setCurrNavTabState(keyValue)}
					className={`${
						currNavTabState === keyValue
							? "text-white bg-mydarkblue"
							: "text-mydarkblue"
					} py-1 px-2 text-sm rounded-md`}
				>
					{value}
				</Link>
			)}
		</div>
	);
};

export default NavLinks;
