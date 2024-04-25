import {
	allJobRole,
	allExperience,
	allNavTabs,
	topTenJobs,
	hackathonList,
	ourServices,
	Jobs,
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
		key: "internship",
		value: "Internship",
	},
	{
		key: "entrylevel",
		value: "Entry Level",
	},
	{
		key: "midlevel",
		value: "Mid Level",
	},
	{
		key: "seniorlevel",
		value: "Senior Level",
	},
	{
		key: "Management",
		value: "Management",
	},
	{
		key: "director",
		value: "Director",
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
		role: "FullStack Developer",
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

export const ourServiceData: ourServices[] = [
	{
		title: "Resume Review Service",
		keywords: [
			"Professional feedback",
			"Optimization",
			"Tailored advice",
			"Increased visibility",
			"Expert insights",
		],
		uni_key: "resumereview",
		route: "resumereview",
	},
	{
		title: "Resume Writing Service",
		keywords: [
			"Professional writing",
			"Customization",
			"Industry-specific",
			"Highlight achievements",
			"ATS Friendly",
		],
		uni_key: "resumewriting",
		route: "resumewriting",
	},
	{
		title: "Interview Preparation Workshops",
		keywords: [
			"Confidence building",
			"Practice",
			"Effective strategies",
			"Mock interviews",
			"Confidence boost",
		],
		uni_key: "interview",
		route: "interview",
	},
	{
		title: "Skill Assessment Tests",
		keywords: [
			"Skill verification",
			"Instant results",
			"Proficiency assessment",
			"Verified skills",
			"Comprehensive library",
		],
		uni_key: "skilltest",
		route: "skilltest",
	},
	{
		title: "Tech Training Courses",
		keywords: [
			"Expert-led",
			"On-demand",
			"Practical lessons",
			"Flexibility",
			"Career advancement",
		],
		uni_key: "techtraining",
		route: "techtraining",
	},
	{
		title: "Freelancer Success Coaching",
		keywords: [
			"Personalized coaching",
			"Goal setting",
			"Lead Generation",
			"Overcoming challenges",
			"Industry success focus",
		],
		uni_key: "freelancercoaching",
		route: "freelancercoaching",
	},
];

export const allJobsData: Jobs[] = [
	{
		logo: "https://logo.clearbit.com/www.google.com",
		role: "Frontend Developer",
		location: "Hyderabad",
		salary: "10-14",
		company: "Google",
		experience: "Entry Level",
		skills: "HTML, CSS, Python",
		dateadded: "Today",
	},
	{
		role: "Data Analyst",
		location: "Gurgaon",
		salary: "8-11",
		company: "Oracle",
		logo: "https://logo.clearbit.com/www.oracle.com",
		experience: "Entry Level",
		skills: "HTML, CSS, Javascript",
		dateadded: "Today",
	},
	{
		role: "FullStack Developer",
		location: "Hyderabad",
		salary: "25-30",
		company: "Microsoft",
		logo: "https://logo.clearbit.com/www.microsoft.com",
		experience: "Entry Level",
		skills: "HTML, CSS, Javascript",
		dateadded: "Today",
	},
	{
		role: "Database Developer",
		location: "Bengaluru",
		salary: "15-18",
		company: "Netflix",
		logo: "https://logo.clearbit.com/www.netflix.com",
		experience: "Entry Level",
		skills: "HTML, CSS, Javascript",
		dateadded: "Today",
	},
	{
		role: "Backend Developer",
		location: "Noida",
		salary: "11-15",
		company: "Adobe",
		logo: "https://logo.clearbit.com/www.adobe.com",
		experience: "Entry Level",
		skills: "HTML, CSS, Javascript",
		dateadded: "Today",
	},
	{
		logo: "https://logo.clearbit.com/www.google.com",
		role: "Frontend Developer",
		location: "Hyderabad",
		salary: "10-14",
		company: "Google",
		experience: "Entry Level",
		skills: "HTML, CSS, Javascript",
		dateadded: "Today",
	},
	{
		role: "Data Analyst",
		location: "Gurgaon",
		salary: "8-11",
		company: "Oracle",
		logo: "https://logo.clearbit.com/www.oracle.com",
		experience: "Entry Level",
		skills: "HTML, CSS, Javascript",
		dateadded: "Today",
	},
	{
		role: "FullStack Developer",
		location: "Hyderabad",
		salary: "25-30",
		company: "Microsoft",
		logo: "https://logo.clearbit.com/www.microsoft.com",
		experience: "Entry Level",
		skills: "HTML, CSS, Javascript",
		dateadded: "Today",
	},
	{
		role: "Database Developer",
		location: "Bengaluru",
		salary: "15-18",
		company: "Netflix",
		logo: "https://logo.clearbit.com/www.netflix.com",
		experience: "Entry Level",
		skills: "HTML, CSS, Javascript",
		dateadded: "Today",
	},
	{
		role: "Backend Developer",
		location: "Noida",
		salary: "11-15",
		company: "Adobe",
		logo: "https://logo.clearbit.com/www.adobe.com",
		experience: "Entry Level",
		skills: "HTML, CSS, Javascript",
		dateadded: "Today",
	},
	{
		logo: "https://logo.clearbit.com/www.google.com",
		role: "Frontend Developer",
		location: "Hyderabad",
		salary: "10-14",
		company: "Google",
		experience: "Entry Level",
		skills: "HTML, CSS, Javascript",
		dateadded: "Today",
	},
	{
		role: "Data Analyst",
		location: "Gurgaon",
		salary: "8-11",
		company: "Oracle",
		logo: "https://logo.clearbit.com/www.oracle.com",
		experience: "Entry Level",
		skills: "HTML, CSS, Javascript",
		dateadded: "Today",
	},
	{
		role: "Fullstack Developer",
		location: "Hyderabad",
		salary: "25-30",
		company: "Microsoft",
		logo: "https://logo.clearbit.com/www.microsoft.com",
		experience: "Entry Level",
		skills: "HTML, CSS, Javascript",
		dateadded: "Today",
	},
	{
		role: "Database Developer",
		location: "Bengaluru",
		salary: "15-18",
		company: "Netflix",
		logo: "https://logo.clearbit.com/www.netflix.com",
		experience: "Internship",
		skills: "HTML, CSS, Javascript",
		dateadded: "Today",
	},
	{
		role: "Backend Developer",
		location: "Noida",
		salary: "11-15",
		company: "Adobe",
		logo: "https://logo.clearbit.com/www.adobe.com",
		experience: "Entry Level",
		skills: "HTML, CSS, Javascript",
		dateadded: "Today",
	},
];
