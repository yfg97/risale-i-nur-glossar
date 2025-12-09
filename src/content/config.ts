import { defineCollection, z } from "astro:content";

const begriffeCollection = defineCollection({
  type: "content",
  schema: z.object({
    term_de: z.string(),
    term_tr: z.string(),
    term_os: z.string(),
    category: z.enum(["Theologie", "Recht", "Mystik", "Allgemein", "Grammatik"]),
    source_ref: z.string().optional(),
    isPublish: z.boolean().default(true),
  }),
});

export const collections = {
  begriffe: begriffeCollection
};
