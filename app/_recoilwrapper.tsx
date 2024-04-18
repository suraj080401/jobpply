"use client";

import { ReactNode } from "react";
import { RecoilRoot } from "recoil";

interface RecoilWrapperProps {
	children?: ReactNode;
}

const RecoilWrapper = ({ children, ...props }: RecoilWrapperProps) => {
	return <RecoilRoot {...props}>{children}</RecoilRoot>;
};

export default RecoilWrapper;
