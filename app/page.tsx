"use client";
import App from "@/components/App";
import { RecoilRoot } from "recoil";

export default function Home() {
	return (
		<RecoilRoot>
			<main className="">
				<App />
			</main>
		</RecoilRoot>
	);
}
