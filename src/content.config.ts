import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			extend: z.object({
				// A comparison page uses the full main column (PageTitle.astro).
				wide: z.boolean().optional(),
				// false keeps the description for search and link previews and
				// leaves it off the page.
				lead: z.boolean().optional(),
			}),
		}),
	}),
};
