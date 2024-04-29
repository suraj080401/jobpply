"use client";

import { useSearchParams } from "next/navigation";

export default function page() {
	const searchParams = useSearchParams();

	const id = searchParams.get("id");
	return <>Page: {id}</>;
}
