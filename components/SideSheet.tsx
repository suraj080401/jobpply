import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetTrigger,
	SheetClose,
} from "@/components/ui/sheet";
import NavLinks from "./NavLinks";
import { IoMenu } from "react-icons/io5";
import { allNavTabsData } from "@/utils/data";
import React from "react";

const SideSheet: React.FC = () => {
	const [open, setOpen] = React.useState(false);
	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<Button variant="outline" className="p-2" onClick={() => setOpen(true)}>
					<IoMenu className="text-xl text-mydarkblue" />
				</Button>
			</SheetTrigger>
			<SheetContent>
				<div
					className="my-8 w-full flex flex-col space-y-4"
					onClick={() => setOpen(false)}
				>
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
			</SheetContent>
		</Sheet>
	);
};

export default SideSheet;
