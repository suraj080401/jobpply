"use client";

import { currNavTabAtom } from "@/atoms/atoms";
import HomeComp from "@/components/componentroutes/HomeComp";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

export default function Home() {
	const [currNavTabState, setCurrNavTabState] = useRecoilState(currNavTabAtom);

	useEffect(() => {
		setCurrNavTabState("home");
	}, []);
	return (
		<main className="flex-grow h-full scroll-smooth">
			<HomeComp />
		</main>
	);
}
