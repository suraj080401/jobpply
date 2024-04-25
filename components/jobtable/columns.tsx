"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Jobs } from "@/utils/schema";
import { DataTableColumnHeader } from "./data-table-column-header";
import { Button } from "../ui/button";

export const columns: ColumnDef<Jobs>[] = [
	{
		accessorKey: "logo",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="" className="hidden" />
		),
		cell: ({ row }) => {
			return <div className="hidden"></div>;
		},
	},
	{
		accessorKey: "company",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Company" />
		),
		cell: ({ row }) => {
			return (
				<div className="flex flex-row items-center space-x-4">
					<div>
						<img src={`${row.getValue("logo")}`} className="w-6 h-6" />
					</div>
					<div>{row.getValue("company")}</div>
				</div>
			);
		},
	},
	{
		accessorKey: "role",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Role" />
		),
		cell: ({ row }) => {
			return <div className="flex">{row.getValue("role")}</div>;
		},
		filterFn: (row, value) => {
			return value.includes(row.getValue("role"));
		},
	},
	{
		accessorKey: "location",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Location" />
		),
		cell: ({ row }) => {
			return <div className="flex">{row.getValue("location")}</div>;
		},
	},
	{
		accessorKey: "experience",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Experience" />
		),
		cell: ({ row }) => {
			return <div className="flex">{row.getValue("experience")}</div>;
		},
		filterFn: (row, value) => {
			return value.includes(row.getValue("experience"));
		},
	},
	{
		accessorKey: "skills",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Skills" />
		),
		cell: ({ row }) => {
			return <div className="flex">{row.getValue("skills")}</div>;
		},
	},
	{
		accessorKey: "salary",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Salary" />
		),
		cell: ({ row }) => {
			return <div className="flex">{row.getValue("salary")}</div>;
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
