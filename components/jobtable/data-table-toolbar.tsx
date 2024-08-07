"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { DataTableViewOptions } from "./data-table-view-options";
import {
	DataTableFacetedFilterExperience,
	DataTableFacetedFilterRole,
} from "./data-table-faceted-filter";
import { allExperienceData, allJobRoleData } from "@/utils/data";
import { useRecoilState } from "recoil";
import { globalExperienceFilter, globalRoleFilter } from "@/atoms/atoms";

interface DataTableToolbarProps<TData> {
	table: Table<TData>;
}

export function DataTableToolbar<TData>({
	table,
}: DataTableToolbarProps<TData>) {
	const isFiltered = table.getState().columnFilters.length > 0;
	const [currRoleState, setcurrRoleState] = useRecoilState(globalRoleFilter);
	const [currExperienceState, setcurrExperienceState] = useRecoilState(
		globalExperienceFilter,
	);
	return (
		<div className="flex items-center justify-between bg-mydarkblue bg-opacity-10 p-4 rounded-md space-x-2">
			<div className="flex md:flex-row flex-col md:items-center md:space-x-2 md:space-y-0 space-y-2 w-full">
				<Input
					placeholder="Search Skills"
					value={(table.getColumn("skills")?.getFilterValue() as string) ?? ""}
					onChange={(event) =>
						table.getColumn("skills")?.setFilterValue(event.target.value)
					}
					className="h-8 md:w-72 w-full"
				/>
				{table.getColumn("role") && (
					<DataTableFacetedFilterRole
						column={table.getColumn("category")}
						title="Role"
						options={allJobRoleData}
					/>
				)}
				{table.getColumn("experience") && (
					<DataTableFacetedFilterExperience
						column={table.getColumn("experience")}
						title="Experience"
						options={allExperienceData}
					/>
				)}
				{isFiltered && (
					<Button
						variant="ghost"
						onClick={() => {
							table.resetColumnFilters();
							setcurrRoleState("");
							setcurrExperienceState("");
						}}
						className="h-8 px-2 lg:px-3"
					>
						Reset
						<Cross2Icon className="ml-2 h-4 w-4" />
					</Button>
				)}
			</div>
			<div className="lg:flex hidden">
				<DataTableViewOptions table={table} />
			</div>
		</div>
	);
}
