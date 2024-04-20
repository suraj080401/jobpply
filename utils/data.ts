import {
	allJobRole,
	allExperience,
	allNavTabs,
	topTenJobs,
	hackathonList,
} from "./schema";

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

export const hackathonListData: hackathonList[] = [
	{
		title: "Summer Hack 1.0",
		prize: "$300",
		location: "New Delhi, India",
		reg_start: "01 MARCH 2024",
		reg_end: "23 APRIL 2024",
	},
	{
		title: "HackFest'24",
		prize: "$1,440",
		location: "Gorakhpur, India",
		reg_start: "06 APRIL 2024",
		reg_end: "20 APRIL 2024",
	},
	{
		title: "ETHDubai 2024 Hackathon",
		prize: "$25,000",
		location: "Online",
		reg_start: "19 MARCH 2024",
		reg_end: "21 APRIL 2024",
	},
	{
		title: "Summer Hack 1.0",
		prize: "$300",
		location: "New Delhi, India",
		reg_start: "01 MARCH 2024",
		reg_end: "23 APRIL 2024",
	},
	{
		title: "Hacknology 2024",
		prize: "$300",
		location: "Online",
		reg_start: "11 APRIL 2024",
		reg_end: "22 APRIL 2024",
	},
	{
		title: "GLB HACKATHON 3.O",
		prize: "$603",
		location: "Greater Noida, India",
		reg_start: "22 MARCH 2024",
		reg_end: "25 APRIL 2024",
	},
];
