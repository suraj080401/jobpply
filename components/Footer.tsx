import Image from "next/image";
import React from "react";
import Logo from "../public/logo.png";
import { Righteous } from "next/font/google";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
import { memo } from "react";

const righteous = Righteous({ subsets: ["latin"], weight: ["400"] });

const Footer: React.FC = () => {
	return (
		<footer className="flex flex-col bg-white">
			<div className="md:px-8 md:py-12 p-4 flex md:flex-row flex-col md:space-y-0 space-y-6 md:justify-evenly">
				<div className="flex flex-col space-y-4 ">
					<div className="flex flex-row space-x-2 justify-center">
						<div>
							<Image src={Logo} alt="logo" className="rounded-md md:w-12 w-6" />
						</div>
						<h1
							className={`${righteous.className} md:text-5xl text-xl text-mydarkblue`}
						>
							Jobpply
						</h1>
					</div>
					<Separator />
					<div className="flex-row md:justify-between justify-evenly flex">
						<div className="bg-mylightblue hover:bg-mycontrast text-white rounded-full p-2">
							<IoMdMail className="text-xl" />
						</div>
						<div className="bg-mylightblue hover:bg-mycontrast text-white rounded-full p-2">
							<IoCall className="text-xl" />
						</div>
						<div className="bg-mylightblue hover:bg-mycontrast text-white rounded-full p-2">
							<FaLinkedin className="text-xl" />
						</div>
						<div className="bg-mylightblue hover:bg-mycontrast text-white rounded-full p-2">
							<RiInstagramFill className="text-xl" />
						</div>
					</div>
				</div>
				<div className="md:flex hidden flex-col">
					<p className="text-md text-mydarkblue font-extrabold mb-2">
						Quick Links
					</p>
					<div className="flex flex-col space-y-2">
						<Link href={"/"} className="text-mydarkblue text-xs">
							Home
						</Link>
						<Link href={"/"} className="text-mydarkblue text-xs">
							Service
						</Link>
						<Link href={"/"} className="text-mydarkblue text-xs">
							About
						</Link>
						<Link href={"/"} className="text-mydarkblue text-xs">
							Contact
						</Link>
					</div>
				</div>
				<div className="md:flex hidden flex-col">
					<p className="text-md text-mydarkblue font-extrabold mb-2">Company</p>
					<div className="flex flex-col space-y-2">
						<Link href={"/"} className="text-mydarkblue text-xs">
							Terms of Service
						</Link>
						<Link href={"/"} className="text-mydarkblue text-xs">
							Privacy Policy
						</Link>
						<Link href={"/"} className="text-mydarkblue text-xs">
							FAQs
						</Link>
						<Link href={"/"} className="text-mydarkblue text-xs">
							Our Story
						</Link>
					</div>
				</div>
				<div className="flex flex-col space-y-4 md:items-start items-center">
					<div>
						<p className="text-mydarkblue text-md">STAY IN TOUCH</p>
					</div>
					<div>
						<p className="text-xs text-mydarkblue">
							Subscribe to get daily job updates and more
						</p>
					</div>
					<div>
						<Input
							type="email"
							placeholder="Email"
							className="w-72 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-none focus-visible:ring-offset-0 text-mydarkblue "
						/>
					</div>
					<div>
						<Button className="bg-mydarkblue px-6 hover:bg-mycontrast transition duration-200 delay-100 ease-in-out">
							SUBSCRIBE
						</Button>
					</div>
				</div>
			</div>
			<div className="bg-mydarkblue h-12 flex flex-row justify-center items-center">
				<p className="text-white text-sm">© 2024 Jobpply, All right reserved</p>
			</div>
		</footer>
	);
};

export default memo(Footer);
