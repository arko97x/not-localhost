import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const resources = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./resources" }),
	schema: z.object({
		title: z.string().optional(),
		description: z.string().optional(),
	}),
});

export const collections = { resources };
