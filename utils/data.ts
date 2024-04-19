import { allJobRole, allExperience, allNavTabs, topTenJobs } from "./schema";

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

export const topTenJobsData: topTenJobs[] = [
	{
		role: "Frontend Developer",
		location: "Hyderabad",
		salary: "10-14",
		company: "Google",
		keywords: ["Fulltime", "Urgent"],
		logoURL: "https://logo.clearbit.com/www.google.com",
	},
	{
		role: "Data Analyst",
		location: "Gurgaon",
		salary: "8-11",
		company: "Oracle",
		keywords: ["Fulltime", "Urgent"],
		logoURL: "https://logo.clearbit.com/www.oracle.com",
	},
	{
		role: "Fullstack Developer",
		location: "Hyderabad",
		salary: "25-30",
		company: "Microsoft",
		keywords: ["Fulltime", "Urgent"],
		logoURL: "https://logo.clearbit.com/www.microsoft.com",
	},
	{
		role: "Database Developer",
		location: "Bengaluru",
		salary: "15-18",
		company: "Netflix",
		keywords: ["Fulltime", "Urgent"],
		logoURL: "https://logo.clearbit.com/www.netflix.com",
	},
	{
		role: "Backend Developer",
		location: "Noida",
		salary: "11-15",
		company: "Adobe",
		keywords: ["Fulltime", "Urgent"],
		logoURL: "https://logo.clearbit.com/www.adobe.com",
	},
];
