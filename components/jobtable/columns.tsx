"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Jobs } from "@/utils/schema";
import { DataTableColumnHeader } from "./data-table-column-header";
import Link from "next/link";

export const columns: ColumnDef<Jobs>[] = [
	{
		accessorFn: (row) => (
			<div className="flex flex-row items-center space-x-2 w-36">
				<div>
					<img src={`${row.logo}`} className="w-8 h-auto" alt="logo" />
				</div>
				<div>{row.company}</div>
			</div>
		),
		id: "company",
		header: "Company",
		cell: (info) => info.getValue(),
	},
	{
		accessorKey: "category",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Category" />
		),
		cell: ({ row }) => {
			return <div className="flex">{row.getValue("category")}</div>;
		},
		filterFn: (row, id, value) => {
			return value.includes(row.getValue("category"));
		},
		enableHiding: false,
	},
	{
		accessorKey: "role",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Profile" />
		),
		cell: ({ row }) => {
			return <div className="flex w-42">{row.getValue("role")}</div>;
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
			return <div className="flex w-24">{row.getValue("experience")}</div>;
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
			return <div className="flex w-72">{row.getValue("skills")}</div>;
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
		accessorKey: "created_at",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Date Added" />
		),
		cell: ({ row }) => {
			return (
				<div className="flex">{formatDate(row.getValue("created_at"))}</div>
			);
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
					<Link
						href={`job/?id=${row.getValue("id")}`}
						className="bg-mydarkblue py-1 px-4 hover:bg-mycontrast text-white rounded-md"
					>
						View
					</Link>
				</div>
			);
		},
		enableHiding: false,
		enableSorting: false,
	},
];

function formatDate(data: string) {
	const date = new Date(data);
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is zero-based
	const day = String(date.getDate()).padStart(2, "0");
	return `${year}-${month}-${day}`;
}
