"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Jobs } from "@/utils/schema";
import { DataTableColumnHeader } from "./data-table-column-header";
import { Button } from "../ui/button";

export const columns: ColumnDef<Jobs>[] = [
	{
		accessorFn: (row) => (
			<div className="flex flex-row items-center space-x-2 w-24">
				<div>
					<img src={`${row.logo}`} className="w-6 h-6" alt="logo" />
				</div>
				<div>{row.company}</div>
			</div>
		),
		id: "company",
		header: "Company",
		cell: (info) => info.getValue(),
	},
	{
		accessorKey: "role",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Role" />
		),
		cell: ({ row }) => {
			return <div className="flex">{row.getValue("role")}</div>;
		},
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id));
		},
		enableSorting: false,
	},
	{
		accessorKey: "location",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Location" />
		),
		cell: ({ row }) => {
			return <div className="flex">{row.getValue("location")}</div>;
		},
		enableSorting: false,
	},
	{
		accessorKey: "experience",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Experience" />
		),
		cell: ({ row }) => {
			return <div className="flex">{row.getValue("experience")}</div>;
		},
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id));
		},
		enableSorting: false,
	},
	{
		accessorKey: "skills",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Skills" />
		),
		cell: ({ row }) => {
			return <div className="flex">{row.getValue("skills")}</div>;
		},
		enableSorting: false,
	},
	{
		accessorKey: "salary",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Salary" />
		),
		cell: ({ row }) => {
			return <div className="flex">{`${row.getValue("salary")} LPA`}</div>;
		},
	},
	{
		accessorKey: "dateadded",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Date Added" />
		),
		cell: ({ row }) => {
			return <div className="flex">{row.getValue("dateadded")}</div>;
		},
		enableSorting: false,
	},
	{
		accessorKey: "id",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="View Job" />
		),
		cell: ({ row }) => {
			return (
				<div className="flex">
					<button className="bg-mydarkblue py-1 px-4 hover:bg-mycontrast text-white rounded-md">
						View
					</button>
				</div>
			);
		},
	},
];