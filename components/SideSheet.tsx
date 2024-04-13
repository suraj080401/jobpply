import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import NavLinks from "./NavLinks";
import { IoMenu } from "react-icons/io5";

const SideSheet: React.FC = () => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline" className="p-2">
					<IoMenu className="text-xl text-mydarkblue" />
				</Button>
			</SheetTrigger>
			<SheetContent>
				<div className="my-8">
					<NavLinks />
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default SideSheet;
