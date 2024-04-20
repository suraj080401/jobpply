import React from "react";
import { z } from "zod";

const IallJobRole = z.object({
	value: z.string(),
	key: z.string(),
});

export type allJobRole = z.infer<typeof IallJobRole>;

const IallExperience = z.object({
	value: z.string(),
	min: z.number(),
	max: z.number(),
	key: z.string(),
});

export type allExperience = z.infer<typeof IallExperience>;

const IallNavTabs = z.object({
	value: z.string(),
	keyValue: z.string(),
	route: z.string(),
});

export type allNavTabs = z.infer<typeof IallNavTabs>;

const ItopTenJobs = z.object({
	role: z.string(),
	location: z.string(),
	salary: z.string(),
	company: z.string(),
	keywords: z.array(z.string()),
	logoURL: z.string(),
});

export type topTenJobs = z.infer<typeof ItopTenJobs>;

const IhackathonList = z.object({
	title: z.string(),
	location: z.string(),
	prize: z.string(),
	reg_start: z.string(),
	reg_end: z.string(),
});

export type hackathonList = z.infer<typeof IhackathonList>;
