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
