import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    views: z.number().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { blog };
