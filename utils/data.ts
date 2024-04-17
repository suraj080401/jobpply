import { allJobRole, allExperience, allNavTabs } from "./schema";

export const allJobRoleData: allJobRole[] = [
	{
		key: "frontend",
		value: "Frontend Developer",
	},
	{
		key: "backend",
		value: "Backend Developer",
	},
	{
		key: "fullstack",
		value: "FullStack Developer",
	},
	{
		key: "database",
		value: "Database Developer",
	},
	{
		key: "software",
		value: "Software Engineer",
	},
	{
		key: "datascience",
		value: "Data Science",
	},
];

export const allExperienceData: allExperience[] = [
	{
		key: "fresher",
		value: "Fresher",
		min: 0,
		max: 0,
	},
	{
		key: "zero2one",
		value: "0-1 yrs",
		min: 0,
		max: 1,
	},
	{
		key: "one2three",
		value: "1-3 yrs",
		min: 1,
		max: 3,
	},
	{
		key: "three2five",
		value: "3-5 yrs",
		min: 3,
		max: 5,
	},
	{
		key: "five2ten",
		value: "5-10 yrs",
		min: 5,
		max: 10,
	},
	{
		key: "tenplus",
		value: "10+ yrs",
		min: 10,
		max: 100,
	},
];

export const allNavTabsData: allNavTabs[] = [
	{
		keyValue: "home",
		value: "Home",
		route: "/",
	},
	{
		keyValue: "job",
		value: "Jobs",
		route: "/jobs",
	},
	{
		keyValue: "service",
		value: "Service",
		route: "/service",
	},
	{
		keyValue: "about",
		value: "About",
		route: "/about",
	},
	{
		keyValue: "contact",
		value: "Contact",
		route: "/contact",
	},
	{
		keyValue: "postjob",
		value: "Post Job",
		route: "/postjob",
	},
];
