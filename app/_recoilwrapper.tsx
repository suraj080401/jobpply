"use client";

import { ReactNode } from "react";
import { RecoilRoot } from "recoil";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface RecoilWrapperProps {
	children?: ReactNode;
}

const queryClient = new QueryClient();

const RecoilWrapper = ({ children, ...props }: RecoilWrapperProps) => {
	return (
		<QueryClientProvider client={queryClient}>
			<RecoilRoot {...props}>{children}</RecoilRoot>
			<ReactQueryDevtools initialIsOpen={true} />
		</QueryClientProvider>
	);
};

export default RecoilWrapper;
